import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AdherentesDelTit from './AdherentesDelTit';
import Spinner from '../layouts/Spinner';

//redux
import { connect } from "react-redux";
import { mostrarTitular } from "../../actions/titularActions";
import InfoTitular from './InfoTitular';



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
            titular: titular,
        });
    }

    render() {
        const titular = this.state.titular;
        if (!titular) return <Spinner />
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

                    <InfoTitular
                        titular={this.state.titular}
                    />

                    <hr className="my-4" />

                    <h3>ADHERENTES</h3>

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
    titular: state.titulares.titular

});

export default connect(
    mapStateToProps,
    { mostrarTitular }
)(Titular);