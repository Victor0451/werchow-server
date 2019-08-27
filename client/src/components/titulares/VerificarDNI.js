import React, { Component } from "react";
import toastr from "../../utils/toastr";

//redux
import { connect } from "react-redux";
import { verificarDNI } from "../../actions/titularActions";

class VerificarDNI extends Component {
  state = {
    dni: "",
    CONTRATO: "",
    NRO_DOC: ""
  };

  leerDatos = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checkDNI = e => {
    e.preventDefault();

    const { dni } = this.state;

    if (dni === "") {
      toastr.warning("Debes ingresar un DNI", "ATENCION");
    } else {
      if (Object.keys(dni).length < 7) {
        toastr.warning("El DNI debe tener como minimo 7 digitos", "ATENCION");
      } else {
        this.props.verificarDNI(dni);

        setTimeout(() => {
          const { NRO_DOC, CONTRATO } = this.props.titulares;
          const { dni } = this.state;

          if (NRO_DOC) {
            toastr.warning(
              "El DNI ingresado pertenece a un socio registrado",
              "ATENCION"
            );
            this.props.history.push(`/titulares/${CONTRATO}`);
          } else {
            toastr.success(
              "El DNI ingresado no se encuentra en el sistema",
              "ATENCION"
            );

            this.props.history.push(`/titular/nuevo/${dni}`);
          }
        }, 150);
      }
    }
  };

  render() {
    return (
      <div className="form-style-8">
        <h2>Ingresa el DNI para vefiricar si existe en el sistema</h2>

        <form className="row" onSubmit={this.checkDNI}>
          <div className="form-group col-md-6">
            <p className="has-dynamic-label">
              <input
                type="number"
                className=""
                onChange={this.leerDatos}
                id="in-range-input"
                name="dni"
                minLength="8"
                placeholder="DNI"
              />
              <label>DNI</label>
            </p>
          </div>
          <div className="col-md-6 mt-4">
            <button type="submit" className="btn btn-primary btn-block">
              Verificar
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  titulares: state.titulares.titular
});

export default connect(
  mapStateToProps,
  { verificarDNI }
)(VerificarDNI);
