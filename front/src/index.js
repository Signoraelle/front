import React from "react";
import ReactDOM from "react-dom";
import "../src/components/index.css";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers/index";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        {" "}
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);


serviceWorker.unregister();