import React, { Component } from 'react'

//redux
import { connect } from "react-redux";
import { mostrarTitular } from "../../actions/titularActions";
import FormEditarTitular from './FormEditarTitular';

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

        newContrato: '',

        titular: {}

    }

    componentDidMount() {
        const { id } = this.props.match.params;

        this.props.mostrarTitular(id);

    }

    componentWillReceiveProps(nextProps) {

        const { titular } = nextProps;

        this.setState({
            titular: titular
        })
    }

    render() {
        const { titular } = this.state
        return (
            <div>
                <FormEditarTitular
                    titular={titular}
                />
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