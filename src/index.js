import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { totoReducer } from "./Reducer/Todolist";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ReactDOM } from "react";

const store = createStore(totoReducer);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById("root")
);
