import {
    MOSTRAR_HISTORIA
} from "./types";

import axios from "axios";

export const mostrarHistoria = (id) => async dispatch => {
    const respuesta = await axios.get(`http://192.168.1.108:5000/api/historia/historias/${id}`);
    dispatch({
        type: MOSTRAR_HISTORIA,
        payload: respuesta.data
    });
};

//   export const ultimoMemo = id => async dispatch => {
//     const respuesta = await axios.get(`http://192.168.1.108:5000/api/memo/lastmemo/${id}`);
//     dispatch({
//       type: ULTIMO_MEMO,
//       payload: respuesta.data
//     });
//   };

//   export const agregarMemo = memo => async dispatch => {
//     const respuesta = await axios.post(
//       "http://192.168.1.108:5000/api/memo/nuevo",
//       memo
//     );
//     dispatch({
//       type: AGREGAR_MEMO,
//       payload: respuesta.data
//     });
//   };




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