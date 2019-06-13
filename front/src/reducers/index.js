import { combineReducers } from "redux";
import titularReducers from "./titularReducer";
import adherentesReducers from './adherentesReducers';

export default combineReducers({
    titulares: titularReducers,
    adherentes: adherentesReducers
});