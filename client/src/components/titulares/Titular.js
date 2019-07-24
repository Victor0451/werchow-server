import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AdherentesDelTit from './AdherentesDelTit';
import Spinner from '../layouts/Spinner';

//redux
import { connect } from "react-redux";
import { mostrarTitular } from "../../actions/titularActions";
import { mostrarPagosTitular } from "../../actions/pagosActions";
import { mostrarPagobcoTitular } from "../../actions/pagobcoActions";

import InfoTitular from './InfoTitular';
import Pagos from '../pagos/pagos';
import PagosBco from '../pagos/pagobco';




class Titular extends Component {
    state = {
        titular: {},
        pagos: {},
        pagobco: {}

    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.mostrarTitular(id);

        this.props.mostrarPagosTitular(id)

        this.props.mostrarPagobcoTitular(id);

    }

    componentWillReceiveProps(nextProps, nextState) {
        const { titular, pagos, pagobco } = nextProps;

        this.setState({
            titular: titular,
            pagos: pagos,
            pagobco: pagobco
        });
    }

    render() {

        const { titular, pagos, pagobco } = this.state

        if (Object.entries(titular).length === 0) return <Spinner />


        const { id } = this.props.match.params;


        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <Link to="/titulares" className="btn btn-secondary">
                            <i className="fas fa-arrow-circle-left"></i> {''}
                            Volver al Listado
                         </Link>
                    </div>
                </div>

                <div className="jumbotron">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-3"> {titular.APELLIDOS} {titular.NOMBRES} </h1>
                        </div>
                    </div>

                    <InfoTitular
                        titular={titular}
                    />

                    <hr className="my-4" />
                    {
                        Object.entries(pagos).length === 0 ? (

                            (<h1 className="text-center"><i className="fas fa-wallet">  No Registra Cuotas</i></h1>)
                        )
                            : (<Pagos pagos={pagos} />)
                    }


                    < hr className="my-4" />

                    {Object.entries(pagobco).length === 0 ? (
                        <h1 className="text-center"><i className="fas fa-credit-card"> No Registra Debitos</i> </h1>
                    )

                        : (< PagosBco pagobco={pagobco} />)}


                    <hr className="my-4" />


                    <div className="row mt-4">
                        <AdherentesDelTit
                            id={id}
                        />
                    </div>

                </div>
            </div>



        )
    }
}
//state
const mapStateToProps = state => ({
    titular: state.titulares.titular,
    pagos: state.pagos.pagos,
    pagobco: state.pagobco.pagobco

});

export default connect(
    mapStateToProps,
    { mostrarTitular, mostrarPagobcoTitular, mostrarPagosTitular }
)(Titular);