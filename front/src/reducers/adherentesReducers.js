import {
    MOSTRAR_ADHERENTESTITULAR, MOSTRAR_ADHERENTE
} from "../actions/types";

//CADA REDUCER TIENE SU ṔROPIO STATE

const initialState = {
    adherentes: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case MOSTRAR_ADHERENTESTITULAR:
            return {
                ...state,
                adherentes: action.payload
            };

        case MOSTRAR_ADHERENTE:
            return {
                ...state,
                adherente: action.payload
            };

        // case ELIMINAR_PRODUCTO:
        //     return {
        //         ...state,
        //         productos: state.productos.filter(
        //             producto => producto.id !== action.payload
        //         )
        //     };

        // case AGREGAR_PRODUCTO:
        //     return {
        //         ...state,
        //         productos: [...state.productos, action.payload]
        //     };

        // case EDITAR_PRODUCTO:
        //     return {
        //         ...state,
        //         productos: state.productos.map(producto =>
        //             producto.id === action.payload.id
        //                 ? (producto = action.payload)
        //                 : producto
        //         )
        //     };
        default:
            return state;
    }
}