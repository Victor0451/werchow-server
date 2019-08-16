import React from 'react'

const FormNuevoAdherente = (props) => {
    const { id, leerDatos, error, nuevoAdherente } = props
    return (
        <div>
            <form className="form-style-8" onSubmit={nuevoAdherente} >

                <h2> adherente</h2>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <p className="has-dynamic-label">
                            <input type="text" className="" name="sucursal" placeholder="Sucursal" onChange={leerDatos} />
                            <label>Sucursal</label>
                        </p>
                    </div>

                    <div className="form-group col-md-6">
                        <p className="has-dynamic-label">
                            <input type="text" className="" name="contrato" placeholder="Contrato" Value={id} readOnly onChange={leerDatos} />
                            <label>Contrato</label>
                        </p>
                    </div>
                </div>

                <div className="form-group">
                    <p className="has-dynamic-label">
                        <input type="text" className="" name="apellidos" placeholder="Apellidos" onChange={leerDatos} />
                        <label>Apellidos</label>
                    </p>
                </div>

                <div className="form-group">
                    <p className="has-dynamic-label">
                        <input type="text" className="" name="nombres" placeholder="Nombres" onChange={leerDatos} />
                        <label>Nombres</label>
                    </p>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <p className="has-dynamic-label">
                            <input type="date" id="dynamic-label-input" name="nacimiento" data-placeholder="Fecha de Nacimiento" aria-required="true" onChange={leerDatos} equired />
                        </p>
                    </div>

                    <div className="form-group col-md-6">
                        <p className="has-dynamic-label">
                            <select id="dynamic-label-input" className="" name="plan" placeholder="Grupo" onChange={leerDatos}  >
                                <option value="">Plan</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">S3</option>
                            </select>
                        </p>
                    </div>

                    <div className="form-group col-md-6">
                        <p className="has-dynamic-label">
                            <input type="text" className="" name="nro_doc" placeholder="DNI" onChange={leerDatos} />
                            <label>DNI</label>
                        </p>
                    </div>

                    <div className="form-group col-md-6">
                        <p className="has-dynamic-label">
                            <select id="dynamic-label-input" className="" name="sexo" placeholder="Sexo" onChange={leerDatos} >
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
                            <input type="date" id="dynamic-label-input" name="alta" data-placeholder="Fecha de Alta" aria-required="true" onChange={leerDatos} />
                        </p>
                    </div>

                    <div className="form-group col-md-6">
                        <p className="has-dynamic-label">
                            <input type="date" id="dynamic-label-input" name="vigencia" data-placeholder="Fecha de Vigencia" aria-required="true" onChange={leerDatos} />
                        </p>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <p className="has-dynamic-label">
                            <input type="text" className="" name="obra_soc" placeholder="OS" onChange={leerDatos} />
                            <label>Obra Social</label>
                        </p>
                    </div>

                    <div className="form-group col-md-6">
                        <p className="has-dynamic-label">
                            <input type="text" className="" name="telefono" placeholder="Telefono" onChange={leerDatos} />
                            <label>Telefono</label>
                        </p>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block mt-4">Guardar</button>

                {error ? (
                    <div className="font-weight-bold alert alert-danger text-center mt-4">
                        Todos los campos son obligatorios
                </div>
                ) : (
                        ""
                    )}

            </form>
        </div>
    )
}

export default FormNuevoAdherente
