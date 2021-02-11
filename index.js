// LIBRERIAS
const express = require("express");
const cors = require("cors")

// SE INSTANCIA EL APP DE EXPRESS
const app = express();

//CORS
app.use(cors());
app.use(express.json({ extended: true }));

// SE INSTANCIA EL PUERTO
const port = process.env.PORT || 4000;

//creamos las rutas del api
app.use("/api/problemas", require("./routes/problemas"));
app.use("/exec/test", require("./routes/test"));
app.use("/api/cplusplus", require("./routes/cplusplus"));
app.use("/api/users", require("./routes/users"));

// SE CREA EL SERVICIO
app.listen(port, '0.0.0.0', () => {
    console.log("Running on", port);
});