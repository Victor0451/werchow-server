import React, { Component } from 'react';
import Axios from 'axios';
import toastr from '../notifications/toastr';
import FormTitular from './FormTitular';
import GridInf from './GridInf';
import GridDom from './GridDom';





class Form extends Component {
    state = {
        titular: {
            sucursal: '',
            contrato: '',
            nombres: '',
            apellidos: '',
            nacimiento: '',
            nro_doc: '',
            alta: '',
            vigencia: '',
            os: '',
            sexo: '',
            telefono: '',
            grupo: '',
            plan: '',
            seguro_vida: '',
            cod_asesor: '',
            cuota: '',
            recibo: '',
            calle: '',
            numero: '',
            dom_cob: '',
            dom_lab: '',
            barrio: '',
            localidad: ''
        }

    }


    ultimoContrato = (e) => {

        let url = `http://localhost:3002/getlastcontrato`;

        Axios.get(url)
            .then((response) => {
                let lastcontrato = response.data.CONTRATO + 1;
                this.setState({
                    titular: {
                        contrato: lastcontrato
                    },

                    adherente: {
                        contrato: lastcontrato
                    }
                })


                //  console.log(this.state.contrato);

            })
            .catch((err) => {
                console.log(err);
            });
    }

    crearFormInf = (e) => {

        e.preventDefault()

        const { sucursal, contrato, nombres, apellidos, nacimiento, nro_doc, alta, vigencia, os, sexo, telefono, calle, numero, dom_cob, dom_lab, barrio, localidad, grupo, plan, seguro_vida, cod_asesor, cuota, recibo } = e.target.elements;

        const sucursalvalue = (sucursal.value);
        const contratovalue = (contrato.value);
        const nombresvalue = (nombres.value);
        const apellidosvalue = (apellidos.value);
        const nacimientovalue = (nacimiento.value);
        const nro_docvalue = (nro_doc.value);
        const altavalue = (alta.value);
        const vigenciavalue = (vigencia.value);
        const osvalue = (os.value);
        const sexovalue = (sexo.value);
        const telefonovalue = (telefono.value);
        const callevalue = calle.value;
        const numerovalue = numero.value;
        const dom_cobvalue = dom_cob.value;
        const dom_labvalue = dom_lab.value;
        const barriovalue = barrio.value;
        const localidadvalue = localidad.value;
        const grupovalue = grupo.value;
        const planvalue = plan.value;
        const seguro_vidavalue = seguro_vida.value;
        const cod_asesorvalue = cod_asesor.value;
        const cuotavalue = cuota.value;
        const recibovalue = recibo.value;


        if (sucursalvalue === '' || nombresvalue === '' || apellidosvalue === '' || nacimientovalue === '' || telefonovalue === '' || nro_docvalue === '' || recibovalue === '' || cod_asesorvalue === '' || cuota === '') {

            toastr.warning("Los campos en rojo son obligatorios, no pueden estar vacios!!!", "ATENCION")


        } else {
            e.preventDefault();
            this.setState({
                titular: {
                    sucursal: sucursalvalue,
                    contrato: contratovalue,
                    nombres: nombresvalue,
                    apellidos: apellidosvalue,
                    nacimiento: nacimientovalue,
                    nro_doc: nro_docvalue,
                    alta: altavalue,
                    vigencia: vigenciavalue,
                    os: osvalue,
                    sexo: sexovalue,
                    telefono: telefonovalue,
                    calle: callevalue,
                    numero: numerovalue,
                    dom_cob: dom_cobvalue,
                    dom_lab: dom_labvalue,
                    barrio: barriovalue,
                    localidad: localidadvalue,
                    grupo: grupovalue,
                    plan: planvalue,
                    seguro_vida: seguro_vidavalue,
                    cod_asesor: cod_asesorvalue,
                    cuota: cuotavalue,
                    recibo: recibovalue


                }
            })
            toastr.info("Los datos estan cargados pero aun no estan ingresados en la base de datos", "ATENCION")

        }

    }



    postRegistro = (e) => {
        e.preventDefault();


        let url = `http://localhost:3002/postcontrato`;


        let titular = this.state.titular;

        Axios.post(url, titular)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });

        // Reinicia el form

        // e.currentTarget.reset();
    }


    componentDidMount() {
        this.ultimoContrato()

    }

    render() {



        return (
            <div className="">

                <FormTitular
                    lastcontrato={this.state.titular.contrato}
                    crearFormInf={this.crearFormInf}

                />

                <div className="form-style-8">
                    <h2 className="mb-4 mt-4">Informacion Ingresada</h2>

                    <h3 className="text-left">Titular - Inf Personal</h3>

                    <GridInf
                        formInf={this.state.titular}
                    />

                    <br /><br />

                    <h3 className="text-left">Titular - Inf Domicilio y Modulos</h3>

                    <GridDom
                        formDom={this.state.titular}
                    />
                </div>
            </div>




        );
    }
}

export default Form;