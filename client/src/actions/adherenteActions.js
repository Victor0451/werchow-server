import {
    MOSTRAR_ADHERENTESTITULAR, MOSTRAR_ADHERENTES
} from "./types";

import axios from "axios";

export const mostrarAdherentes = () => async dispatch => {
    const respuesta = await axios.get("http://192.168.1.108:5000/api/adherent/aderentes");
    dispatch({
        type: MOSTRAR_ADHERENTES,
        payload: respuesta.data
    });
};

export const mostrarAdherentesDelTitular = id => async dispatch => {
    const respuesta = await axios.get(`http://192.168.1.108:5000/api/adherent/adherentestit/${id}`);

    dispatch({
        type: MOSTRAR_ADHERENTESTITULAR,
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

   // export const agregarProducto = producto => async dispatch => {
   //   const respuesta = await axios.post(
   //     "http://192.168.1.108:5000/productos",
   //     producto
   //   );

   //   dispatch({
   //     type: AGREGAR_PRODUCTO,
   //     payload: respuesta.data
   //   });
   // };

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