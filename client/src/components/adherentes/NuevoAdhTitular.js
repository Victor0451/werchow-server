import React, { Component } from 'react'
import AdherentesDelTit from '../titulares/AdherentesDelTit'


import { connect } from "react-redux";
import { buscarTitular } from "../../actions/titularActions";
import { mostrarAdherentesDelTitular } from "../../actions/adherenteActions";


function WarningBanner(props) {

    if (!props.warn) {
        return null;
    }
    let adh = document.getElementById('adh');
    adh.hidden = false;
    const { id } = props;
    console.log(id)
    return (
        <AdherentesDelTit
            id={id}
        />
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
        setTimeout(() => {
            this.props.mostrarAdherentesDelTitular(contrato);

        }, 150);

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

        if (!titular) return <div className="alert alert-danger text-center mt-4"><strong>NO EXISTE EL TITULAR O NO ESTA CARGADO</strong></div>

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
                    <div className="container" id="adh" hidden>
                        <div className="jumbotron">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="display-3"> {titular.APELLIDOS} {titular.NOMBRES} </h1>
                                    <h3>Adherentes: {titular.ADHERENTES}</h3>
                                </div>
                            </div>

                            <div className="row mt-4">

                                <WarningBanner warn={this.state.mostrar}
                                    //adherentes={this.state.adherentes}
                                    id={this.state.contrato}
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