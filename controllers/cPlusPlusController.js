const exec = require("child_process").exec;
const { request } = require("express");
const router = require("../routes/cplusplus");
const shBuilder = require("../helpers/shBuilder");
const fs = require("fs");
const axios = require('axios');

exports.compileFile = async (req, res) => {
  try {
    const nameHash = "testerFile"; //nombre del archivo
    const idProblema = req.body.idProblem; //id del problema que se le esta enviando(1,2,3)
    const response = await axios.get(`http://localhost:3000/problems/${idProblema}`); //envio y respuesta de la peticion dependiendo de los casos
    const casos = response.data.casos;//guarda la respuesta en la variable casos
    const respuestasCasos = []; //guarda las respuestas de los casos
    await Promise.all(
      casos.map(async (caso, i) => {  //recorre los casos de prueba
        const name = `${nameHash}${i}`;//va dando nombre(hash)con su numeracion correspondiente
        shBuilder.createShFile(name, req.body.code, caso.parametros, () => {    //crea archivo sh
          exec(`sh ${name}.sh`, function (err, stdout, stderr) {
            //si todos los casos fueron correctos los pone pass
            if (stdout) {
              // se envia el codigo 200 todo esta bien al compilar
              if (stdout == caso.respuestaEsperada) {
                respuestasCasos.push(`test ${i} Pass`);
              } else {    //si no pasa 
                respuestasCasos.push(
                  `Se esperaba: "${caso.respuestaEsperada}" en vez de: "${stdout}"`
                );
              }
            } else if (stderr) {
              // se enia el codigo 400 hay un error al compilar
              try {
                res.status(400).json({ msg: stderr });
              } catch (e) {
                console.log("error");
              }
            }
            try {
              fs.unlinkSync(`./${name}.sh`);
              //file removed
            } catch (err) {
              console.error(err);
            }
            console.log("result ------>", stdout);
            if (respuestasCasos.length == casos.length) {
              try {
                res.json({ respuestasCasos });
              } catch (err) {
                console.error(err);
              }
            }
          });
        });
      })
    );
  } catch (error) {
    console.log(error);
  }
};
