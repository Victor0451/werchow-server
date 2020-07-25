const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

const bodyparser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./db/database");

// settings

const app = express();
app.use(morgan("dev"));

app.use(cors());
app.set("port", process.env.PORT || 5002);

const options = {
  key: fs.readFileSync(path.resolve(__dirname, "./clubwerchow.com.key")),

  cert: fs.readFileSync(path.resolve(__dirname, "./clubwerchow.com.crt")),
};
console.log(options),
  //middlewares
  app.use(bodyparser.json());
app.use("*", cors());

//Routes

//WERCHOW
app.use("/api/werchow/maestro", require("./routes/werchow/maestro"));
app.use("/api/werchow/adherent", require("./routes/werchow/adherente"));
app.use("/api/werchow/fichas", require("./routes/werchow/fichas"));
app.use("/api/werchow/historia", require("./routes/werchow/historia"));
app.use("/api/werchow/memo", require("./routes/werchow/memo"));
app.use("/api/werchow/pagos", require("./routes/werchow/pagos"));
app.use("/api/werchow/pagobco", require("./routes/werchow/pagos_bco"));

//MUTUAL
app.use("/api/mutual/maestro", require("./routes/mutual/maestro"));
app.use("/api/mutual/maestro", require("./routes/mutual/maestro"));
app.use("/api/mutual/adherent", require("./routes/mutual/adherente"));
app.use("/api/mutual/fichas", require("./routes/mutual/fichas"));
app.use("/api/mutual/historia", require("./routes/mutual/historia"));
app.use("/api/mutual/memo", require("./routes/mutual/memo"));
app.use("/api/mutual/pagos", require("./routes/mutual/pagos"));
app.use("/api/mutual/pagobco", require("./routes/mutual/pagos_bco"));
app.use("/api/mutual/caja", require("./routes/mutual/caja"));

//SGI
app.use("/api/sgi/operador", require("./routes/sgi/operador"));
app.use("/api/sgi/auth", require("./routes/sgi/auth"));
app.use("/api/sgi/campanas", require("./routes/sgi/campanas"));
app.use("/api/sgi/campanasM", require("./routes/sgi/campanasM"));
app.use("/api/sgi/estadistica", require("./routes/sgi/estadistica"));
app.use("/api/sgi/noticia", require("./routes/sgi/noticia"));
app.use("/api/sgi/moraw", require("./routes/informe/moraw"));
app.use("/api/sgi/moram", require("./routes/informe/moram"));
app.use("/api/sgi/efectividadw", require("./routes/informe/efectividadw"));
app.use("/api/sgi/efectividadm", require("./routes/informe/efectividadm"));
app.use("/api/sgi/prestamos", require("./routes/sgi/prestamos"));
app.use("/api/sgi/socios", require("./routes/sgi/socios"));

//SEPELIO
app.use("/api/sepelio/ataudes", require("./routes/sepelio/ataudes"));
app.use("/api/sepelio/cajasepelio", require("./routes/sepelio/caja_sepelio"));
app.use("/api/sepelio/servicio", require("./routes/sepelio/servicio"));

//VENTAS
app.use("/api/ventas/consultas", require("./routes/ventas/consultas"));

// UPLOADS
app.use("/api/archivos/legajovirtual", require("./routes/archivos/LegajoVirtual"));
app.use("/api/archivos/legajovirtualm", require("./routes/archivos/LegajoVirtualM"));


// CLUBWERCHOW
app.use("/api/clubwerchow/socios", require("./routes/clubwerchow/socios"));
app.use(
  "/api/clubwerchow/comercios",
  require("./routes/clubwerchow/comercios")
);

//Conecting DB

db.werchowSequelize
  .authenticate()
  .then(() => console.log("Database WERCHOW conected..."))
  .catch((err) => console.log("error" + err));

db.mutualSequelize
  .authenticate()
  .then(() => console.log("Database MUTUAL conected..."))
  .catch((err) => console.log("error" + err));

db.sgiSequelize
  .authenticate()
  .then(() => console.log("Database SGI conected..."))
  .catch((err) => console.log("error" + err));

db.wSequelize
  .authenticate()
  .then(() => console.log("Database W conected..."))
  .catch((err) => console.log("error" + err));

db.infoSequelize
  .authenticate()
  .then(() => console.log("Database INFORMES conected..."))
  .catch((err) => console.log("error" + err));

db.sepelioSequelize
  .authenticate()
  .then(() => console.log("Database SEPELIO conected..."))
  .catch((err) => console.log("error" + err));

// server escuchando

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

https.createServer(options, app).listen("5001");
