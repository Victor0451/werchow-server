import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Axios from 'axios';
//import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Grid extends Component {
    state = {
        data: []
    }
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });

    }

    get = async (e) => {
        e.preventDefault();
        let url = await 'http://localhost:3002/getcontrato';
        Axios.get(url)
            .then((ambilData) => {
                console.log(ambilData.data);
                this.setState({
                    data: ambilData.data,
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (


           

                <table className="table">
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
                            <th scope="col">Acciones</th>



                        </tr>
                    </thead>
                    <tbody id="maestro">
                        {this.props.tabla.map((item, index) => {
                            return (

                                <tr key={index}>

                                    <td className="toggler">
                                        {item.SUCURSAL}
                                    </td>
                                    <td>
                                        {item.CONTRATO}
                                    </td>
                                    <td>
                                        {item.NRO_DOC}
                                    </td>
                                    <td>
                                        {item.APELLIDOS}
                                    </td>
                                    <td>
                                        {item.NOMBRES}
                                    </td>
                                    <td>
                                        {item.NACIMIENTO}
                                    </td>
                                    <td>
                                        {item.CALLE}
                                    </td>
                                    <td>
                                        {item.LOCALIDAD}
                                    </td>

                                    <td>
                                        <button type="submit" className="btn btn-primary btn-block">Editar</button>
                                        <button type="submit" className="btn btn-primary btn-block">Eliminar</button>
                                    </td>



                                </tr>

                            );
                        })}

                        <div>
                            <Pagination
                                firstPageText={<i className='glyphicon glyphicon-chevron-left' />}
                                lastPageText={<i className='glyphicon glyphicon-chevron-right' />}
                                prevPageText={<i className='glyphicon glyphicon-menu-left' />}
                                nextPageText={<i className='glyphicon glyphicon-menu-right' />}
                                activePage={this.state.activePage}
                                itemsCountPerPage={10}
                                totalItemsCount={450}
                                onChange={this.handlePageChange}
                            />
                        </div>
                    </tbody>
                </table>



            
        );
    }
}

export default Grid;