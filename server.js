const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./db/database");

// settings

const app = express();
app.use(morgan("dev"));

app.use(cors());
app.set("port", process.env.PORT || 5002);

//middlewares
app.use(bodyparser.json());
app.use("*", cors());

//Routes
//MUTUAL
app.use("/api/werchow/maestro", require("./routes/werchow/maestro"));
app.use("/api/werchow/adherent", require("./routes/werchow/adherente"));
app.use("/api/werchow/fichas", require("./routes/werchow/fichas"));
app.use("/api/werchow/historia", require("./routes/werchow/historia"));
app.use("/api/werchow/memo", require("./routes/werchow/memo"));
app.use("/api/werchow/pagos", require("./routes/werchow/pagos"));
app.use("/api/werchow/pagobco", require("./routes/werchow/pagos_bco"));

//WERCHOW
app.use("/api/mutual/maestro", require("./routes/mutual/maestro"));
app.use("/api/mutual/maestro", require("./routes/mutual/maestro"));
app.use("/api/mutual/adherent", require("./routes/mutual/adherente"));
app.use("/api/mutual/fichas", require("./routes/mutual/fichas"));
app.use("/api/mutual/historia", require("./routes/mutual/historia"));
app.use("/api/mutual/memo", require("./routes/mutual/memo"));
app.use("/api/mutual/pagos", require("./routes/mutual/pagos"));
app.use("/api/mutual/pagobco", require("./routes/mutual/pagos_bco"));

//SGI
app.use("/api/sgi/operador", require("./routes/sgi/operador"));
app.use("/api/sgi/auth", require("./routes/sgi/auth"));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//Conecting DB

db.werchowSequelize
  .authenticate()
  .then(() => console.log("Database Werchow conected..."))
  .catch(err => console.log("error" + err));

db.mutualSequelize
  .authenticate()
  .then(() => console.log("Database Mutual conected..."))
  .catch(err => console.log("error" + err));

db.sgiSequelize
  .authenticate()
  .then(() => console.log("Database SGI conected..."))
  .catch(err => console.log("error" + err));

// server escuchando

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
