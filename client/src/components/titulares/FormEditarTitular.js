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

    const {
        titular,
        error,
        altaRef,
        apellidosRef,
        movilRef,
        productorRef,
        contratoRef,
        cuotaRef,
        grupoRef,
        zonaRef,
        nacimientoRef,
        nombresRef,
        nro_docRef,
        obra_socRef,
        planRef,
        sexoRef,
        sucursalRef,
        telefonoRef,
        vigenciaRef,
        calleRef,
        nro_calleRef,
        domi_cobrRef,
        dom_labRef,
        barrioRef,
        localidadRef,
        seguro_vidaRef,
        subPlanRef,
        modificarTit,
        registroHintoria,
        setAnterior } = props;

    return (

        <form className="form-style-8 " onSubmit={modificarTit}>

            <h2 className="mt-4">Datos de Ficha</h2>

            <div className="form-row mt-2">

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" ref={contratoRef} id="contrato" name="CONTRATO" value={titular.CONTRATO} placeholder="Contrato" readOnly />
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
                            Ref={zonaRef}
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
                            Ref={sucursalRef}
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
                            Ref={planRef}
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
                            Ref={subPlanRef}
                            defaultValue={titular.SUBPLAN}

                        />
                        <label >Sub Plan</label>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" id="dynamic-label-input" name="SEGURO_VIDA" defaultValue={titular.SEGURO_VIDA} ref={seguro_vidaRef} placeholder="Seguro de Vida" />
                        <label >Seguro de Vida</label>
                    </p>
                </div>


                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <ProductorAutosuggest
                            suggestions={productores}
                            placeholder="Productor"
                            Ref={productorRef}
                            defaultValue={titular.PRODUCTOR}

                        />
                        <label >Productor</label>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" name="CUOTA" placeholder="Cuota" defaultValue={titular.CUOTA} ref={cuotaRef} />
                        <label >Cuota</label>
                    </p>
                </div>

            </div>

            {/* DATOS DEL TITULAR */}

            <h2 className="mt-4">Informacion Personal</h2>

            <div className="form-group">
                <p className="has-dynamic-label">
                    <input type="text" className="" id="dynamic-label-input" name="APELLIDOS" placeholder="Apellidos" defaultValue={titular.APELLIDOS} ref={apellidosRef} />
                    <label >Apellidos</label>
                </p>
            </div>

            <div className="form-group">
                <p className="has-dynamic-label">
                    <input type="text" className="" id="dynamic-label-input" name="NOMBRES" placeholder="Nombres" defaultValue={titular.NOMBRES} ref={nombresRef} />
                    <label >Nombres</label>
                </p>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="date" id="dynamic-label-input" name="NACIMIENTO" data-placeholder="Fecha de Nacimiento" aria-required="true" defaultValue={titular.NACIMIENTO} ref={nacimientoRef} />
                        <label >Fecha de Nacimiento</label>

                    </p>
                </div>



                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="number" className="" id="in-range-input" name="NRO_DOC" minLength="8" placeholder="DNI" defaultValue={titular.NRO_DOC} ref={nro_docRef} onChange={registroHintoria} onClick={setAnterior} />
                        <label >DNI</label>
                    </p>
                </div>

                <div className="form-group col-md-6" >
                    <p className="has-dynamic-label" >
                        <select id="dynamic-label-input" defaultValue={titular.SEXO} className="" name="SEXO" ref={sexoRef} >
                            <option value={titular.SEXO}>{titular.SEXO}</option>
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                        </select>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="date" className="" id="dynamic-label-input" data-placeholder="Fecha de Alta" name="ALTA" aria-required="true" defaultValue={titular.ALTA} ref={altaRef} />
                        <label >Fecha de Alta</label>

                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="date" className="" id="vigencia" name="VIGENCIA" data-placeholder="Fecha de Vigencia" aria-required="true" defaultValue={titular.VIGENCIA} ref={vigenciaRef} />
                        <label >Vigencia</label>
                    </p>
                </div>
                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <OSAutosuggest
                            suggestions={obra_social}
                            placeholder="Obra Social"
                            Ref={obra_socRef}
                            defaultValue={titular.OBRA_SOC}
                        />
                        <label >Obra Social</label>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="Number" className="" id="telefono" name="TELEFONO" placeholder="Telefono" defaultValue={titular.TELEFONO} ref={telefonoRef} />
                        <label >Telefono</label>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="Number" className="" id="celular" name="MOVIL" placeholder="Celular" defaultValue={titular.MOVIL} ref={movilRef} />
                        <label >Celular</label>
                    </p>
                </div>

            </div>



            {/* DATOS DEL DOMICILIO */}



            <h2 className="mt-4">Domicilio</h2>


            <div className="form-row mt-2">
                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" name="CALLE" placeholder="Domicilio" defaultValue={titular.CALLE} ref={calleRef} />
                        <label >Domicilio</label>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" name="NRO_CALLE" placeholder="Numero" defaultValue={titular.NRO_CALLE} ref={nro_calleRef} />
                        <label >Numero</label>
                    </p>
                </div>



                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" id="dynamic-label-input" name="BARRIO" placeholder="Barrio" defaultValue={titular.BARRIO} ref={barrioRef} />
                        <label >Barrio</label>
                    </p>
                </div>


                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <LocalidadesAutosuggest
                            suggestions={localidades}
                            placeholder="Sucursal"
                            Ref={localidadRef}
                            defaultValue={titular.LOCALIDAD}
                        />
                        <label >localidad</label>
                    </p>
                </div>


                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" name="DOMI_COBR" placeholder="Domicilio Cobrador" defaultValue={titular.DOMI_COBR} ref={domi_cobrRef} />
                        <label >Domicilio de Cobranza</label>
                    </p>
                </div>

                <div className="form-group col-md-6">
                    <p className="has-dynamic-label">
                        <input type="text" className="" name="DOM_LAB" placeholder="Domicilio Laboral" defaultValue={titular.DOM_LAB} ref={dom_labRef} />
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






