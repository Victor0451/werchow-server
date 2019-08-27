import { combineReducers } from "redux";
import titularReducers from "./titularReducer";
import adherentesReducers from "./adherentesReducers";
import pagosReducers from "./pagosReducers";
import pagobcoReducers from "./pagobcoReducers";
import memosReducers from "./memosReducers";
import historiaReducers from "./historiaReducers";
import fichasReducers from "./fichasReducers";
import prestamosReducers from "./prestamosReducers";

export default combineReducers({
  titulares: titularReducers,
  adherentes: adherentesReducers,
  pagos: pagosReducers,
  pagobco: pagobcoReducers,
  memos: memosReducers,
  historia: historiaReducers,
  fichas: fichasReducers,
  prestamos: prestamosReducers
});
