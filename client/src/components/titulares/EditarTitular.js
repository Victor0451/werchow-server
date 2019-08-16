import React, { Component } from 'react'

//redux
import { connect } from "react-redux";
import { mostrarTitular, editarTitular, } from "../../actions/titularActions";
import FormEditarTitular from './FormEditarTitular';

class EditarTitular extends Component {

    altaRef = React.createRef();
    apellidosRef = React.createRef();
    movilRef = React.createRef();
    operadorRef = React.createRef();
    productorRef = React.createRef();
    contratoRef = React.createRef();
    cuotaRef = React.createRef();
    grupoRef = React.createRef();
    zonaRef = React.createRef();
    nacimientoRef = React.createRef();
    nombresRef = React.createRef();
    nro_docRef = React.createRef();
    obra_socRef = React.createRef();
    planRef = React.createRef();
    reciboRef = React.createRef();
    sexoRef = React.createRef();
    sucursalRef = React.createRef();
    telefonoRef = React.createRef();
    vigenciaRef = React.createRef();
    calleRef = React.createRef();
    nro_calleRef = React.createRef();
    domi_cobrRef = React.createRef();
    dom_labRef = React.createRef();
    barrioRef = React.createRef();
    localidadRef = React.createRef();
    subPlanRef = React.createRef();
    seguro_vidaRef = React.createRef();



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

        ANTERIOR: '',

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

    modificarTit = (e) => {

        e.preventDefault();

        const titularModf = {
            ALTA: this.altaRef.current.value,
            APELLIDOS: this.apellidosRef.current.value,
            MOVIL: this.movilRef.current.value,
            PRODUCTOR: this.productorRef.current.value,
            CONTRATO: this.contratoRef.current.value,
            CUOTA: this.cuotaRef.current.value,
            GRUPO: this.grupoRef.current.value,
            ZONA: this.zonaRef.current.value,
            NACIMIENTO: this.nacimientoRef.current.value,
            NOMBRES: this.nombresRef.current.value,
            NRO_DOC: this.nro_docRef.current.value,
            OBRA_SOC: this.obra_socRef.current.value,
            PLAN: this.planRef.current.value,
            SEXO: this.sexoRef.current.value,
            SUCURSAL: this.sucursalRef.current.value,
            TELEFONO: this.telefonoRef.current.value,
            VIGENCIA: this.vigenciaRef.current.value,
            CALLE: this.calleRef.current.value,
            NRO_CALLE: this.nro_calleRef.current.value,
            DOMI_COBR: this.domi_cobrRef.current.value,
            DOM_LAB: this.dom_labRef.current.value,
            BARRIO: this.barrioRef.current.value,
            LOCALIDAD: this.localidadRef.current.value,
        }

        this.props.editarTitular(titularModf);

    }

    setAnterior = (e) => {
        this.setState({ ANTERIOR: e.target.value })
    }

    registroHintoria = (e) => {


        const newModificacion = {

            CONTRATO: this.contratoRef.current.value,
            ANTERIOR: this.state.ANTERIOR,
            NUEVO: e.target.value,
            ACTUALIZA: ''

        }

        console.log(newModificacion)
    }
    

    render() {
        const { titular } = this.state
        return (
            <div>
                <FormEditarTitular
                    titular={titular}
                    altaRef={this.altaRef}
                    apellidosRef={this.apellidosRef}
                    movilRef={this.movilRef}
                    operadorRef={this.operadorRef}
                    productorRef={this.productorRef}
                    contratoRef={this.contratoRef}
                    cuotaRef={this.cuotaRef}
                    grupoRef={this.grupoRef}
                    zonaRef={this.zonaRef}
                    nacimientoRef={this.nacimientoRef}
                    nombresRef={this.nombresRef}
                    nro_docRef={this.nro_docRef}
                    obra_socRef={this.obra_socRef}
                    planRef={this.planRef}
                    reciboRef={this.reciboRef}
                    sexoRef={this.sexoRef}
                    sucursalRef={this.sucursalRef}
                    telefonoRef={this.telefonoRef}
                    vigenciaRef={this.vigenciaRef}
                    calleRef={this.calleRef}
                    nro_calleRef={this.nro_calleRef}
                    domi_cobrRef={this.domi_cobrRef}
                    dom_labRef={this.dom_labRef}
                    barrioRef={this.barrioRef}
                    localidadRef={this.localidadRef}
                    subPlanRef={this.subPlanRef}
                    seguro_vidaRef={this.seguro_vidaRef}
                    modificarTit={this.modificarTit}
                    registroHintoria={this.registroHintoria}
                    setAnterior={this.setAnterior}
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
    { mostrarTitular, editarTitular }
)(EditarTitular);