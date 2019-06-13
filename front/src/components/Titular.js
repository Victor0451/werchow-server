import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Spinner from '../components/layouts/Spinner';

//redux
import { connect } from "react-redux";
import { mostrarTitular } from "../actions/titularActions";



class Titular extends Component {
    state = {
        titular: {}
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.mostrarTitular(id);
    }

    componentWillReceiveProps(nextProps, nextState) {
        const { titular } = nextProps;

        this.setState({
            titular: titular
        });
    }

    render() {
        const titular = this.state.titular;
        if (!titular) return <Spinner />


        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <Link to="/titulares" className="btn btn-secondary">
                            <i className="fas fa-arrow-circle-left"></i> {''}
                            Volver al Listado
                </Link>
                    </div>
                    <div className="col-md-6">
                        <Link to={`/suscriptores/editar/`} className="btn btn-primary float-right">
                            <i className="fas fa-pencil-alt"></i> {''}
                            Editar Suscriptor
                </Link>
                    </div>
                </div>

                <div className="jumbotron">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-3"> {titular.APELLIDOS} {titular.NOMBRES} </h1>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <h3>Contrato: {titular.CONTRATO}</h3>
                        </div>
                        <div className="col-md-4">
                            <h3>DNI: {titular.NRO_DOC}</h3>
                        </div>
                        <div className="col-md-4">
                            <h3>Sucursal: {titular.SUCURSAL}</h3>
                        </div>
                    </div>

                    <hr className="my-4" />
                    <h3>DATOS DE FICHA</h3>
                    <div className="row mt-4">
                        <div className="col-md-2 ">
                            <p>
                                <span className="font-weight-bold">
                                    GRUPO:
                            </span> {''}
                                {titular.GRUPO}
                            </p>
                        </div>

                        <div className="col-md-2">
                            <p>
                                <span className="font-weight-bold">
                                    ZONA:
                </span> {''}
                                {titular.ZONA}
                            </p>
                        </div>

                        <div className="col-md-2">
                            <p>
                                <span className="font-weight-bold">
                                    ALTA:
                </span> {''}
                                {titular.ALTA}
                            </p>
                        </div>
                        <div className="col-md-2">
                            <p>
                                <span className="font-weight-bold">
                                    VIGENCIA:
                             </span> {''}
                                {titular.VIGENCIA}
                            </p>
                        </div>
                        <div className="col-md-2">
                            <p>
                                <span className="font-weight-bold">
                                    DOM. LABORAL:
                                 </span> {''}
                                {titular.DOM_LAB}
                            </p>
                        </div>
                        <div className="col-md-2">
                            <p>
                                <span className="font-weight-bold">
                                    DOM. COBRANZA:
                                 </span> {''}
                                {titular.DOMI_COBR}
                            </p>
                        </div>
                        <div className="col-md-2">
                            <p>
                                <span className="font-weight-bold">
                                    PLAN:
                                 </span> {''}
                                {titular.PLAN}
                            </p>
                        </div>
                        <div className="col-md-2">
                            <p>
                                <span className="font-weight-bold">
                                    SUB PLAN:
                                 </span> {''}
                                {titular.SUB_PLAN}
                            </p>
                        </div>
                        <div className="col-md-2">
                            <p>
                                <span className="font-weight-bold">
                                    FECHA DEL PLAN:
                                 </span> {''}
                                {titular.FEC_PLAN}
                            </p>
                        </div>
                    </div>


                    <hr className="my-4" />

                    <h3>DATOS PERSONALES</h3>

                    <div className="row mt-4">
                        <div className="col-md-2 ">
                            <p>
                                <span className="font-weight-bold">
                                    OBRA SOC.:
                                    </span> {''}
                                {titular.OBRA_SOC}
                            </p>
                        </div>
                        <div className="col-md-2 ">
                            <p>
                                <span className="font-weight-bold">
                                    NACIMIENTO:
                                    </span> {''}
                                {titular.NACIMIENTO}
                            </p>
                        </div>
                        <div className="col-md-2 ">
                            <p>
                                <span className="font-weight-bold">
                                    SEXO:
                                    </span> {''}
                                {titular.SEXO}
                            </p>
                        </div>

                        <div className="col-md-2">
                            <p>
                                <span className="font-weight-bold">
                                    CALLE:
                                    </span> {''}
                                {titular.CALLE}
                            </p>
                        </div>

                        <div className="col-md-2">
                            <p>
                                <span className="font-weight-bold">
                                    N° DE CALLE:
                                    </span> {''}
                                {titular.NRO_CALLE}
                            </p>
                        </div>
                        <div className="col-md-2">
                            <p>
                                <span className="font-weight-bold">
                                    BARRIO:
                                    </span> {''}
                                {titular.BARRIO}
                            </p>
                        </div>
                        <div className="col-md-2">
                            <p>
                                <span className="font-weight-bold">
                                    TELEFONO:
                                    </span> {''}
                                {titular.TELEFONO}
                            </p>
                        </div>
                        <div className="col-md-2">
                            <p>
                                <span className="font-weight-bold">
                                    MOVIL:
                                    </span> {''}
                                {titular.MOVIL}
                            </p>
                        </div>
                        <div className="col-md-2">
                            <p>
                                <span className="font-weight-bold">
                                    MAIL:
                                    </span> {''}
                                {titular.MAIL}
                            </p>
                        </div>
                    </div>

                    <hr className="my-4" />

                    <h3>ADHERENTES</h3>

                    <div className="row mt-4">
                    </div>

                </div>
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
)(Titular);