import React, { Component } from 'react';
import toastr from '../../utils/toastr';
import { Link } from 'react-router-dom';

import { connect } from "react-redux";
import { mostrarTitular } from "../../actions/titularActions";
import { mostrarAdherentesDelTitular } from "../../actions/adherenteActions";
import { cambioTitular, registrarTitularViejo } from "../../actions/fichasActions";



class CambiarTitular extends Component {

    state = {
        contrato: '',
        titular: [],
        adherentes: []
    }

    componentDidMount() {

        const contrato = this.props.match.params.id;

        if (contrato) {
            this.buscarTitularDirecto(contrato);
            document.getElementById("busqueda").hidden = true
            document.getElementById("cambio").hidden = false
        }


    }

    leerDatos = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }

    buscarTitularDirecto = (contrato) => {

        if (contrato) {

            this.props.mostrarTitular(contrato)

            this.props.mostrarAdherentesDelTitular(contrato)


            setTimeout(() => {

                const { titular, adherentes } = this.props;

                this.setState({
                    titular: titular,
                    adherentes: adherentes
                })

            }, 150);

        }
    }


    buscarTitular = (e) => {
        e.preventDefault();

        const { contrato } = this.state


        if (contrato === '') {

            toastr.warning("Debes ingresar un numero de socio", "ATENCION");

        } else {
            if (contrato) {

                this.props.mostrarTitular(contrato)

                this.props.mostrarAdherentesDelTitular(contrato)


                setTimeout(() => {

                    const { titular, adherentes } = this.props;

                    this.setState({
                        titular: titular,
                        adherentes: adherentes
                    })

                    if (titular) {

                        document.getElementById("busqueda").hidden = true
                        document.getElementById("cambio").hidden = false

                    }

                }, 150);

            }
        }
    }

    changeTitular = (index) => {

        const { adherentes, titular } = this.state;

        this.props.cambioTitular(adherentes[index]);

        setTimeout(() => {
            this.props.registrarTitularViejo(titular);
        }, 100);



    }

    render() {
        const { titular, adherentes } = this.state
        return (
            <div>
                <div className="form-style-8 " id="busqueda" >
                    <h2>Buscar Socio</h2>

                    <form onSubmit={this.buscarTitular}>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="has-dynamic-label">
                                    <input type="text" className="" id="dynamic-label-input" name="contrato" onChange={this.leerDatos} placeholder="Ingresar N° de Socio" />
                                    <label >N° de Socio</label>
                                </p>
                            </div>

                            <div className="col-md-6">
                                <button className="btn btn-primary  btn-block mt-4">Buscar</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="form-style-8 " id="cambio" hidden >
                    <h2>Actual Titular: </h2>

                    <div className="jumbotron">

                        {titular.ESTADO === 1 ?
                            <div className="row mt-4 alert alert-success justify-content-center">
                                <h5 className="text-center"><strong>FICHA ACTIVA</strong> </h5>
                            </div>
                            :
                            titular.ESTADO === 0 ?
                                <div className="row mt-4 alert alert-danger justify-content-center">
                                    <h5 className="text-center"><strong>FICHA EN BAJA</strong> </h5>
                                </div>
                                :
                                <div className="row mt-4 alert alert-warning justify-content-center">
                                    <h5 className="text-center"><strong>ERROR</strong> </h5>
                                </div>
                        }


                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="display-3"> {titular.APELLIDOS} {titular.NOMBRES} </h1>
                            </div>
                        </div>

                        <div className="row mt-4 alert alert-secondary">
                            <div className="col-md-4">
                                <h3>Contrato: {titular.CONTRATO}</h3>
                            </div>

                            <div className="col-md-4">
                                <h3> GRUPO:{''} {titular.GRUPO}</h3>
                            </div>

                            <div className="col-md-4">
                                <h3>Sucursal: {titular.SUCURSAL}</h3>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <Link to={'#'} className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-xl">Cambiar Titular</Link>
                    </div>

                </div>

                <div className="modal fade bd-example-modal-xl" tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content p-2 ">
                            <table className="table table-hover border">
                                <thead className="alert alert-dark">
                                    <tr>
                                        <th scope="col">Contrato</th>
                                        <th scope="col">Apellido</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">DNI</th>
                                        <th scope="col">ESTADO</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {adherentes.map((adherente, index) => (

                                        <tr key={index}>
                                            <td >
                                                {adherente.CONTRATO}
                                            </td>
                                            <td>
                                                {adherente.APELLIDOS}
                                            </td>
                                            <td>
                                                {adherente.NOMBRES}
                                            </td>
                                            <td>
                                                {adherente.NRO_DOC}
                                            </td>

                                            {adherente.ESTADO === 1 ? (<td>ACTIVO</td>) : adherente.ESTADO === 0 ? (<td>BAJA</td>) : ''}

                                            <td>
                                                <Link to={'#'} className="btn btn-primary btn-block" onClick={() => this.changeTitular(index)}>Asignar como Titular</Link>
                                            </td>

                                        </tr>


                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

//state
const mapStateToProps = state => ({
    titular: state.titulares.titular,
    adherentes: state.adherentes.adherentes
});

export default connect(
    mapStateToProps,
    { mostrarTitular, mostrarAdherentesDelTitular, cambioTitular, registrarTitularViejo }
)(CambiarTitular);