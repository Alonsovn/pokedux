import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import "./index.css";
import App from "./Pages/App";
import { pokemonsReducer } from "./redux/reducers";
import { Provider } from "react-redux";
import { featuring, logger } from "./middleware";

const composedEnhancer = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, featuring)
);

const store = createStore(pokemonsReducer, composedEnhancer);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
