import React from 'react'
import GrupoAutosuggest from '../layouts/Autosuggest/DefaultEditAutosuggest';
import OSAutosuggest from '../layouts/Autosuggest/DefaultEditAutosuggest';
import PlanAutosuggest from '../layouts/Autosuggest/DefaultEditAutosuggest';
import SubPlanAutosuggest from '../layouts/Autosuggest/DefaultEditAutosuggest';
import SucursalAutosuggest from '../layouts/Autosuggest/DefaultEditAutosuggest';
import LocalidadesAutosuggest from '../layouts/Autosuggest/DefaultEditAutosuggest';
import ProductorAutosuggest from '../layouts/Autosuggest/DefaultEditAutosuggest';
import ZonaAutosuggest from '../layouts/Autosuggest/DefaultEditAutosuggest';



import { localidades, grupos, productores, zonas, obra_social, planes, subplanes } from '../layouts/Arrays/arrays'



const FormNuevoTitular = (props) => {

    const { titular, error, grupoRef, OSRef, PlanRef, SucursalRef, ContratoRef, LocalidadesRef, ProductorRef, ZonaRef, AltaRef, VigenciaRef, SubPlanRef } = props;

    let tmp = new Date(Date.now());
    let alta = tmp.toISOString().split('T')[0];


    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();
    let vigencia = new Date(year, month + 3, day).toISOString().split('T')[0];

console.log(titular)
    return (

        <form className="form-style-8 " >

            <h2 className="mt-4">Datos de Ficha</h2>

            <div className="form-row mt-2">

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" ref={ContratoRef} id="contrato" name="CONTRATO" value={titular.CONTRATO} placeholder="Contrato" readOnly />
                        <label >CONTRATO</label>
                    </p>
                </div>


                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <GrupoAutosuggest
                            suggestions={grupos}
                            placeholder="Grupo"
                            Ref={grupoRef}
                            defaultValue={titular.GRUPO}

                        />
                        <label >GRUPO</label>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <ZonaAutosuggest
                            suggestions={zonas}
                            placeholder="Zona"
                            Ref={ZonaRef}
                            defaultValue={titular.ZONA}


                        />
                        <label >Zona</label>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <SucursalAutosuggest
                            suggestions={[
                                "W - Casa Central",
                                "L - Palpala",
                                "R - Perico",
                                "P - San Pedro"
                            ]}
                            placeholder="Sucursal"
                            Ref={SucursalRef}
                            defaultValue={titular.SUCURSAL}

                        />
                        <label >Sucursal</label>
                    </p>
                </div>


                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <PlanAutosuggest
                            suggestions={planes}
                            placeholder="Plan"
                            Ref={PlanRef}
                            defaultValue={titular.PLAN}

                        />
                        <label >Plan</label>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <SubPlanAutosuggest
                            suggestions={subplanes}
                            placeholder="Sub Plan"
                            Ref={SubPlanRef}
                            defaultValue={titular.SUBPLAN}

                        />
                        <label >Sub Plan</label>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" id="dynamic-label-input" name="SEGURO_VIDA" defaultValue={titular.SEGURO_VIDA} placeholder="Seguro de Vida" />
                        <label >Seguro de Vida</label>
                    </p>
                </div>


                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <ProductorAutosuggest
                            suggestions={productores}
                            placeholder="Productor"
                            Ref={ProductorRef}
                            defaultValue={titular.PRODUCTOR}

                        />
                        <label >Productor</label>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" name="CUOTA" placeholder="Cuota" defaultValue={titular.CUOTA}/>
                        <label >Cuota</label>
                    </p>
                </div>
           
           </div>

            {/* DATOS DEL TITULAR */}

            <h2 className="mt-4">Informacion Personal</h2>

            <div className="form-group">
                <p className="has-dynamic-label">
                    <input type="text" className="" id="dynamic-label-input" name="APELLIDOS" placeholder="Apellidos" />
                    <label >Apellidos</label>
                </p>
            </div>

            <div className="form-group">
                <p className="has-dynamic-label">
                    <input type="text" className="" id="dynamic-label-input" name="NOMBRES" placeholder="Nombres" />
                    <label >Nombres</label>
                </p>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="date" id="dynamic-label-input" name="NACIMIENTO" data-placeholder="Fecha de Nacimiento" aria-required="true" />
                        <label >Fecha de Nacimiento</label>

                    </p>
                </div>



                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="number" className="" id="in-range-input" name="NRO_DOC" minLength="8" placeholder="DNI" />
                        <label >DNI</label>
                    </p>
                </div>

                <div className="form-group col-md-6" defaultValue={"Default"}>
                    <p className="has-dynamic-label" defaultValue={"Default"}>
                        <select id="dynamic-label-input" defaultValue={"Default"} className="" name="SEXO" >
                            <option value="Default">Sexo</option>
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                        </select>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="date" className="" id="dynamic-label-input" data-placeholder="Fecha de Alta" name="ALTA" aria-required="true" defaultValue={alta} ref={AltaRef} />
                        <label >Fecha de Alta</label>

                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="date" className="" id="vigencia" name="VIGENCIA" data-placeholder="Fecha de Vigencia" aria-required="true" defaultValue={vigencia} ref={VigenciaRef} />
                        <label >Vigencia</label>
                    </p>
                </div>
                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <OSAutosuggest
                            suggestions={obra_social}
                            placeholder="Obra Social"
                            Ref={OSRef}
                        />
                        <label >Obra Social</label>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="Number" className="" id="telefono" name="TELEFONO" placeholder="Telefono" />
                        <label >Telefono</label>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="Number" className="" id="celular" name="MOVIL" placeholder="Celular" />
                        <label >Celular</label>
                    </p>
                </div>

            </div>



            {/* DATOS DEL DOMICILIO */}



            <h2 className="mt-4">Domicilio</h2>


            <div className="form-row mt-2">
                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" name="CALLE" placeholder="Domicilio" />
                        <label >Domicilio</label>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" name="NRO_CALLE" placeholder="Numero" />
                        <label >Numero</label>
                    </p>
                </div>



                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" id="dynamic-label-input" name="BARRIO" placeholder="Barrio" />
                        <label >Barrio</label>
                    </p>
                </div>


                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <LocalidadesAutosuggest
                            suggestions={localidades}
                            placeholder="Sucursal"
                            Ref={LocalidadesRef}

                        />
                        <label >localidad</label>
                    </p>
                </div>


                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" name="DOMI_COBR" placeholder="Domicilio Cobrador" />
                        <label >Domicilio de Cobranza</label>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" name="DOM_LAB" placeholder="Domicilio Laboral" />
                        <label >Domicilio Laboral</label>
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






