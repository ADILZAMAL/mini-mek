import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.css";

import configureStore from "./store/configureStore";
const store = configureStore();

const rootEl = document.getElementById("root");

let render = () => {
  const App = require("./App").default;

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl
  );
};

if (module.hot) {
  const renderApp = render;
  const renderError = (error) => {
    const RedBox = require("redbox-react").default;
    ReactDOM.render(<RedBox error={error} />, rootEl);
  };
  render = () => {
    try {
      renderApp();
    } catch (error) {
      console.log(error);
      renderError(error);
    }
  };
  module.hot.accept("./App", () => {
    setTimeout(render);
  });
}

render();
