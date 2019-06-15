import React from 'react'

const FormNuevoAdherente = () => {
    return (
        <div>
            <form className="form-style-8"  >

                <h2> adherente</h2>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <p className="has-dynamic-label">
                            <input type="text" className="" name="sucursal" placeholder="Sucursal" required />
                            <label>Sucursal</label>
                        </p>
                    </div>
                </div>

                <div className="form-group">
                    <p className="has-dynamic-label">
                        <input type="text" className="" name="apellidos" placeholder="Apellidos" required />
                        <label>Apellidos</label>
                    </p>
                </div>

                <div className="form-group">
                    <p className="has-dynamic-label">
                        <input type="text" className="" name="nombres" placeholder="Nombres" required />
                        <label>Nombres</label>
                    </p>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <p className="has-dynamic-label">
                            <input type="date" id="dynamic-label-input" name="nacimiento" data-placeholder="Fecha de Nacimiento" aria-required="true" required />
                        </p>
                    </div>

                    <div className="form-group col-md-6">
                        <p className="has-dynamic-label">
                            <select id="dynamic-label-input" className="" name="plan" placeholder="Grupo" required >
                                <option value="">Plan</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">S3</option>
                            </select>
                        </p>
                    </div>

                    <div className="form-group col-md-6">
                        <p className="has-dynamic-label">
                            <input type="text" className="" name="nro_doc" placeholder="DNI" required />
                            <label>DNI</label>
                        </p>
                    </div>

                    <div className="form-group col-md-6">
                        <p className="has-dynamic-label">
                            <select id="dynamic-label-input" className="" name="sexo" placeholder="Sexo" required>
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
                            <input type="date" id="dynamic-label-input" name="alta" data-placeholder="Fecha de Alta" required aria-required="true" />
                        </p>
                    </div>

                    <div className="form-group col-md-6">
                        <p className="has-dynamic-label">
                            <input type="date" id="dynamic-label-input" name="vigencia" data-placeholder="Fecha de Vigencia" required aria-required="true" />
                        </p>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <p className="has-dynamic-label">
                            <input type="text" className="" name="obra_soc" placeholder="OS" required />
                            <label>Obra Social</label>
                        </p>
                    </div>

                    <div className="form-group col-md-6">
                        <p className="has-dynamic-label">
                            <input type="text" className="" name="telefono" placeholder="Telefono" required />
                            <label>Telefono</label>
                        </p>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block mt-4">Guardar</button>

            </form>
        </div>
    )
}

export default FormNuevoAdherente
