import {
    MOSTRAR_TITULARES, MOSTRAR_TITULAR, AGREGAR_TITULAR, BUSCAR_TITULAR, ULTIMO_CONTRATO_TITULAR
} from "../actions/types";

//CADA REDUCER TIENE SU ṔROPIO STATE

const initialState = {
    titulares: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case MOSTRAR_TITULARES:
            return {
                ...state,
                titulares: action.payload
            };

        case MOSTRAR_TITULAR:
            return {
                ...state,
                titular: action.payload
            };

        case BUSCAR_TITULAR:
            return {
                ...state,
                titular: action.payload
            };

        case ULTIMO_CONTRATO_TITULAR:
            return {
                ...state,
                lastcontrato: action.payload
            };

        // case ELIMINAR_PRODUCTO:
        //     return {
        //         ...state,
        //         productos: state.productos.filter(
        //             producto => producto.id !== action.payload
        //         )
        //     };

        case AGREGAR_TITULAR:
            return {
                ...state,
                titulares: [...state.titulares, action.payload]
            };

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