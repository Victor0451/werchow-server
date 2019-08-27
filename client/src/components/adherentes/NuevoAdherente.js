import React, { Component } from "react";
import FormNuevoAdherente from "./FormNuevoAdherente";
import toastr from "../../utils/toastr";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

//redux
import { connect } from "react-redux";
import { agregarAdherente } from "../../actions/adherenteActions";
import { mostrarTitular } from "../../actions/titularActions";

class NuevoAdherente extends Component {
  grupoRef = React.createRef();
  OSRef = React.createRef();
  PlanRef = React.createRef();
  SubPlanRef = React.createRef();
  SucursalRef = React.createRef();
  ContratoRef = React.createRef();
  LocalidadesRef = React.createRef();
  ProductorRef = React.createRef();
  ZonaRef = React.createRef();
  AltaRef = React.createRef();
  VigenciaRef = React.createRef();

  state = {
    ALTA: "",
    APELLIDOS: "",
    MOVIL: "",
    OPERADOR: "",
    PRODUCTOR: "",
    CONTRATO: "",
    CUOTA: "",
    GRUPO: "",
    ZONA: "",
    NACIMIENTO: "",
    NOMBRES: "",
    NRO_DOC: "",
    OBRA_SOC: "",
    PLAN: "",
    RECIBO: "",
    SEXO: "",
    SUCURSAL: "",
    TELEFONO: "",
    VIGENCIA: "",
    CALLE: "",
    NRO_CALLE: "",
    DOMI_COBR: "",
    DOM_LAB: "",
    BARRIO: "",
    LOCALIDAD: "",
    EMPRESA: "W",
    error: false,
    id: ""
  };

  leerDatos = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  buscarAdherentesDirecto = contrato => {
    if (contrato) {
      this.props.mostrarTitular(contrato);

      setTimeout(() => {
        const { titular } = this.props;

        this.setState({
          id: titular.CONTRATO
        });
      }, 150);
    }
  };

  buscarAdherentes = e => {
    e.preventDefault();

    const { contrato } = this.state;

    if (contrato === "") {
      toastr.warning("Debes ingresar un numero de socio", "ATENCION");
    } else {
      if (contrato) {
        this.props.mostrarTitular(contrato);

        setTimeout(() => {
          const { titular } = this.props;
          console.log(titular);
          this.setState({
            id: titular.CONTRATO
          });

          document.getElementById("busqueda").hidden = true;
          document.getElementById("baja").hidden = false;
        }, 150);
      }
    }
  };

  nuevoTitular = e => {
    e.preventDefault();

    const {
      APELLIDOS,
      MOVIL,
      OPERADOR,
      CUOTA,
      NACIMIENTO,
      NOMBRES,
      NRO_DOC,
      RECIBO,
      SEXO,
      TELEFONO,
      CALLE,
      NRO_CALLE,
      DOMI_COBR,
      DOM_LAB,
      BARRIO,
      EMPRESA
    } = this.state;

    const { id } = this.props.match.params;

    const adherente = {
      SUCURSAL: this.SucursalRef.current.value,
      PLAN: this.PlanRef.current.value,
      SUB_PLAN: this.SubPlanRef.current.value,
      GRUPO: this.grupoRef.current.value,
      ZONA: this.ZonaRef.current.value,
      OBRA_SOC: this.OSRef.current.value,
      CONTRATO: this.ContratoRef.current.value,
      APELLIDOS,
      MOVIL,
      OPERADOR,
      PRODUCTOR: this.ProductorRef.current.value,
      CUOTA,
      NACIMIENTO,
      ALTA: this.AltaRef.current.value,
      VIGENCIA: this.VigenciaRef.current.value,
      NOMBRES,
      NRO_DOC,
      RECIBO,
      SEXO,
      TELEFONO,
      CALLE,
      NRO_CALLE,
      DOMI_COBR,
      DOM_LAB,
      BARRIO,
      LOCALIDAD: this.LocalidadesRef.current.value,
      EMPRESA,
      ESTADO: true
    };

    if (
      APELLIDOS === "" ||
      NOMBRES === "" ||
      NACIMIENTO === "" ||
      NRO_DOC === "" ||
      SEXO === "" ||
      TELEFONO === "" ||
      RECIBO === "" ||
      CUOTA === ""
    ) {
      this.setState({ error: true });
      return;
    }
    this.setState({ error: false });

    this.props.agregarAdherente(adherente);

    confirmAlert({
      title: "Atencion",
      message: "¿Desea Ingresar Adherentes?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            this.props.history.push(`/adherentes/nuevo/${id}`);
          }
        },

        {
          label: "No",
          onClick: () => {
            this.props.history.push(`/titulares/${id}`);
          }
        }
      ]
    });
  };

  render() {
    const { id } = this.state;
    return (
      <div>
        <div className="form-style-8 " id="busqueda">
          <h2>Buscar Socio</h2>

          <form onSubmit={this.buscarAdherentes}>
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
          <FormNuevoAdherente
            id={id}
            leerDatos={this.leerDatos}
            nuevoTitular={this.nuevoTitular}
            error={this.state.error}
            grupoRef={this.grupoRef}
            OSRef={this.OSRef}
            PlanRef={this.PlanRef}
            SubPlanRef={this.SubPlanRef}
            SucursalRef={this.SucursalRef}
            ContratoRef={this.ContratoRef}
            LocalidadesRef={this.LocalidadesRef}
            ProductorRef={this.ProductorRef}
            ZonaRef={this.ZonaRef}
            AltaRef={this.AltaRef}
            VigenciaRef={this.VigenciaRef}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  adherente: state.adherente,
  titular: state.titulares.titular
});

export default connect(
  mapStateToProps,
  { agregarAdherente, mostrarTitular }
)(NuevoAdherente);
