import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


//REDUX
import { Provider } from "react-redux";
import store from "../store";
import Navbar from './layouts/Navbar';
import Home from './Home';
import Titulares from './Titulares';
import Titular from './Titular';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>

        <Navbar />

        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/titulares'} component={Titulares} />
          <Route exact path={'/titular/:id'} component={Titular} />


        </Switch>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
