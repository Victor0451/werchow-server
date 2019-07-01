import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import FormNuevoTitular from './FormNuevoTitular';

//redux
import { connect } from "react-redux";
import { agregarTitular } from "../../actions/titularActions";




class NuevoTitular extends Component {

    state = {
        sucursal: '',
        contrato: '',
        nombres: '',
        apellidos: '',
        nacimiento: '',
        nro_doc: '',
        alta: '',
        vigencia: '',
        obra_soc: '',
        sexo: '',
        telefono: '',
        grupo: '',
        plan: '',
        seguro_vida: '',
        cod_asesor: '',
        cuota: '',
        recibo: '',
        calle: '',
        numero: '',
        dom_cob: '',
        dom_lab: '',
        barrio: '',
        localidad: '',
        error: false,

    }

    lastContrato = () => {

        axios.get("http://192.168.1.102:3002/getlastcontrato")

            .then(lastcontrato => {

                const newcontrato = parseInt(lastcontrato.data.CONTRATO) + 1;

                this.setState({
                    contrato: newcontrato.toString()
                });
            })


    }

    leerDatos = e => {

        this.setState({ [e.target.name]: e.target.value })
    }

    nuevoTitular = e => {

        e.preventDefault();

        const {
            contrato,
            sucursal,
            apellidos,
            nombres,
            nacimiento,
            nro_doc,
            sexo,
            alta,
            vigencia,
            obra_soc,
            telefono,
            grupo,
            cod_asesor,
            recibo,
            cuota
        } = this.state

        if (sucursal === '' || apellidos === '' || nombres === '' || nacimiento === '' || nro_doc === '' || sexo === '' || alta === '' || vigencia === '' || obra_soc === '' || grupo === '' || telefono === '' || cod_asesor === '' || recibo === '' || cuota === '') {
            this.setState({ error: true });
            return;
        }
        this.setState({ error: false });


        const titular = {
            contrato,
            sucursal,
            apellidos,
            nombres,
            nacimiento,
            nro_doc,
            sexo,
            alta,
            vigencia,
            obra_soc,
            telefono,
            grupo,
            cod_asesor,
            recibo,
            cuota
        }

        console.log(titular);

        //this.props.agregarTitular(titular);


        confirmAlert({
            title: "Atencion",
            message: "¿Desea Ingresar Adherentes?",
            buttons: [
                {
                    label: "Si",
                    onClick: () => {
                        this.props.history.push(`/adherentes/nuevo/${contrato}`);
                    }
                },

                {
                    label: "No",
                    onClick: () => {

                        this.props.history.push(`/`);

                    }
                }
            ]
        });
    }

    componentDidMount() {
        this.lastContrato()
    }

    render() {

        return (
            <div >
                <div className="container row mt-4">
                    <div className="col-md-6 mb-4">
                        <Link to="/titulares" className="btn btn-secondary">
                            <i className="fas fa-arrow-circle-left"></i> {''}
                            Volver al Listado
                      </Link>
                    </div>

                </div>

                <FormNuevoTitular
                    leerDatos={this.leerDatos}
                    nuevoTitular={this.nuevoTitular}
                    error={this.state.error}
                    contrato={this.state.contrato}
                />



            </div>
        )
    }
}

export default connect(
    null,
    { agregarTitular }
)(NuevoTitular);
