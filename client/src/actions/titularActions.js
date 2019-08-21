import {
  MOSTRAR_TITULARES, MOSTRAR_TITULAR, AGREGAR_TITULAR, BUSCAR_TITULAR, ULTIMO_CONTRATO_TITULAR, EDITAR_TITULAR, BAJA_TITULAR
} from "./types";

import axios from "axios";
import toastr from '../utils/toastr'

export const mostrarTitulares = () => async dispatch => {
  await axios.get("http://190.231.32.232:5002/api/maestro/titulares")
    .then(res => dispatch({
      type: MOSTRAR_TITULARES,
      payload: res.data,

    }))

    .catch(err => {
      console.log(err)
      toastr.error("Algo salio mal, no se puede mostrar los socios, comunicate con sistemas ", "ATENCION")
    });

};

export const ultimoContrato = () => async dispatch => {
  const respuesta = await axios.get("http://190.231.32.232:5002/api/maestro/lastcontrato");
  dispatch({
    type: ULTIMO_CONTRATO_TITULAR,
    payload: respuesta.data
  });
};


export const mostrarTitular = id => async dispatch => {
  await axios.get(`http://190.231.32.232:5002/api/maestro/titular/${id}`)

    .then(res => dispatch({
      type: MOSTRAR_TITULAR,
      payload: res.data
    }),
    )


    .catch(err => {
      console.log(err)
      toastr.warning("El N° de Socio ingresado no existe", "ATENCION");
    });

};

export const buscarTitular = id => async dispatch => {
  await axios.get(`http://190.231.32.232:5002/getdatostitular/${id}`)

    .then(res => dispatch({
      type: BUSCAR_TITULAR,
      payload: res.data
    }),
      window.history.pushState(null, null, `/titulares/${id}`)
    )

    .catch(err => {
      console.log(err)
      toastr.warning("Socio Inexistente", "ATENCION")
    });
};

export const bajaTitular = id => async dispatch => {
  await axios.put(`http://190.231.32.232:5002/api/maestro/baja/${id}`, id)

    .then(res => dispatch({
      type: BAJA_TITULAR,
      payload: res.data,

    }),
      toastr.success("El socio fue dado de baja", "ATENCION"),
    )

    .catch(err => {
      console.log(err)
      toastr.error("Algo salio mal, no se registraron los cambios", "ATENCION")
    });
};

export const agregarTitular = titular => async dispatch => {
  await axios.post(`http://190.231.32.232:5002/api/maestro/nuevo`, titular)

    .then(res => dispatch({
      type: AGREGAR_TITULAR,
      payload: res.data

    }),
      toastr.success("El socio fue registrado con exito", "ATENCION"),
      window.history.pushState(null, null, `/titulares/${titular.CONTRATO}`)
    )

    .catch(err => {
      console.log(err)
      toastr.error("Algo salio mal, no se registraron los cambios", "ATENCION")

    });
};

export const editarTitular = titularModf => async dispatch => {
  await axios.put(
    `http://190.231.32.232:5002/api/maestro/editar/${titularModf.CONTRATO}`,
    titularModf
  )

    .then(res => dispatch({
      type: EDITAR_TITULAR,
      payload: res.data,

    }),
      toastr.success("El socio fue editado con exito", "ATENCION"),
      window.history.back()
    )

    .catch(err => {
      console.log(err)
      toastr.error("Algo salio mal, no se registraron los cambios", "ATENCION")
      window.history.back()
    });

};