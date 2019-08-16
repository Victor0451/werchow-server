import React, { Component } from 'react'
import FormNuevoAdherente from './FormNuevoAdherente';

export default class NuevoAdherente extends Component {

    state = {
        sucursal: '',
        contrato: '',
        nombres: '',
        apellidos: '',
        nacimiento: '',
        nro_doc: '',
        alta: '',
        vigencia: '',
        obra_soc: '',
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
        localidad: '',
        error: false,

    }

    leerDatos = e => {

        this.setState({ [e.target.name]: e.target.value })
    }

    nuevoAdherente = e => {

        e.preventDefault();

        const {
            contrato,
            sucursal,
            apellidos,
            nombres,
            nacimiento,
            nro_doc,
            sexo,
            alta,
            vigencia,
            obra_soc,
            telefono,
            grupo,
            cod_asesor,
            recibo,
            cuota
        } = this.state

        if (sucursal === '' || apellidos === '' || nombres === '' || nacimiento === '' || nro_doc === '' || sexo === '' || alta === '' || vigencia === '' || obra_soc === '' || grupo === '' || telefono === '' || cod_asesor === '' || recibo === '' || cuota === '') {
            this.setState({ error: true });
            return;
        }
        this.setState({ error: false });


        const adherente = {
            contrato,
            sucursal,
            apellidos,
            nombres,
            nacimiento,
            nro_doc,
            sexo,
            alta,
            vigencia,
            obra_soc,
            telefono,
            grupo,
            cod_asesor,
            recibo,
            cuota
        }

        console.log(adherente);

        //this.props.agregarTitular(titular);
    }

    render() {
        const { id } = this.props.match.params
        return (
            <div>
                <FormNuevoAdherente
                    id={id}
                    leerDatos={this.leerDatos}
                    nuevoAdherente={this.nuevoAdherente}
                    error={this.state.error}
                />
            </div>
        )
    }
}
