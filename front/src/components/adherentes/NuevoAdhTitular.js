import React, { Component } from 'react'


import { connect } from "react-redux";
import { buscarTitular } from "../../actions/titularActions";
import { mostrarAdherentesDelTitular } from "../../actions/adherenteActions";


function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }
    return (
        <table className="table table-hover">
            <thead className="alert alert-dark">
                <tr>
                    <th scope="col">Contrato</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">DNI</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody className="">
                {props.adherentes.map(adherente => (

                    <tr key={adherente.NRO_DOC}>
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

                        <td>

                        </td>
                    </tr>


                ))}
            </tbody>

        </table>
    );
}

class NuevoAdhTitular extends Component {

    state = {
        contrato: '',

        titular: {},

        adherentes: {},

        mostrar: false
    }

    leerDatos = e => {

        this.setState({ [e.target.name]: e.target.value })
    }

    buscarContrato = e => {
        e.preventDefault();

        const { contrato } = this.state;

        this.props.buscarTitular(contrato);
        this.props.mostrarAdherentesDelTitular(contrato);

        setTimeout(() => {

            const { titular, adherentes } = this.props;

            this.setState({
                titular: titular,
                adherentes: adherentes,
                mostrar: true
            });

        }, 100);


    }


    render() {

        const { titular, adherentes } = this.state;

        if (!titular) return <h1>Cargando...</h1>


        return (
            <div>
                <form className="form-style-8 " onSubmit={this.buscarContrato} >
                    <h2>Ingrese el contrato del titular</h2>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <p className="has-dynamic-label">
                                <input type="text" className="" id="dynamic-label-input" name="contrato" onChange={this.leerDatos} placeholder="Contrato" />
                                <label >Contrato</label>
                            </p>
                        </div>
                        <div className="form-group col-md-6">
                            <button className="btn btn-primary btn-block mt-4">Buscar
                            {!adherentes ? 'Hide'
                                    : null}
                            </button>
                        </div>
                    </div>
                </form>

                {
                    titular &&
                    <div className="container">
                        <div className="jumbotron">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="display-3"> {titular.APELLIDOS} {titular.NOMBRES} </h1>
                                    <h3>Adherentes: {titular.ADHERENTES}</h3>
                                </div>
                            </div>

                            <div className="row mt-4">

                                <WarningBanner warn={this.state.mostrar}
                                    adherentes={this.state.adherentes}
                                />

                            </div>

                        </div>
                    </div>

                }



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
    { buscarTitular, mostrarAdherentesDelTitular }
)(NuevoAdhTitular);