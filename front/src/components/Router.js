import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Form from './Form';
import FormAdherente from './FormAdherente';
import EditAdh from './EditAdh';
import ListadoTitulares from './ListadoTitulares';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>

                <Header />

                <Switch>

                    <Route exact path="/altaafiliado" component={Form} />
                    <Route exact path="/altaadherhente" component={FormAdherente} />
                    <Route exact path="/editaradh/:id" component={EditAdh} />
                    <Route exact path="/listadotitulares" component={ListadoTitulares} />




                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;