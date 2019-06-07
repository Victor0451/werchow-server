import React, { Component } from "react";
import { getTitulares } from "../functions/apis";
import "rc-progress/assets/index.css";
import { Line } from "rc-progress";

class ListadoTitulares extends Component {
  constructor() {
    super();
    this.state = {
      titulares: [],
      percent: 0
    };
    this.increase = this.increase.bind(this);
    this.restart = this.restart.bind(this);
  }

  increase() {
    const percent = this.state.percent + 1;
    if (percent >= 100) {
      clearTimeout(this.tm);

      return;
    }

    this.setState({ percent });
    this.tm = setTimeout(this.increase, 10);
    let pgbar = document.getElementById("progressbar");

    if (this.state.percent === 99) {
      pgbar.hidden = true;
    }
  }

  restart() {
    clearTimeout(this.tm);
    this.setState({ percent: 0 }, () => {
      this.increase();
    });
  }

  getListTitularesWhitApi = () => {
    getTitulares()
      .then(titulares => {
        this.setState({
          titulares: titulares.data
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getListTitularesWhitApi();
    this.increase();
  }

  render() {
    return (
      <div className="form-style-8">
        <h2>Listado de Tirulares</h2>

        <center id="progressbar">
          <div className="progressbar">
            <Line
              strokeWidth="4"
              strokeColor="#D3D3D3"
              percent={this.state.percent}
            />
          </div>
        </center>

        <div className="table-wrapper table-responsive">
          <table className="fl-table">
            <thead>
              <tr>
                <th scope="col">Sucursal</th>
                <th scope="col">Contrato</th>
                <th scope="col">DNI</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Nombres</th>
                <th scope="col">Nacimiento</th>
                <th scope="col">Fecha de Alta</th>
                <th scope="col">Fecha de Vigencia</th>
                <th scope="col">Obra Social</th>
                <th scope="col">Sexo</th>
                <th scope="col">Telefono</th>
              </tr>
            </thead>
            <tbody>
              {this.state.titulares.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="toggler">{item.SUCURSAL}</td>
                    <td>{item.CONTRATO}</td>
                    <td>{item.NRO_DOC}</td>
                    <td>{item.APELLIDOS}</td>
                    <td>{item.NOMBRES}</td>
                    <td>{item.NACIMIENTO}</td>
                    <td>{item.ALTA}</td>
                    <td>{item.VIGENCIA}</td>

                    <td>{item.BAJA}</td>

                    <td>{item.OBRA_SOC}</td>

                    <td>{item.SEXO}</td>

                    <td>
                      {/* <Link to={"/editaradh/" + item.NRO_DOC} className="btn btn-primary btn-block" >Editar</Link>
                                        <button type="submit" className="btn btn-danger btn-block">Eliminar</button> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListadoTitulares;
