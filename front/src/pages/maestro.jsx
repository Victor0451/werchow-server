import React, { Component } from 'react';
import Axios from 'axios';

//import Grid from '../components/Grid';
import Form from '../components/Form';
import Searchform from '../components/Searchform';

import '../css/App.css';

class Maestro extends Component {
  state = {
    data: []
  };

  get = async (e) => {
    e.preventDefault();
    let url = await 'http://localhost:3002/getcontrato';
    Axios.get(url)
      .then((ambilData) => {
        console.log(ambilData.data);
        this.setState({
          data: ambilData.data,
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        < div className="App">



          <div className="container">
            <div className="mt-4">
              <h1>Ingreso de Registros</h1>
            </div>

            <div className="row justify-content-center mt-4">
              <div className="col-md-10">
                <Form />
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="container mt-4">
              <div className="row mt-4">
                <h2>Buscar un afiliado</h2>
              </div>

              <div className="col-md-12 mt-4">
                <Searchform />
              </div>
            </div>

          </div>
        </div>
      </div>

    );
  }
}

export default Maestro;