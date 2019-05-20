import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class GridAd extends Component {

    render() {

        return (
            <div className="table-wrapper table-responsive">
                <table className="fl-table" >
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Sucursal</th>
                            <th scope="col">Contrato</th>
                            <th scope="col">DNI</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Nombres</th>
                            <th scope="col">Nacimiento</th>
                            <th scope="col">Fecha de Alta</th>
                            <th scope="col">Fecha de Vigencia</th>
                            <th scope="col">Fecha de Baja</th>
                            <th scope="col">Obra Social</th>
                            <th scope="col">Sexo</th>
                            <th scope="col">Acciones</th>



                        </tr>
                    </thead>
                    <tbody>

                        {this.props.adherentes.map((item, index) => {
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
                                        {item.ALTA}
                                    </td>
                                    <td>
                                        {item.VIGENCIA}
                                    </td>

                                    <td>
                                        {item.BAJA}
                                    </td>

                                    <td>
                                        {item.OBRA_SOC}
                                    </td>

                                    <td>
                                        {item.SEXO}
                                    </td>



                                    <td>

                                        <Link to={"/editaradh/" + item.NRO_DOC} className="btn btn-primary btn-block" >Editar</Link>
                                        <button type="submit" className="btn btn-danger btn-block">Eliminar</button>
                                    </td>



                                </tr>



                            );

                        })}



                    </tbody>


                </table>


            </div>
        );
    }
}

export default GridAd;