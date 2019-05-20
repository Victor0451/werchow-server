import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';


class EditAdh extends Component {

    state = {
        adherente: {}
    }

    getAdhToEdit = () => {


        let id = this.props.match.params.id;
        let url = `http://localhost:3002/getadherenttoedit/${id}`;

        Axios.get(url)
            .then((adherent) => {

                this.setState({
                    adherente: adherent.data
                })


            })
            .catch((err) => {
                console.log(err);

            })

        console.log(this.state.adherente)
    }

    componentDidMount() {
        this.getAdhToEdit()
    }

    render() {
        return (

            <form className="form-style-8" >
                <h2>Editar Adherente</h2>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Sucursal</label>
                        <input type="text" className="" name="sucursal" defaultValue={this.state.adherente.SUCURSAL} placeholder="Sucursal" />
                    </div>

                </div>

                <div className="form-group">
                    <label>Apellidos</label>
                    <input type="text" className="" defaultValue={this.state.adherente.APELLIDOS} name="apellidos" placeholder="Apellidos" />
                </div>
                <div className="form-group">
                    <label>Nombres</label>
                    <input type="text" className="" name="nombres" defaultValue={this.state.adherente.NOMBRES} placeholder="Nombres" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Fecha de Nacimiento</label>
                        <input type="text" className="" defaultValue={this.state.adherente.NACIMIENTO} name="nacimiento" placeholder="Fecha de Nacimiento" />
                    </div>

                    <div className="form-group col-md-6">
                        <label>Plan</label>
                        <select id="inputState" className="" name="plan" placeholder="Plan"  >
                            <option selected>Elige un Plan</option>
                            <option>2</option>
                            <option>3</option>
                            <option>S3</option>
                        </select>
                    </div>

                    <div className="form-group col-md-6">
                        <label>DNI</label>
                        <input type="text" className="" defaultValue={this.state.adherente.NRO_DOC} name="nro_doc" placeholder="DNI" readOnly />
                    </div>

                    <div className="form-group col-md-6">
                        <label>Sexo</label>
                        <select id="inputState" className="" defaultValue={this.state.adherente.SEXO} name="sexo" placeholder="Sexo"  >
                            <option selected>Sexo</option>
                            <value>F</value><option>Femenino</option>
                            <value>M</value><option>Masculino</option>

                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Fecha de Alta</label>
                        <input type="text" className="" defaultValue={this.state.adherente.ALTA} name="alta" placeholder="Fecha de Alta" />
                    </div>

                    <div className="form-group col-md-6">
                        <label>Vigencia</label>
                        <input type="text" className="" defaultValue={this.state.adherente.VIGENCIA} name="vigencia" placeholder="Fecha de Vigencia" />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Obra Social</label>
                        <input type="text" className="" name="os" defaultValue={this.state.adherente.OBRA_SOC} placeholder="OS" />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Telefono</label>
                        <input type="text" className="" name="telefono" defaultValue={this.state.adherente.TELEFONO} placeholder="Telefono" />
                    </div>
                </div>

                <div className="mt-4">
                    <button type="submit" className="btn btn-primary btn-block">Guardar</button>
                    <Link to={"/altaadherhente"} className="btn btn-secondary btn-block" >Cerrar</Link>
                </div>

            </form>


        );
    }
}

export default EditAdh;