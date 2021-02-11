const axios = require("axios");

exports.getUser = async (req, res) => {
  const response = await axios.get(`http://localhost:3000/users`);
  res.send(response.data);
};
