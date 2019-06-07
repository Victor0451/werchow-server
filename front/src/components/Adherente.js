import React, { Component } from "react";
import { getContratoToValid, getAdherents } from "../functions/apis";
import toastr from "../utils/toastr";
import GridAd from "./GridAd";
import FormAdherente from "./FormAdherente";
import FormVerificarAdh from "./FormVerificarAdh";

export default class Adherente extends Component {
  state = {
    adherente: {
      sucursal: "",
      contrato: "",
      nombres: "",
      apellidos: "",
      nacimiento: "",
      nro_doc: "",
      alta: "",
      vigencia: "",
      os: "",
      sexo: "",
      telefono: ""
    },

    adherentes: []
  };

  contratoRef = React.createRef();

  validarAdh = e => {
    e.preventDefault();

    const { contrato } = e.target.elements;

    if (contrato.value === "") {
      toastr.error("Debes ingresar un numero de contrato", "ATENCION");
    } else {
      let form = document.getElementById("form");
      let gridad = document.getElementById("gridad");

      let id = contrato.value;

      getContratoToValid(id)
        .then(titular => {
          if (!titular.data) {
            toastr.warning(
              "No existe el Afiliado o aun no a sido cargado",
              "ATENCION"
            );
          } else {
            toastr.success("Puedes cargar los adherentes", "ATENCION");
            form.hidden = false;
            gridad.hidden = false;
            this.setState({
              adherente: {
                contrato: id
              }
            });

            this.getAderhentesWhitApi();
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  getAderhentesWhitApi = () => {
    let id = this.state.adherente.contrato;

    getAdherents(id)
      .then(adherente => {
        this.setState({
          adherentes: adherente.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  crearFormAd = e => {
    e.preventDefault();

    const {
      sucursal,
      nombres,
      apellidos,
      nacimiento,
      nro_doc,
      alta,
      vigencia,
      os,
      sexo,
      telefono
    } = e.target.elements;

    const sucursalvalue = sucursal.value;
    const nombresvalue = nombres.value;
    const apellidosvalue = apellidos.value;
    const nacimientovalue = nacimiento.value;
    const nro_docvalue = nro_doc.value;
    const altavalue = alta.value;
    const vigenciavalue = vigencia.value;
    const osvalue = os.value;
    const sexovalue = sexo.value;
    const telefonovalue = telefono.value;

    this.setState({
      adherente: {
        sucursal: sucursalvalue,
        nombres: nombresvalue,
        apellidos: apellidosvalue,
        nacimiento: nacimientovalue,
        nro_doc: nro_docvalue,
        alta: altavalue,
        vigencia: vigenciavalue,
        os: osvalue,
        sexo: sexovalue,
        telefono: telefonovalue
      }
    });

    toastr.info(
      "Los datos estan cargados pero aun no estan ingresados en la base de datos",
      "ATENCION"
    );
  };

  render() {
    return (
      <div>
        <FormVerificarAdh validarAdh={this.validarAdh} />

        <FormAdherente crearFormAd={this.crearFormAd} />

        <div id="gridad" className=" form-style-8" hidden="true">
          <h2 className="">Adherentes Registrados</h2>
          <GridAd adherentes={this.state.adherentes} />
        </div>
      </div>
    );
  }
}
