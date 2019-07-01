import React from 'react'

const FormNuevoTitular = (props) => {
    const { error, contrato, leerDatos, nuevoTitular } = props;

    return (

        <form className="form-style-8 " onSubmit={nuevoTitular}>
            <h2>Informacion Personal</h2>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" onChange={leerDatos} id="dynamic-label-input" name="sucursal" placeholder="Sucursal" />
                        <label >Sucursal</label>
                    </p>
                </div>
                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" onChange={leerDatos} id="grupo" name="grupo" placeholder="Grupo" />
                        <label >Grupo</label>
                    </p>
                </div>
                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" onChange={leerDatos} id="contrato" name="contrato" value={contrato} placeholder="Contrato" readOnly />
                        <label >Contrato</label>
                    </p>
                </div>
            </div>

            <div className="form-group">
                <p className="has-dynamic-label">
                    <input type="text" className="" onChange={leerDatos} id="dynamic-label-input" name="apellidos" placeholder="Apellidos" />
                    <label >Apellidos</label>
                </p>
            </div>

            <div className="form-group">
                <p className="has-dynamic-label">
                    <input type="text" className="" onChange={leerDatos} id="dynamic-label-input" name="nombres" placeholder="Nombres" />
                    <label >Nombres</label>
                </p>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="date" id="dynamic-label-input" onChange={leerDatos} name="nacimiento" data-placeholder="Fecha de Nacimiento" aria-required="true" />
                    </p>
                </div>



                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="number" className="" onChange={leerDatos} id="in-range-input" name="nro_doc" minLength="8" placeholder="DNI" />
                        <label >DNI</label>
                    </p>
                </div>

                <div className="form-group col-md-6" defaultValue={"Default"}>
                    <p className="has-dynamic-label" defaultValue={"Default"}>
                        <select id="dynamic-label-input" onChange={leerDatos} defaultValue={"Default"} className="" name="sexo" >
                            <option value="Default">Sexo</option>
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                        </select>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="date" className="" onChange={leerDatos} id="dynamic-label-input" data-placeholder="Fecha de Alta" name="alta" aria-required="true" />
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <input type="date" className="" id="vigencia" onChange={leerDatos} name="vigencia" data-placeholder="Fecha de Vigencia" aria-required="true" />
                </div>
                <div className="form-group col-md-6">
                    <input type="text" className="" id="os" name="os" onChange={leerDatos} placeholder="OS" />
                </div>
                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="Number" className="" id="telefono" onChange={leerDatos} name="telefono" placeholder="Telefono" />
                        <label >Telefono</label>
                    </p>
                </div>

            </div>

            <h2 className="mt-4">Domicilio</h2>


            <div className="form-row mt-2">
                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" name="calle" onChange={leerDatos} placeholder="Domicilio" />
                        <label >Domicilio</label>
                    </p>
                </div>
                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" name="numero" onChange={leerDatos} placeholder="Numero" />
                        <label >Numero</label>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" name="dom_cob" onChange={leerDatos} placeholder="Domicilio Cobrador" />
                        <label >Comicilio de Cobranza</label>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" name="dom_lab" onChange={leerDatos} placeholder="Domicilio Laboral" />
                        <label >Domicilio Laboral</label>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <select id="dynamic-label-input" onChange={leerDatos} defaultValue={"Default"} className="" name="barrio" placeholder="Grupo"  >
                            <option selected value="Default">Barrio</option>
                            <option value="2">2</option>
                            <option value="2" >3</option>
                            <option value="2" >S3</option>
                        </select>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <select id="dynamic-label-input" onChange={leerDatos} defaultValue={"Default"} className="" name="localidad" placeholder="Grupo"  >
                            <option selected value="Default">Localidad</option>
                            <option value="2">2</option>
                            <option value="2">3</option>
                            <option value="2">S3</option>
                        </select>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <select id="dynamic-label-input" onChange={leerDatos} defaultValue={"Default"} className="" name="cuenta" placeholder="Grupo"  >
                            <option selected value="Default">Tipo de Cuenta</option>
                            <option value="2">2</option>
                            <option value="2">3</option>
                            <option value="2">S3</option>
                        </select>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <select id="dynamic-label-input" onChange={leerDatos} defaultValue={"Default"} className="" name="plan" placeholder="Grupo"  >
                            <option selected value="Default">Plan</option>
                            <option value="2">2</option>
                            <option value="2">3</option>
                            <option value="2">S3</option>
                        </select>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <select id="dynamic-label-input" onChange={leerDatos} defaultValue={"Default"} className="" name="seguro_vida" placeholder="Grupo"  >
                            <option selected value="Default">Seguro de Vida</option>
                            <option value="2">2</option>
                            <option value="2">3</option>
                            <option value="2">S3</option>
                        </select>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" onChange={leerDatos} name="cod_asesor" placeholder="Codigo asesor" />
                        <label >Codigo de asesor</label>
                    </p>
                </div>
                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" onChange={leerDatos} name="cuota" placeholder="Cuota" />
                        <label >Cuota</label>
                    </p>
                </div>
                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" onChange={leerDatos} name="recibo" placeholder="Nº Recibo" />
                        <label >Nº de Recibo</label>
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
    )
}

export default FormNuevoTitular






