import React, { Component } from 'react';

class GridInf extends Component {

    render() {
        let formInf = this.props.formInf;

        return (

            <div className="table-wrapper table-responsive">
                <table className="fl-table" >
                    <thead >
                        <tr>
                            <th scope="col">Sucursal</th>
                            <th scope="col">Contrato</th>
                            <th scope="col">DNI</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Nombres</th>
                            <th scope="col">Nacimiento</th>
                            <th scope="col">Fecha de Alta</th>
                            <th scope="col">Fecha de Vigencia</th>
                            <th scope="col">Obra Social</th>
                            <th scope="col">Sexo</th>
                            <th scope="col">Telefono</th>



                        </tr>
                    </thead>
                    <tbody>
                        <th>{formInf.sucursal}</th>
                        <th>{formInf.contrato}</th>
                        <th>{formInf.nro_doc}</th>
                        <th>{formInf.apellidos}</th>
                        <th>{formInf.nombres}</th>
                        <th>{formInf.nacimiento}</th>
                        <th>{formInf.alta}</th>
                        <th>{formInf.vigencia}</th>
                        <th>{formInf.os}</th>
                        <th>{formInf.sexo}</th>
                        <th>{formInf.telefono}</th>


                    </tbody>
                </table>


            </div>

        );
    }
}

export default GridInf;