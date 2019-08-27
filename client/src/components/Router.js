import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./Home";
import Titulares from "./titulares/Titulares";
import Titular from "./titulares/Titular";
import NuevoTitular from "./titulares/NuevoTitular";
import NuevoAdherente from "./adherentes/NuevoAdherente";
import BuscarTitular from "./titulares/BuscarTitular";
import Pagos from "./pagos/pagos";
import Pagobco from "./pagos/pagobco";
import EditarTitular from "./titulares/EditarTitular";
import Memo from "./memo/memo";
import NuevoMemo from "./memo/NuevoMemo";
import Historia from "./historia/Historia";
import CambioTitular from "./ficha/CambioTitular";
import BajaAdherente from "./ficha/BajaAdherente";
import BajaFicha from "./ficha/BajaFicha";
import VerificarDNI from "./titulares/VerificarDNI";
import ListadoPrestamos from "./prestamos/ListadoPrestamos";

//REDUX
import { Provider } from "react-redux";
import store from "../store";

export default class Router extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />

          <Switch>
            <Route exact path={"/"} component={Home} />

            {/* TITULARES */}

            <Route exact path={"/titulares"} component={Titulares} />
            <Route exact path={"/titulares/:id"} component={Titular} />
            <Route
              exact
              path={"/titular/verificardni"}
              component={VerificarDNI}
            />
            <Route exact path={"/titular/nuevo/:id"} component={NuevoTitular} />
            <Route exact path={"/titular/buscar"} component={BuscarTitular} />
            <Route
              exact
              path={"/titulares/editar/:id"}
              component={EditarTitular}
            />
            <Route
              exact
              path={"/titulares/historia/:id"}
              component={Historia}
            />

            {/* ADHERENTES */}

            <Route
              exact
              path={"/adherentes/nuevo/:id"}
              component={NuevoAdherente}
            />
            <Route
              exact
              path={"/adherentes/nuevo"}
              component={NuevoAdherente}
            />

            {/* PAGOS */}
            <Route exact path={"/pagos/cuotas/:id"} component={Pagos} />
            <Route exact path={"/pagos/debitos/:id"} component={Pagobco} />

            {/* MEMOS */}
            <Route exact path={"/memo/:id"} component={Memo} />
            <Route exact path={"/memo/nuevo/:id"} component={NuevoMemo} />

            {/* FICHAS */}
            <Route
              exact
              path={"/ficha/cambiotitular"}
              component={CambioTitular}
            />
            <Route
              exact
              path={"/ficha/cambiotitular/:id"}
              component={CambioTitular}
            />
            <Route
              exact
              path={"/ficha/bajaadherente"}
              component={BajaAdherente}
            />
            <Route
              exact
              path={"/ficha/bajaadherente/:id"}
              component={BajaAdherente}
            />
            <Route exact path={"/ficha/bajaficha/:id"} component={BajaFicha} />
            <Route exact path={"/ficha/bajaficha/"} component={BajaFicha} />

            {/* PRESTAMOS */}
            <Route
              exact
              path={"/prestamos/listado/:id"}
              component={ListadoPrestamos}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
