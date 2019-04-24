import React, { Component } from 'react';
import Axios from 'axios';




class Form extends Component {
    state = {
        contrato: []
    }

    //Refs

    sucursalRef = React.createRef();
    contratoRef = React.createRef();
    nrodocRef = React.createRef();
    apellidosRef = React.createRef();
    nombreRef = React.createRef();
    nacimientoRef = React.createRef();
    calleRef = React.createRef();
    localidadRef = React.createRef();

    ultimoContrato = (e) => {


        let url = `http://localhost:3002/getlastcontrato`;

        Axios.get(url)
            .then((response) => {

                this.setState({
                    contrato: response.data.CONTRATO
                })


                console.log(this.state.contrato);
            
            })
            .catch((err) => {
                console.log(err);
            });
    }

    crearRegistro = (event) => {

        event.preventDefault()


        let url = `http://localhost:3002/postcontrato`;

        const maestro = {
            sucursalReg: this.sucursalRef.current.value,
            contratoReg: this.contratoRef.current.value,
            nrodocReg: this.nrodocRef.current.value,
            apellidosReg: this.apellidosRef.current.value,
            nombreReg: this.nombreRef.current.value,
            nacimientoReg: this.nacimientoRef.current.value,
            calleReg: this.calleRef.current.value,
            localidadReg: this.localidadRef.current.value
        }

        console.log(maestro);

        Axios.post(url, maestro)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });

        // Reinicia el form

        // // e.currentTarget.reset();

    }

    componentDidMount() {
        this.ultimoContrato()
    }



    render() {
        let lastcontrato = this.state.contrato + 1;
        return (
            <div>
                <form onSubmit={this.crearRegistro}>
                    <div className="alert alert-info mt-4" > Informacion Personal</div>
                    <div className="form-row">
                        <div className="form-group col-md-6">

                            <input type="text" className="form-control" ref={this.sucursalRef} placeholder="Sucursal" />
                        </div>
                        <div className="form-group col-md-6">

                            <input type="text" className="form-control" ref={this.contratoRef} value={lastcontrato} placeholder="Contrato" />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" ref={this.apellidosRef} placeholder="Apellidos" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" ref={this.nombreRef} placeholder="Nombres" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" ref={this.nacimientoRef} placeholder="Fecha de Nacimiento" />
                        </div>

                        <div className="form-group col-md-6">
                            <select id="inputState" className="form-control" placeholder="Plan" ref={this.localidadRef} >
                                <option selected>Elige un Plan</option>
                                <option>San Salvador</option>
                                <option>Palpala</option>
                                <option>San Pedro</option>
                            </select>
                        </div>

                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" ref={this.nrodocRef} placeholder="DNI" />
                        </div>

                        <div className="form-group col-md-6">
                            <select id="inputState" className="form-control" placeholder="Localidad" ref={this.localidadRef} >
                                <option selected>Sexo</option>
                                <option>San Salvador</option>
                                <option>Palpala</option>
                                <option>San Pedro</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" ref={this.nacimientoRef} placeholder="Fecha de Alta" />
                        </div>

                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" ref={this.nacimientoRef} placeholder="Fecha de Vigencia" />
                        </div>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" ref={this.nacimientoRef} placeholder="OS" />
                        </div>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" ref={this.nacimientoRef} placeholder="Telefono" />
                        </div>
                    </div>



                    <div className="alert alert-info mt-4" > Domiciolio </div>
                    <div className="form-row mt-2">
                        <div className="form-group col-md-8">
                            <input type="text" className="form-control" ref={this.calleRef} placeholder="Calle" />
                        </div>
                        <div className="form-group col-md-4">
                            <input type="text" className="form-control" ref={this.calleRef} placeholder="Numero" />
                        </div>

                        <div className="form-group col-md-6">
                            <select id="inputState" className="form-control" placeholder="Bario" ref={this.localidadRef} >
                                <option selected>Elige un Barrio</option>
                                <option>Alto Comedero</option>
                                <option>Los Perales</option>
                                <option>Mariano Moreno</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <select id="inputState" className="form-control" placeholder="Localidad" ref={this.localidadRef} >
                                <option selected>Elige una localidad</option>
                                <option>San Salvador</option>
                                <option>Palpala</option>
                                <option>San Pedro</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" ref={this.nacimientoRef} placeholder="Domicilio Cobrador" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" ref={this.nacimientoRef} placeholder="Domicilio Laboral" />
                    </div>


                    <div className="alert alert-info mt-4" > Modulos </div>


                    <button type="submit" className="btn btn-primary btn-block">Ingresar Registro</button>
                </form>
            </div>




        );
    }
}

export default Form;