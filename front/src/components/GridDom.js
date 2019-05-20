import React, { Component } from 'react';

class GridDom extends Component {
    render() {

        let formDom = this.props.formDom;

        return (

            <div className="table-wrapper table-responsive">
                <table className="fl-table" >
                    <thead>
                        <tr>
                            <th scope="col">Codigo de Asesor</th>
                            <th scope="col">Calle</th>
                            <th scope="col">Numero</th>
                            <th scope="col">Dom. Lab</th>
                            <th scope="col">Dom. Cob</th>
                            <th scope="col">Barrio</th>
                            <th scope="col">Localidad</th>
                            <th scope="col">Grupo</th>
                            <th scope="col">Plan</th>
                            <th scope="col">Seguro de Vida</th>
                            <th scope="col">Nº Recibo</th>
                            <th scope="col">Cuota</th>

                        </tr>
                    </thead>
                    <tbody>
                        <td>
                            <th>{formDom.cod_asesor}</th>
                            <th>{formDom.calle}</th>
                            <th>{formDom.numero}</th>
                            <th>{formDom.dom_lab}</th>
                            <th>{formDom.dom_cob}</th>
                            <th>{formDom.barrio}</th>
                            <th>{formDom.localidad}</th>
                            <th>{formDom.grupo}</th>
                            <th>{formDom.plan}</th>
                            <th>{formDom.seguro_vida}</th>
                            <th>{formDom.recibo}</th>
                            <th>{formDom.cuota}</th>
                        </td>
                    </tbody>
                </table>

            </div>
        );
    }
}

export default GridDom;