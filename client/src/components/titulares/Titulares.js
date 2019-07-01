import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Spinner from '../layouts/Spinner';


//redux
import { connect } from "react-redux";
import { mostrarTitulares } from "../../actions/titularActions";

class Titulares extends Component {
  componentDidMount() {
    this.props.mostrarTitulares();
  }

  render() {

    const { titulares } = this.props;

    if (!titulares) return <Spinner />

    return (
      <React.Fragment>
        <h2 className="text-center my-5">Listado de Titulares</h2>
        <div className="row justify-content-center">
          <div className="col-md-8" >
            <ul>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Contrato</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">DNI</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {titulares.map(titular => (
                    <tr key={titular.contrato}>
                      <td >
                        {titular.contrato}
                      </td>
                      <td>
                        {titular.apellidos}
                      </td>
                      <td>
                        {titular.nombres}
                      </td>
                      <td>
                        {titular.nro_doc}
                      </td>

                      <td>
                        <Link to={`/titular/${titular.contrato}`} className="btn btn-primary">Mas Informacion</Link>
                      </td>
                    </tr>


                  ))}
                </tbody>

              </table>

            </ul>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
//state
const mapStateToProps = state => ({
  titulares: state.titulares.titulares
});

export default connect(
  mapStateToProps,
  { mostrarTitulares }
)(Titulares);