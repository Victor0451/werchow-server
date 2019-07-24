import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import FormNuevoTitular from './FormNuevoTitular';

//redux
import { connect } from "react-redux";
import { agregarTitular, ultimoContrato } from "../../actions/titularActions";




class NuevoTitular extends Component {

    grupoRef = React.createRef();
    OSRef = React.createRef();
    PlanRef = React.createRef();
    SucursalRef = React.createRef();
    ContratoRef = React.createRef();
    LocalidadesRef = React.createRef();
    ProductorRef = React.createRef();
    ZonaRef = React.createRef();






    state = {
        ALTA: '',
        APELLIDOS: '',
        MOVIL: '',
        OPERADOR: '',
        CONTRATO: '',
        CUOTA: '',
        GRUPO: '',
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
        DOMI_COB: '',
        DOM_LAB: '',
        BARRIO: '',
        LOCALIDAD: '',
        error: false,

        newContrato: ''

    }

    leerDatos = e => {

        this.setState({ [e.target.name]: e.target.value })
    }

    nuevoTitular = e => {

        e.preventDefault();

        const {
            ALTA,
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
            VIGENCIA,
            CALLE,
            NRO_CALLE,
            DOMI_COB,
            DOM_LAB,
            BARRIO

        } = this.state

        // // if (apellidos === '' || nombres === '' || nacimiento === '' || nro_doc === '' || sexo === '' || alta === '' || vigencia === '' || telefono === '' || cod_asesor === '' || recibo === '' || cuota === '') {
        // //     this.setState({ error: true });
        // //     return;
        // // }
        // // this.setState({ error: false });


        const titular = {

            SUCURSAL: this.SucursalRef.current.value,
            PLAN: this.PlanRef.current.value,
            GRUPO: this.grupoRef.current.value,
            OBRA_SOC: this.OSRef.current.value,
            CONTRATO: this.ContratoRef.current.value,
            ALTA,
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
            VIGENCIA,
            CALLE,
            NRO_CALLE,
            DOMI_COB,
            DOM_LAB,
            BARRIO,
            LOCALIDAD: this.LocalidadesRef.current.value,
        }

        console.log(titular);

        this.props.agregarTitular(titular);


        confirmAlert({
            title: "Atencion",
            message: "¿Desea Ingresar Adherentes?",
            buttons: [
                {
                    label: "Si",
                    onClick: () => {



                        this.props.history.push(`/adherentes/nuevo/${titular.CONTRATO}`);
                    }
                },

                {
                    label: "No",
                    onClick: () => {

                        this.props.history.push(`/titular/${titular.CONTRATO}`);

                    }
                }
            ]
        });
    }

    componentDidMount() {
        this.props.ultimoContrato()
    }

    componentWillReceiveProps(nextProps) {
        const { titulares } = nextProps;

        const lastContrato = titulares.lastcontrato.CONTRATO;

        const newContrato = lastContrato + 1;

        this.setState({
            newContrato: newContrato
        })


        // this.setState({
        //     contrato: newcontrato.toString()})
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
                    newContrato={this.state.newContrato}
                    grupoRef={this.grupoRef}
                    OSRef={this.OSRef}
                    PlanRef={this.PlanRef}
                    SucursalRef={this.SucursalRef}
                    ContratoRef={this.ContratoRef}
                    LocalidadesRef={this.LocalidadesRef}
                    ProductorRef={this.ProductorRef}
                    ZonaRef={this.ZonaRef}


                />



            </div>
        )
    }
}

const mapStateToProps = state => ({
    titulares: state.titulares
});

export default connect(
    mapStateToProps,
    { agregarTitular, ultimoContrato }
)(NuevoTitular);
