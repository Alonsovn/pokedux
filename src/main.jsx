import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import "./index.css";
import App from "./Pages/App";
import { Provider } from "react-redux";
import { logger } from "./middleware";
import { thunk } from "redux-thunk";
import rootReducer from "./redux/reducers/rootReducer";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancer = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, composedEnhancer);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
