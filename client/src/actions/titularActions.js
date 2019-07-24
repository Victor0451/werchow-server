import {
  MOSTRAR_TITULARES, MOSTRAR_TITULAR, AGREGAR_TITULAR, BUSCAR_TITULAR, ULTIMO_CONTRATO_TITULAR
} from "./types";

import axios from "axios";

export const mostrarTitulares = () => async dispatch => {
  const respuesta = await axios.get("http://192.168.1.108:5000/api/maestro/titulares");
  dispatch({
    type: MOSTRAR_TITULARES,
    payload: respuesta.data
  });
};

export const ultimoContrato = () => async dispatch => {
  const respuesta = await axios.get("http://192.168.1.108:5000/api/maestro/lastcontrato");
  dispatch({
    type: ULTIMO_CONTRATO_TITULAR,
    payload: respuesta.data
  });
};


export const mostrarTitular = id => async dispatch => {
  const respuesta = await axios.get(`http://192.168.1.108:5000/api/maestro/titular/${id}`);

  dispatch({
    type: MOSTRAR_TITULAR,
    payload: respuesta.data
  });
};

export const buscarTitular = id => async dispatch => {
  const respuesta = await axios.get(`http://192.168.1.108:5000/getdatostitular/${id}`);

  dispatch({
    type: BUSCAR_TITULAR,
    payload: respuesta.data
  });
};
// export const borrarProducto = id => async dispatch => {
//   await axios.delete(`http://192.168.1.108:5000/productos/${id}`);

//   dispatch({
//     type: ELIMINAR_PRODUCTO,
//     payload: id
//   });
// };

export const agregarTitular = titular => async dispatch => {
  const respuesta = await axios.post(`http://192.168.1.108:5000/api/maestro/nuevo`, titular);
   

  dispatch({
    type: AGREGAR_TITULAR,
    payload: respuesta.data
  });
};

// export const editarProducto = producto => async dispatch => {
//   const respuesta = await axios.put(
//     `http://192.168.1.108:5000/productos/${producto.id}`,
//     producto
//   );

//   dispatch({
//     type: EDITAR_PRODUCTO,
//     payload: respuesta.data
//   });
// };