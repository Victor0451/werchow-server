import {
    MOSTRAR_ADHERENTE, MOSTRAR_ADHERENTES
} from "./types";

import axios from "axios";

export const mostrarAdherentes = () => async dispatch => {
    const respuesta = await axios.get("http://192.168.1.108:3002/getlistadotitulares");
    dispatch({
        type: MOSTRAR_ADHERENTES,
        payload: respuesta.data
    });
};

export const mostrarAdherente = id => async dispatch => {
    const respuesta = await axios.get(`http://192.168.1.108:3002/getmaestro/${id}`);

    dispatch({
        type: MOSTRAR_ADHERENTE,
        payload: respuesta.data
    });
};

   // export const borrarProducto = id => async dispatch => {
   //   await axios.delete(`http://localhost:5000/productos/${id}`);

   //   dispatch({
   //     type: ELIMINAR_PRODUCTO,
   //     payload: id
   //   });
   // };

   // export const agregarProducto = producto => async dispatch => {
   //   const respuesta = await axios.post(
   //     "http://localhost:5000/productos",
   //     producto
   //   );

   //   dispatch({
   //     type: AGREGAR_PRODUCTO,
   //     payload: respuesta.data
   //   });
   // };

   // export const editarProducto = producto => async dispatch => {
   //   const respuesta = await axios.put(
   //     `http://localhost:5000/productos/${producto.id}`,
   //     producto
   //   );

   //   dispatch({
   //     type: EDITAR_PRODUCTO,
   //     payload: respuesta.data
   //   });
   // };