import React from 'react';


const FormInf = props => (


    <form className="form-style-8 " onSubmit={props.crearFormInf} >
        <h2>Informacion Personal</h2>
        <div className="form-row">
            <div className="form-group col-md-6">
                <p className="has-dynamic-label">
                    <input type="text" className="" id="dynamic-label-input" name="sucursal" placeholder="Sucursal" required />
                    <label for="dynamic-label-input">Sucursal</label>
                </p>
            </div>
            <div className="form-group col-md-6">
                <p className="has-dynamic-label">
                    <input type="text" className="" value={props.lastcontrato} id="contrato" name="contrato" placeholder="Contrato" readOnly />
                    <label for="dynamic-label-input">Contrato</label>
                </p>
            </div>
        </div>

        <div className="form-group">
            <p className="has-dynamic-label">
                <input type="text" className="" id="dynamic-label-input" name="apellidos" placeholder="Apellidos" required />
                <label for="dynamic-label-input">Apellidos</label>
            </p>
        </div>

        <div className="form-group">
            <p className="has-dynamic-label">
                <input type="text" className="" id="dynamic-label-input" name="nombres" placeholder="Nombres" required />
                <label for="dynamic-label-input">Nombres</label>
            </p>
        </div>

        <div className="form-row">
            <div className="form-group col-md-6">
                <p className="has-dynamic-label">
                    <input type="date" id="dynamic-label-input" name="nacimiento" data-placeholder="Fecha de Nacimiento" required aria-required="true" />
                </p>
            </div>



            <div className="form-group col-md-6">
                <p className="has-dynamic-label">
                    <input type="number" className="" id="in-range-input" name="nro_doc" minLength="8" placeholder="DNI" required />
                    <label for="in-range-input">DNI</label>
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

            <div className="form-group col-md-6">
                <p className="has-dynamic-label">
                    <input type="date" className="" id="dynamic-label-input" data-placeholder="Fecha de Alta" name="alta" required aria-required="true" />
                </p>
            </div>

            <div className="form-group col-md-6">
                <input type="date" className="" id="vigencia" name="vigencia" data-placeholder="Fecha de Vigencia" required aria-required="true" />
            </div>
            <div className="form-group col-md-6">
                <input type="text" className="" id="os" name="os" placeholder="OS" required />
            </div>
            <div className="form-group col-md-6">
                <p className="has-dynamic-label">
                    <input type="Number" className="" id="telefono" name="telefono" placeholder="Telefono" required />
                    <label for="in-range-input">Telefono</label>
                </p>
            </div>
        </div>

        <h2 className="mt-4">Domicilio</h2>


        <div className="form-row mt-2">
            <div className="form-group col-md-6">
                <p className="has-dynamic-label">
                    <input type="text" className="" name="calle" placeholder="Domicilio" />
                    <label for="in-range-input">Domicilio</label>
                </p>
            </div>
            <div className="form-group col-md-6">
                <p className="has-dynamic-label">
                    <input type="text" className="" name="numero" placeholder="Numero" />
                    <label for="in-range-input">Numero</label>
                </p>
            </div>

            <div className="form-group col-md-6">
                <p className="has-dynamic-label">
                    <input type="text" className="" name="dom_cob" placeholder="Domicilio Cobrador" />
                    <label for="in-range-input">Comicilio de Cobranza</label>
                </p>
            </div>

            <div className="form-group col-md-6">
                <p className="has-dynamic-label">
                    <input type="text" className="" name="dom_lab" placeholder="Domicilio Laboral" />
                    <label for="in-range-input">Domicilio Laboral</label>
                </p>
            </div>

            <div className="form-group col-md-6">
                <p className="has-dynamic-label">
                    <select id="dynamic-label-input" className="" name="barrio" placeholder="Grupo" required >
                        <option value="">Barrio</option>
                        <option value="">2</option>
                        <option value="" >3</option>
                        <option value="" >S3</option>
                    </select>
                </p>
            </div>

            <div className="form-group col-md-6">
                <p className="has-dynamic-label">
                    <select id="dynamic-label-input" className="" name="localidad" placeholder="Grupo" required >
                        <option value="">Localidad</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">S3</option>
                    </select>
                </p>
            </div>

            <div className="form-group col-md-6">
                <p className="has-dynamic-label">
                    <select id="dynamic-label-input" className="" name="cuenta" placeholder="Grupo" required >
                        <option value="">Tipo de Cuenta</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">S3</option>
                    </select>
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
                    <select id="dynamic-label-input" className="" name="seguro_vida" placeholder="Grupo" required >
                        <option value="">Seguro de Vida</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">S3</option>
                    </select>
                </p>
            </div>

            <div className="form-group col-md-6">
                <p className="has-dynamic-label">
                    <input type="text" className="" name="cod_asesor" placeholder="Codigo asesor" required />
                    <label for="in-range-input">Codigo de asesor</label>
                </p>
            </div>
            <div className="form-group col-md-6">
                <p className="has-dynamic-label">
                    <input type="text" className="" name="cuota" placeholder="Cuota" required />
                    <label for="in-range-input">Cuota</label>
                </p>
            </div>
            <div className="form-group col-md-6">
                <p className="has-dynamic-label">
                    <input type="text" className="" name="recibo" placeholder="Nº Recibo" required />
                    <label for="in-range-input">Nº de Recibo</label>
                </p>
            </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-4">Guardar</button>
    </form>



)

export default FormInf;