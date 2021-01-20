const exec = require("child_process").exec;
const { request } = require("express");
const router = require("../routes/cplusplus");
const shBuilder = require("../helpers/shBuilder");
const fs = require("fs");

exports.compileFile = async (req, res) => {
  const nameHash = "testerFile";
  const idProblema = req.body.idProblem;
  const casos = [
    {
      parametros: [1, 2],
      respuestaEsperada: 3,
    },
    {
      parametros: [25, 50],
      respuestaEsperada: 75,
    },
  ];
  const respuestasCasos = [];
  await Promise.all(
    casos.map(async (caso, i) => {
      const name = `${nameHash}${i}`;
      shBuilder.createShFile(name, req.body.code, caso.parametros, () => {
        exec(`sh ${name}.sh`, function (err, stdout, stderr) {
          if (stdout) {
            // se envia el codigo 200 todo esta bien al compilar
            if (stdout == caso.respuestaEsperada) {
              respuestasCasos.push(`test ${i} Pass`);
            } else {
              respuestasCasos.push(
                `Se esperaba: "${caso.respuestaEsperada}" en vez de: "${stdout}"`
              );
            }
          } else if (stderr) {
            // se enia el codigo 400 hay un error al compilar
            // res.status(400).json({ msg: stderr });
          }
          console.log(respuestasCasos);
        });
      });
      try {
        fs.unlinkSync(`./${name}.sh`);
        //file removed
      } catch (err) {
        console.error(err);
      }
    })
  );
  res.send(respuestasCasos);
};
