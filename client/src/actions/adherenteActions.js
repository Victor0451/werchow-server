import {
    MOSTRAR_ADHERENTESTITULAR, MOSTRAR_ADHERENTES, BAJA_ADHERENTE, AGREGAR_ADHERENTE
} from "./types";

import axios from "axios";
import toastr from '../utils/toastr'

export const mostrarAdherentes = () => async dispatch => {
    const respuesta = await axios.get("http://190.231.32.232:5002/api/adherent/aderentes");
    dispatch({
        type: MOSTRAR_ADHERENTES,
        payload: respuesta.data
    });
};

export const mostrarAdherentesDelTitular = id => async dispatch => {
    const respuesta = await axios.get(`http://190.231.32.232:5002/api/adherent/adherentestit/${id}`);

    dispatch({
        type: MOSTRAR_ADHERENTESTITULAR,
        payload: respuesta.data
    });
};

export const bajaAdherente = id => async dispatch => {
    await axios.put(`http://190.231.32.232:5002/api/adherent/baja/${id}`)

        .then(res => dispatch({
            type: BAJA_ADHERENTE,
            payload: res.data,

        }),
            toastr.success("El socio fue dado de baja", "ATENCION"),
        )

        .catch(err => {
            console.log(err)
            toastr.error("Algo salio mal, no se registraron los cambios", "ATENCION")
        });
};


export const bajaAdherenteGral = id => async dispatch => {
    await axios.put(`http://190.231.32.232:5002/api/adherent/bajagral/${id}`)

        .then(res => dispatch({
            type: BAJA_ADHERENTE,
            payload: res.data,

        }),
            toastr.success("El socio fue dado de baja", "ATENCION"),
        )

        .catch(err => {
            console.log(err)
            toastr.error("Algo salio mal, no se registraron los cambios", "ATENCION")
        });
};


export const agregarAdherente = adherente => async dispatch => {
    await axios.post("http://190.231.32.232:5002/api/adherente/nuevo", adherente)

        .then(res => dispatch({
            type: AGREGAR_ADHERENTE,
            payload: res.data

        }),
            toastr.success("El adherente fue registrado con exito", "ATENCION"))

        .catch(err => {
            console.log(err)
            toastr.error("Algo salio mal, no se registraron los cambios", "ATENCION")

        });
};

   // export const editarProducto = producto => async dispatch => {
   //   const respuesta = await axios.put(
   //     `http://190.231.32.232:5002/productos/${producto.id}`,
   //     producto
   //   );

   //   dispatch({
   //     type: EDITAR_PRODUCTO,
   //     payload: respuesta.data
   //   });
   // };