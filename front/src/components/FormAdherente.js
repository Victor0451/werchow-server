import React, { Component } from 'react';
import Axios from 'axios';
import toastr from '../notifications/toastr';
import GridAd from './GridAd';


class FormAdherente extends Component {

    state = {
        adherente: {
            sucursal: '',
            contrato: '',
            nombres: '',
            apellidos: '',
            nacimiento: '',
            nro_doc: '',
            alta: '',
            vigencia: '',
            os: '',
            sexo: '',
            telefono: ''
        },

        adherentes: []
    }


    contratoRef = React.createRef();

    validarAdh = (e) => {

        e.preventDefault();

        if (this.contratoRef.current.value === '') {
            toastr.error('Debes ingresar un numero de contrato', 'ATENCION');
        } else {
            let form = document.getElementById('form')

            let contratoid = this.contratoRef.current.value;

            let urlid = `http://localhost:3002/contrato/${contratoid}`;

            Axios.get(urlid)
                .then((titular) => {

                    if (!titular.data) {
                        toastr.warning('No existe el Afiliado o aun no a sido cargado', 'ATENCION')
                    } else {
                        toastr.success('Puedes cargar los adherentes', 'ATENCION')
                        form.hidden = false;
                        this.setState({
                            adherente: {
                                contrato: contratoid
                            }
                        })

                        this.getAderhentes();
                    }

                })
                .catch((err) => {
                    console.log(err);

                })
        }


    }

    getAderhentes = (e) => {

        let contrato = this.contratoRef.current.value;

        let urlid = `http://localhost:3002/getadherent/${contrato}`;

        Axios.get(urlid)
            .then((adherente) => {
                this.setState({
                    adherentes: adherente.data
                })

            })
            .catch((err) => {
                console.log(err);

            })

    }

    crearFormAd = (e) => {
        e.preventDefault();

        const { sucursal, nombres, apellidos, nacimiento, nro_doc, alta, vigencia, os, sexo, telefono } = e.target.elements;

        const sucursalvalue = (sucursal.value);
        const nombresvalue = (nombres.value);
        const apellidosvalue = (apellidos.value);
        const nacimientovalue = (nacimiento.value);
        const nro_docvalue = (nro_doc.value);
        const altavalue = (alta.value);
        const vigenciavalue = (vigencia.value);
        const osvalue = (os.value);
        const sexovalue = (sexo.value);
        const telefonovalue = (telefono.value);

        this.setState({
            adherente: {
                sucursal: sucursalvalue,
                nombres: nombresvalue,
                apellidos: apellidosvalue,
                nacimiento: nacimientovalue,
                nro_doc: nro_docvalue,
                alta: altavalue,
                vigencia: vigenciavalue,
                os: osvalue,
                sexo: sexovalue,
                telefono: telefonovalue

            }
        })

        toastr.info("Los datos estan cargados pero aun no estan ingresados en la base de datos", "ATENCION")

    }



    render() {

        return (
            <div >
                <div className=" form-style-8">
                    <h2>Ingresa Numero de Contrato</h2>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <p className="has-dynamic-label">
                                <input type="text" className="" name="contrato" ref={this.contratoRef} placeholder="Numero de Contrato" required />
                                <label for="in-range-input">Numero de Contrato</label>
                            </p>
                        </div>
                        <div className="col-md-6 mt-4 ">
                            <button type="submit" className="btn btn-primary col" onClick={this.validarAdh.bind(this)}>Verificar</button>
                        </div>
                    </div>
                </div>


                <form className="form-style-8" id="form" hidden={true} onSubmit={this.crearFormAd} >

                    <h2> adherente</h2>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <p className="has-dynamic-label">
                                <input type="text" className="" name="sucursal" placeholder="Sucursal" required />
                                <label for="in-range-input">Sucursal</label>
                            </p>
                        </div>
                    </div>

                    <div className="form-group">
                        <p className="has-dynamic-label">
                            <input type="text" className="" name="apellidos" placeholder="Apellidos" required />
                            <label for="in-range-input">Apellidos</label>
                        </p>
                    </div>

                    <div className="form-group">
                        <p className="has-dynamic-label">
                            <input type="text" className="" name="nombres" placeholder="Nombres" required />
                            <label for="in-range-input">Nombres</label>
                        </p>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <p className="has-dynamic-label">
                                <input type="date" id="dynamic-label-input" name="nacimiento" data-placeholder="Fecha de Nacimiento" required aria-required="true" required />
                            </p>
                        </div>


                        <div className="form-group col-md-6">
                            <p className="has-dynamic-label">
                                <select id="dynamic-label-input" className="" name="plan" placeholder="Grupo" required >
                                    <option value="">Plan</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">S3</option>
                                </select>
                            </p>
                        </div>

                        <div className="form-group col-md-6">
                            <p className="has-dynamic-label">
                                <input type="text" className="" name="nro_doc" placeholder="DNI" required />
                                <label for="in-range-input">DNI</label>
                            </p>
                        </div>

                        <div className="form-group col-md-6">
                            <p className="has-dynamic-label">
                                <select id="dynamic-label-input" className="" name="sexo" placeholder="Sexo" required>
                                    <option value="">Sexo</option>
                                    <option value="F" >Mujer</option>
                                    <option Value="M">Hombre</option>
                                </select>
                            </p>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <p className="has-dynamic-label">
                                <input type="date" id="dynamic-label-input" name="alta" data-placeholder="Fecha de Alta" required aria-required="true" />
                            </p>
                        </div>

                        <div className="form-group col-md-6">
                            <p className="has-dynamic-label">
                                <input type="date" id="dynamic-label-input" name="vigencia" data-placeholder="Fecha de Vigencia" required aria-required="true" />
                            </p>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <p className="has-dynamic-label">
                                <input type="text" className="" name="os" placeholder="OS" required />
                                <label for="in-range-input">Obra Social</label>
                            </p>
                        </div>

                        <div className="form-group col-md-6">
                            <p className="has-dynamic-label">
                                <input type="text" className="" name="telefono" placeholder="Telefono" required />
                                <label for="in-range-input">Telefono</label>
                            </p>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mt-4">Guardar</button>


                    <br />
                    <br />
                    <br />

                    <h2 className="mt-4">Adherentes Registrados</h2>
                    <GridAd
                        adherentes={this.state.adherentes}

                    />


                </form>
            </div >



        );
    }
}

export default FormAdherente;

