const exec = require("child_process").exec;

exports.compileFile = (req, res) => {
    console.log("Request received.");
    //executes my shell script - main.sh when a request is posted to the server
    exec("sh main.sh", function (err, stdout, stderr) {
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
    });
  }