import React from "react";

export default function FormVerificarAdh(props) {
  return (
    <div>
      <form onSubmit={props.validarAdh}>
        <div className=" form-style-8">
          <h2>Ingresa Numero de Contrato</h2>
          <div className="row mt-4">
            <div className="col-md-6">
              <p className="has-dynamic-label">
                <input
                  type="text"
                  className=""
                  name="contrato"
                  placeholder="Numero de Contrato"
                  required
                />
                <label for="in-range-input">Numero de Contrato</label>
              </p>
            </div>
            <div className="col-md-6 mt-4 ">
              <button type="submit" className="btn btn-primary col">
                Verificar
              </button>
            </div>
          </div>
        </div>
       
      </form>
    </div>
  );
}
