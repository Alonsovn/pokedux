import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { legacy_createStore as createStore } from "redux";
import "./index.css";
import App from "./Pages/App";
import { pokemonsReducer } from "./redux/reducers";
import { Provider } from "react-redux";

const store = createStore(pokemonsReducer);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
