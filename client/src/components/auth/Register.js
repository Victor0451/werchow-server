import React, { Component } from "react";

export default class Register extends Component {
  state = {
    modal: false,
    usuario: "",
    contrasena: "",
    msg: null
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card mt-4">
              {this.state.msg ? (
                <div className="alert alert-danger">{this.state.msg}</div>
              ) : null}
              <div className="card-header">
                <h3>Iniciar Sesion</h3>
                <div className="d-flex justify-content-end social_icon"></div>
              </div>
              <div className="card-body mt-4">
                <form onSubmit={this.onSubmit}>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      name="usuario"
                      placeholder="Usuario"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-key"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      name="contrasena"
                      placeholder="Contraseña"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="row align-items-center remember">
                    <input type="checkbox" />
                    Recuerdame
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Login"
                      className="btn btn-primary float-right login_btn"
                    />
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  Si no tienes una cuenta, comunicate con el administrador
                </div>
                <div className="d-flex justify-content-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
