const axios = require("axios");
const { request } = require("express");


exports.getUser = async (req, res) => {
  const response = await axios.get(`http://localhost:3000/users`);
  res.send(response.data);
};

exports.addUserProblem = async (req, res) => {
  idUser = req.body.idUser;
  idProblem = req.body.idProblem;
  const responseUser = await axios.get(`http://localhost:3000/users/${idUser}`);
  const user = responseUser.data;
  if(user && user.solvedProblems && !user.solvedProblems.find( p => p == idProblem)){
    user.solvedProblems = [...user.solvedProblems, idProblem]
    await axios.put(`http://localhost:3000/users/${idUser}`, user);
  }
  res.send(user);
};
