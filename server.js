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
app.use(
  "/api/werchow/movimientosmutual",
  require("./routes/werchow/movimientos")
);

// MUTUAL
app.use("/api/mutual/adherent", require("./routes/werchow/adherente"));


//SGI
app.use("/api/sgi/operador", require("./routes/sgi/operador"));
app.use("/api/sgi/auth", require("./routes/sgi/auth"));
app.use("/api/sgi/campanas", require("./routes/sgi/campanas"));
app.use("/api/sgi/campanasM", require("./routes/sgi/campanasM"));
app.use("/api/sgi/estadistica", require("./routes/sgi/estadistica"));
app.use("/api/sgi/noticia", require("./routes/sgi/noticia"));
app.use("/api/sgi/prestamos", require("./routes/sgi/prestamos"));
app.use("/api/sgi/socios", require("./routes/sgi/socios"));
app.use("/api/sgi/datos", require("./routes/sgi/datos"));
app.use("/api/sgi/eventos", require("./routes/sgi/eventos"));
app.use("/api/sgi/turnobajas", require("./routes/sgi/turno_bajas"));



//SEPELIO
app.use("/api/sepelio/ataudes", require("./routes/sepelio/ataudes"));
app.use("/api/sepelio/cajasepelio", require("./routes/sepelio/caja_sepelio"));
app.use("/api/sepelio/servicio", require("./routes/sepelio/servicio"));
app.use(
  "/api/sepelio/planificacion",
  require("./routes/sepelio/planificacion_guardias")
);
app.use(
  "/api/sepelio/serviciogastos",
  require("./routes/sepelio/servicio_gastos")
);
app.use(
  "/api/sepelio/servicioliquidacion",
  require("./routes/sepelio/servicio_liquidacion")
);
app.use("/api/sepelio/parcelas", require("./routes/sepelio/parcelas"));
app.use("/api/sepelio/tareas", require("./routes/sepelio/tareas"));
app.use("/api/sepelio/tareasadicionales", require("./routes/sepelio/tareas_adicionales"));
app.use("/api/sepelio/liquidacionsepelio", require("./routes/sepelio/liquidacion_sepelio"));


//VENTAS
app.use("/api/ventas/consultas", require("./routes/ventas/consultas"));
app.use("/api/ventas/planes", require("./routes/ventas/planes"));
app.use("/api/ventas/asesores", require("./routes/ventas/asesores"));

// UPLOADS
app.use(
  "/api/archivos/legajovirtual",
  require("./routes/archivos/LegajoVirtual")
);
app.use(
  "/api/archivos/legajovirtualm",
  require("./routes/archivos/LegajoVirtualM")
);
app.use(
  "/api/archivos/legajovirtualprestamos",
  require("./routes/archivos/LegajoVirtualPrestamos")
);
app.use(
  "/api/archivos/legajovirtualservicios",
  require("./routes/archivos/LegajoVirtualServicios")
);
app.use(
  "/api/archivos/legajovirtualasesores",
  require("./routes/archivos/LegajoVirtualAsesores")
);
// CLUBWERCHOW
app.use("/api/clubwerchow/socios", require("./routes/clubwerchow/socios"));
app.use(
  "/api/clubwerchow/comercios",
  require("./routes/clubwerchow/comercios")
);

// SEPELIO PAGINA
app.use("/api/sepeliospag/grupos", require("./routes/sepeliopag/grupos"));
app.use("/api/clubwerchow/connac", require("./routes/sepeliopag/connac"));

// // INFORMES
app.use("/api/sgi/moraw", require("./routes/informe/moraw"));
app.use("/api/sgi/moram", require("./routes/informe/moram"));
app.use("/api/sgi/efectividadw", require("./routes/informe/efectividadw"));
app.use("/api/sgi/efectividadm", require("./routes/informe/efectividadm"));
app.use(
  "/api/sgi/actualizartablasm",
  require("./routes/informe/actualizartablasM")
);
app.use(
  "/api/sgi/actualizartablasw",
  require("./routes/informe/actualizartablasW")
);

app.use(
  "/api/sgi/insertartablasw",
  require("./routes/informe/insertartablasW")
);

app.use(
  "/api/sgi/insertartablasm",
  require("./routes/informe/insertartablasM")
);

app.use("/api/sgi/mapa", require("./routes/informe/mapa"));
app.use("/api/sgi/orgamerica", require("./routes/informe/orgamerica"));

//Conecting DB

db.sgiSequelize
  .authenticate()
  .then(() => console.log("Database SGI conected..."))
  .catch((err) => console.log("error" + err));

db.wSequelize
  .authenticate()
  .then(() => console.log("Database WERCHOW conected..."))
  .catch((err) => console.log("error" + err));

db.infoSequelize
  .authenticate()
  .then(() => console.log("Database INFORMES conected..."))
  .catch((err) => console.log("error" + err));

db.sepelioSequelize
  .authenticate()
  .then(() => console.log("Database SEPELIO conected..."))
  .catch((err) => console.log("error" + err));

db.liqSequelize
  .authenticate()
  .then(() => console.log("Database LIQUIDACIONES conected..."))
  .catch((err) => console.log("error" + err));

// server escuchando

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

https.createServer(options, app).listen("5001");
