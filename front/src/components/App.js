import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


//REDUX
import { Provider } from "react-redux";
import store from "../store";
import Navbar from './layouts/Navbar';
import Home from './Home';
import Titulares from './titulares/Titulares';
import Titular from './titulares/Titular';
import NuevoTitular from './titulares/NuevoTitular';
import NuevoAdherente from './adherentes/NuevoAdherente';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>

        <Navbar />

        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/titulares'} component={Titulares} />
          <Route exact path={'/titular/:id'} component={Titular} />
          <Route exact path={'/titulares/nuevo'} component={NuevoTitular} />
          <Route exact path={'/adherentes/nuevo'} component={NuevoAdherente} />


        </Switch>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
