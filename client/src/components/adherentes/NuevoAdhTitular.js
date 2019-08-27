import React, { Component } from "react";
import toastr from "../../utils/toastr";
import { connect } from "react-redux";
import { mostrarTitular } from "../../actions/titularActions";
import FormNuevoAdherente from "./FormNuevoAdherente";

class NuevoAdhTitular extends Component {
  state = {
    contrato: "",

    titular: {}
  };

  leerDatos = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  buscarContrato = e => {
    e.preventDefault();

    const { contrato } = this.state;

    if (contrato === "") {
      toastr.warning("Debes ingresar un numero de socio", "ATENCION");
    } else {
      if (contrato) {
        this.props.mostrarTitular(contrato);

        setTimeout(() => {
          const { titular } = this.props;

          this.setState({
            titular: titular
          });
          document.getElementById("busqueda").hidden = true;
          document.getElementById("baja").hidden = false;
        }, 150);
      }
    }
  };

  render() {
    const { titular } = this.state;

    if (!titular)
      return (
        <div className="alert alert-danger text-center mt-4">
          <strong>NO EXISTE EL TITULAR O NO ESTA CARGADO</strong>
        </div>
      );

    return (
      <div>
        <div className="form-style-8 " id="busqueda">
          <h2>Buscar Socio</h2>

          <form onSubmit={this.buscarContrato}>
            <div className="row">
              <div className="col-md-6">
                <p className="has-dynamic-label">
                  <input
                    type="text"
                    className=""
                    id="dynamic-label-input"
                    name="contrato"
                    onChange={this.leerDatos}
                    placeholder="Ingresar N° de Socio"
                  />
                  <label>N° de Socio</label>
                </p>
              </div>

              <div className="col-md-6">
                <button className="btn btn-primary  btn-block mt-4">
                  Buscar
                </button>
              </div>
            </div>
          </form>
        </div>

        <div id="baja" hidden="true">
          <FormNuevoAdherente id={titular.CONTRATO} className="form-style-8 " />
        </div>
      </div>
    );
  }
}

//state
const mapStateToProps = state => ({
  titular: state.titulares.titular,
  adherentes: state.adherentes.adherentes
});

export default connect(
  mapStateToProps,
  { mostrarTitular }
)(NuevoAdhTitular);
