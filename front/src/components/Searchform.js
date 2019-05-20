import React, { Component } from 'react';
import Axios from 'axios';









class Searchform extends Component {


    contratoidRef = React.createRef();


    sucursalRef = React.createRef();
    contratoRef = React.createRef();
    nrodocRef = React.createRef();
    apellidosRef = React.createRef();
    nombreRef = React.createRef();
    nacimientoRef = React.createRef();
    calleRef = React.createRef();
    localidadRef = React.createRef();

    state = {
        data: []
    };

    eliminarRegistro = (e) => {


        //Pasamos los datos por la api
        let contrato = this.contratoRef.current.value;

        let url = `http://localhost:3002/deletecontrato/${contrato}`;

        Axios.delete(url)
            .then((response) => {
                console.log(response);
                alert('Delete successfully')
                this.setState({
                    data: []
                })

            })
            .catch((err) => {
                console.log(err);
            });


    }

    actualizarRegistro = (event) => {

        event.preventDefault()

        //Pasamos los datos por la api
        let contrato = this.contratoRef.current.value;

        let url = `http://localhost:3002/putcontrato/${contrato}`;

        const maestro = {
            sucursalReg: this.sucursalRef.current.value,
            nrodocReg: this.nrodocRef.current.value,
            apellidosReg: this.apellidosRef.current.value,
            nombreReg: this.nombreRef.current.value,
            nacimientoReg: this.nacimientoRef.current.value,
            calleReg: this.calleRef.current.value,
            localidadReg: this.localidadRef.current.value
        }

        console.log(maestro);

        Axios.put(url, maestro)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });

        // Reinicia el form

        // // e.currentTarget.reset();

    }

    buscarContrato = (e) => {

        e.preventDefault();

        let contrato = this.contratoidRef.current.value;

        let urlid = `http://localhost:3002/contrato/${contrato}`;

        console.log(urlid);

        Axios.get(urlid)
            .then((ambilData) => {

                if (!ambilData.data) {
                    alert('No existe el Afiliado')
                } else {
                    console.log(ambilData.data);
                    this.setState({
                        data: ambilData.data
                    })
                }




            })
            .catch((err) => {
                console.log(err);

            })
    }




    render() {

        let lastcontrato = this.props.lastcontrato;

        return (
            <div className="container mt-4 badge-pill p-4">
            <h2>Buscar Afiliado</h2>
                <form onSubmit={this.buscarContrato}>
                    <div className="form-group">
                        <input type="text" className="form-control" ref={this.contratoidRef} defaultValue={lastcontrato} placeholder="Buscar contrato" />
                    </div>
                    <button type="submit" className="btn btn-primary float-left"  >Buscar Registro</button>
                </form>

                <br />
                <br />
                <br />

                <div className="mt-4">
                    <table className="table badge-light" >
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Sucursal</th>
                                <th scope="col">Contrato</th>
                                <th scope="col">DNI</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Nombres</th>
                                <th scope="col">Nacimiento</th>
                                <th scope="col">Calle</th>
                                <th scope="col">Localidad</th>
                                <th scope="col">Actiones</th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr>

                                <td className="toggler">
                                    {this.state.data.SUCURSAL}
                                </td>
                                <td>
                                    {this.state.data.CONTRATO}
                                </td>
                                <td>
                                    {this.state.data.NRO_DOC}
                                </td>
                                <td>
                                    {this.state.data.APELLIDOS}
                                </td>
                                <td>
                                    {this.state.data.NOMBRES}
                                </td>
                                <td>
                                    {this.state.data.NACIMIENTO}
                                </td>
                                <td>
                                    {this.state.data.CALLE}
                                </td>
                                <td>
                                    {this.state.data.LOCALIDAD}
                                </td>

                                <td>
                                    <button type="submit" className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal" >Editar</button>
                                   
                                </td>

                            </tr>


                        </tbody>
                    </table>
                </div>


                <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Actualizar Resgitro</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.actualizarRegistro} >
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control" defaultValue={this.state.data.SUCURSAL} ref={this.sucursalRef} />
                                        </div>
                                        <div className="form-group col-md-6">

                                            <input type="text" className="form-control" value={this.state.data.CONTRATO} ref={this.contratoRef} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" defaultValue={this.state.data.NRO_DOC} ref={this.nrodocRef} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" defaultValue={this.state.data.APELLIDOS} ref={this.apellidosRef} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" defaultValue={this.state.data.NOMBRES} ref={this.nombreRef} />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control" defaultValue={this.state.data.NACIMIENTO} ref={this.nacimientoRef} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <select id="inputState" className="form-control" defaultValue={this.state.data.LOCALIDAD} ref={this.localidadRef} >
                                                <option selected>Elige una localidad</option>
                                                <option>San Salvador</option>
                                                <option>Palpala</option>
                                                <option>San Pedro</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" value={this.state.data.CALLE} ref={this.calleRef} defaultValue="Calle" />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-primary">Actualizar Registro</button>
                                        <button type="submit" className="btn btn-secondary" data-dismiss="modal">Salir</button>


                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </div >
        );
    }
}

export default Searchform;