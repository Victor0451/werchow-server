import React, { Component } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import FormNuevoTitular from "./FormNuevoTitular";

//redux
import { connect } from "react-redux";
import { agregarTitular, ultimoContrato } from "../../actions/titularActions";
import { registrarHistoria } from "../../actions/historiaActions";

class NuevoTitular extends Component {
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
  nro_docRef = React.createRef();

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

    newContrato: ""
  };

  leerDatos = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  historial = () => {
    let tmp = new Date(Date.now());
    let fecha = tmp.toISOString().split("T")[0];

    const { user } = this.props.auth;

    const historia = {
      CONTRATO: this.ContratoRef.current.value,
      OPERADOR: user.usuario,
      ANTERIOR: "----------",
      NUEVO: `ALTA FICHA: ${this.state.APELLIDOS}, ${this.state.NOMBRES}`,
      FECHA: fecha
    };

    this.props.registrarHistoria(historia);
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

    const titular = {
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
      NRO_DOC: this.nro_docRef.current.value,
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
      APELLIDOS === "" 
    ) {
      this.setState({ error: true });
      return;
    }
    this.setState({ error: false });

    this.props.agregarTitular(titular);

    confirmAlert({
      title: "Atencion",
      message: "¿Desea Ingresar Adherentes?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            this.historial();

            this.props.history.push(`/adherentes/nuevo/${titular.CONTRATO}`);
          }
        },

        {
          label: "No",
          onClick: () => {
            this.props.history.push(`/titulares/${titular.CONTRATO}`);
          }
        }
      ]
    });
  };

  componentDidMount() {
    this.props.ultimoContrato();
  }

  componentWillReceiveProps(nextProps) {
    const { titulares } = nextProps;

    const lastContrato = titulares.lastcontrato.CONTRATO;

    const newContrato = lastContrato + 1;

    this.setState({
      newContrato: newContrato
    });
  }

  render() {
    const dni = this.props.match.params.id;

    return (
      <div>
        <FormNuevoTitular
          leerDatos={this.leerDatos}
          nuevoTitular={this.nuevoTitular}
          error={this.state.error}
          newContrato={this.state.newContrato}
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
          nro_docRef={this.nro_docRef}
          dni={dni}
          historial={this.historial}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  titulares: state.titulares,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { agregarTitular, ultimoContrato, registrarHistoria }
)(NuevoTitular);
