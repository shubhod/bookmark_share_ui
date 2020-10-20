import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { reduxStore } from "./reduxStore";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <CookiesProvider>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </CookiesProvider>,
  document.getElementById("root")
);
