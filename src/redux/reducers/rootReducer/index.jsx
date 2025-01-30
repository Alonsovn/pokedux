import { combineReducers } from "redux";
import { pokemonDataSlice } from "../../slices/pokemonDataSlice";
import { uiDataSlide } from "../../slices/uiDataSlice";

const rootReducer = combineReducers({
  pokemonData: pokemonDataSlice.reducer,
  ui: uiDataSlide.reducer,
});

export default rootReducer;
