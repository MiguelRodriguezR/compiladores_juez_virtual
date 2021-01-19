const exec = require("child_process").exec;
const { request } = require("express");
const router = require("../routes/cplusplus");
const shBuilder = require('../helpers/shBuilder')

exports.compileFile = (req, res) => {
    const name = 'main2'
    shBuilder.createShFile(name,req.body.code,[1,2], () => {
        exec(`sh ${name}.sh`, function (err, stdout, stderr) {
            if(stdout){
                // se envia el codigo 200 todo esta bien al compilar
                res.send(stdout);
            } else if(stderr){
                // se enia el codigo 400 hay un error al compilar
                res.status(400).json({msg: stderr})
            }
            //logs para el node.js
            console.log('out', stdout);
            console.log('error', stderr);
        })
    })
}