import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        os: '',
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
        error: false
    }

    leerDatos = e => {

        this.setState({ [e.target.name]: e.target.value })
    }

    nuevoTitular = e => {

        e.preventDefault();

        const {
            sucursal,
            apellidos,
            nombres,
            nacimiento,
            nro_doc,
            sexo,
            alta,
            vigencia,
            os,
            telefono,
            grupo,
            cod_asesor,
            recibo,
            cuota
        } = this.state

        if (sucursal === '' || apellidos === '' || nombres === '' || nacimiento === '' || nro_doc === '' || sexo === '' || alta === '' || vigencia === '' || os === '' || telefono === '' || grupo === '' || cod_asesor === '' || recibo === '' || cuota === '') {
            this.setState({ error: true });
            return;
        }
        this.setState({ error: false });


        const titular = {
            sucursal,
            apellidos,
            nombres,
            nacimiento,
            nro_doc,
            sexo,
            alta,
            vigencia,
            os,
            telefono,
            grupo,
            cod_asesor,
            recibo,
            cuota
        }

        console.log(titular);

        //this.props.agregarTitular(titular);

        //this.props.history.push('/');
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
                />



            </div>
        )
    }
}

export default connect(
    null,
    { agregarTitular }
)(NuevoTitular);
