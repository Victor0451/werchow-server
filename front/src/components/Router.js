import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Form from "./Form";
import Adherente from "./Adherente";
import EditAdh from "./EditAdh";
import ListadoTitulares from "./ListadoTitulares";
import Campañas from "./Campañas";
import PageNotFound from "./PageNotFound";
import Home from "./Home";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/altaafiliado" component={Form} />
          <Route exact path="/altaadherhente" component={Adherente} />
          <Route exact path="/editaradh/:id" component={EditAdh} />
          <Route exact path="/listadotitulares" component={ListadoTitulares} />
          <Route exact path="/listado1001" component={Campañas} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
