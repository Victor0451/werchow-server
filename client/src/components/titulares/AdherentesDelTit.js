import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import { connect } from "react-redux";
import { mostrarAdherentesDelTitular, bajaAdherente } from "../../actions/adherenteActions";

class AdherentesDelTit extends Component {

    state = {
        adherentes: [],
        dni: ''
    }
    componentDidMount() {
        const id = this.props.id
        this.props.mostrarAdherentesDelTitular(id);

    }

    componentWillReceiveProps(nextProps, nextState) {
        const { adherentes } = nextProps

        this.setState({
            adherentes: adherentes,
            dni: adherentes.NRO_DOC
        });
    }

    bajaAdhSocio = (index) => {

        const { adherentes } = this.state;
        const id = adherentes[index].NRO_DOC;

        confirmAlert({
            title: "Atencion",
            message: "¿Realmente desea dar de baja a este adherente?",
            buttons: [
                {
                    label: "Si",
                    onClick: () => {

                        this.props.bajaAdherente(id)
                       
                    }
                },

                {
                    label: "No",
                    onClick: () => {



                    }
                }
            ]
        })

    }

    render() {
        const id = this.props.id;
        const adherentes = this.state.adherentes;

        if (Object.entries(adherentes).length === 0) return <h1 className="text-center d-flex justify-content-center"><i className="fas fa-users">  No Posee Adherentes Registrados</i></h1>
        return (
            <div className="container">

                <h1 className="text-center d-flex justify-content-center"><i className="fas fa-users">  Adherentes </i></h1>

                <Link to={`/adherentes/nuevo/${id}`} className="btn btn-primary  mb-4" >Agregar un Adherente</Link>

                <table className="table table-hover table-responsive">
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
                                    <Link to={'#'} className="btn btn-danger btn-block" onClick={() => this.bajaAdhSocio(index)} >Dar de Baja</Link>
                                </td>

                            </tr>


                        ))}
                    </tbody>

                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    adherentes: state.adherentes.adherentes

});

export default connect(
    mapStateToProps,
    { mostrarAdherentesDelTitular, bajaAdherente }
)(AdherentesDelTit);

