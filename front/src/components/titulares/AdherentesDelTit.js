import React, { Component } from 'react'

import { connect } from "react-redux";
import { mostrarAdherentesDelTitular } from "../../actions/adherenteActions";

class AdherentesDelTit extends Component {

    state = {
        adherentes: []
    }
    componentDidMount() {
        const id = this.props.id
        this.props.mostrarAdherentesDelTitular(id);
    }

    componentWillReceiveProps(nextProps, nextState) {
        const { adherentes } = nextProps

        this.setState({
            adherentes: adherentes
        });
    }

    render() {

        const adherentes = this.state.adherentes;
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
                    {adherentes.map(adherente => (

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
        )
    }
}

const mapStateToProps = state => ({
    adherentes: state.adherentes.adherentes

});

export default connect(
    mapStateToProps,
    { mostrarAdherentesDelTitular }
)(AdherentesDelTit);

