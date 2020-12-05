const express = require("express");
const router = express.Router();
const exec = require("child_process").exec;

router.get("/", (req, res) => {
  console.log("Request received.");
  //executes my shell script - main.sh when a request is posted to the server
  exec("sh main.sh", function (err, stdout, stderr) {
    if (err) console.log(err);

    //Print stdout/stderr to console
    console.log('out', stdout);
    console.log('error', stderr);

    //Simple response to user whenever localhost:8888 is accessed
    res.send(stdout);
  });
});

module.exports = router;
