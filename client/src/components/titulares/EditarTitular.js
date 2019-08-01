import React, { Component } from 'react'

//redux
import { connect } from "react-redux";
import { mostrarTitular } from "../../actions/titularActions";

class EditarTitular extends Component {

    state = {
        ALTA: '',
        APELLIDOS: '',
        MOVIL: '',
        OPERADOR: '',
        PRODUCTOR: '',
        CONTRATO: '',
        CUOTA: '',
        GRUPO: '',
        ZONA: '',
        NACIMIENTO: '',
        NOMBRES: '',
        NRO_DOC: '',
        OBRA_SOC: '',
        PLAN: '',
        RECIBO: '',
        SEXO: '',
        SUCURSAL: '',
        TELEFONO: '',
        VIGENCIA: '',
        CALLE: '',
        NRO_CALLE: '',
        DOMI_COBR: '',
        DOM_LAB: '',
        BARRIO: '',
        LOCALIDAD: '',
        EMPRESA: 'W',
        error: false,

        newContrato: ''

    }
    
    componentDidMount() {
        const { id } = this.props.match.params;

        this.props.mostrarTitular(id);

    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

//state
const mapStateToProps = state => ({
    titular: state.titulares.titular
   
});

export default connect(
    mapStateToProps,
    { mostrarTitular }
)(EditarTitular);