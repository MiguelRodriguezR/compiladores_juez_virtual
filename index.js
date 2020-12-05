// LIBRERIAS
const express = require("express");

// SE INSTANCIA EL APP DE EXPRESS
const app = express();

// SE INSTANCIA EL PUERTO
const port = process.env.PORT || 4000;


//creamos las rutas del api
app.use("/api/problemas", require("./routes/problemas"));
app.use("/exec/test", require("./routes/test"));

// SE CREA EL SERVICIO
app.listen(port, '0.0.0.0', () => {
    console.log("Running on", port);
});