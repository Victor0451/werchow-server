import React, { Component } from "react";
import FormNuevoAdherente from "./FormNuevoAdherente";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

//redux
import { connect } from "react-redux";
import { agregarAdherente } from "../../actions/adherenteActions";
import { mostrarTitular } from "../../actions/titularActions";
import { registrarHistoria } from "../../actions/historiaActions";

class NuevoAdherente extends Component {
  OSRef = React.createRef();
  PlanRef = React.createRef();
  SubPlanRef = React.createRef();
  SucursalRef = React.createRef();
  ContratoRef = React.createRef();
  ProductorRef = React.createRef();
  AltaRef = React.createRef();
  VigenciaRef = React.createRef();
  ParentescoRef = React.createRef();

  state = {
    APELLIDOS: "",
    NACIMIENTO: "",
    NOMBRES: "",
    NRO_DOC: "",
    SEXO: "",
    PARENT: "",
    ESTADO: true,
    error: false,
    id: ""
  };

  leerDatos = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  historial = () => {
    let tmp = new Date(Date.now());
    let fecha = tmp.toISOString().split("T")[0];
    const { id } = this.props.match.params;

    const { user } = this.props.auth;

    const historia = {
      CONTRATO: id,
      OPERADOR: user.usuario,
      ANTERIOR: "----------",
      NUEVO: `ALTA ADHERENTE: ${this.state.APELLIDOS}, ${this.state.NOMBRES}`,
      FECHA: fecha
    };

    this.props.registrarHistoria(historia);
  };

  nuevoAdh = e => {
    e.preventDefault();

    const {
      APELLIDOS,
      NACIMIENTO,
      NOMBRES,
      NRO_DOC,
      SEXO,
      PARENT
    } = this.state;

    const { id } = this.props.match.params;

    const adherente = {
      SUCURSAL: this.SucursalRef.current.value,
      PLAN: this.PlanRef.current.value,
      SUB_PLAN: this.SubPlanRef.current.value,
      OBRA_SOC: this.OSRef.current.value,
      CONTRATO: this.ContratoRef.current.value,
      APELLIDOS,
      PRODUCTOR: this.ProductorRef.current.value,
      PARENT: this.ParentescoRef.current.value,
      NACIMIENTO,
      ALTA: this.AltaRef.current.value,
      VIGENCIA: this.VigenciaRef.current.value,
      NOMBRES,
      NRO_DOC,
      ESTADO: true
    };

    console.log(adherente);

    // if (
    //   APELLIDOS === "" ||
    //   NOMBRES === "" ||
    //   NACIMIENTO === "" ||
    //   NRO_DOC === "" ||
    //   SEXO === ""
    // ) {
    //   this.setState({ error: true });
    //   return;
    // }
    // this.setState({ error: false });

    // this.props.agregarAdherente(adherente);

    // confirmAlert({
    //   title: "Atencion",
    //   message: "¿Desea Ingresar Adherentes?",
    //   buttons: [
    //     {
    //       label: "Si",
    //       onClick: () => {
    //         this.props.history.push(`/adherentes/nuevo/${id}`);
    //       }
    //     },

    //     {
    //       label: "No",
    //       onClick: () => {
    //         this.props.history.push(`/titulares/${id}`);
    //       }
    //     }
    //   ]
    // });
  };

  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <FormNuevoAdherente
          id={id}
          leerDatos={this.leerDatos}
          nuevoAdh={this.nuevoAdh}
          error={this.state.error}
          OSRef={this.OSRef}
          PlanRef={this.PlanRef}
          SubPlanRef={this.SubPlanRef}
          SucursalRef={this.SucursalRef}
          ContratoRef={this.ContratoRef}
          ProductorRef={this.ProductorRef}
          AltaRef={this.AltaRef}
          VigenciaRef={this.VigenciaRef}
          ParentescoRef={this.ParentescoRef}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  adherente: state.adherente,
  titular: state.titulares.titular,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { agregarAdherente, mostrarTitular, registrarHistoria }
)(NuevoAdherente);
