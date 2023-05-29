import React from "react";
import reportWebVitals from "./cra/reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import SSRProvider from "react-bootstrap/SSRProvider";

import { hydrate, render } from "react-dom";

import "./index.css";
import "./app/i18n";
import { AppRouter } from "./app/app-router";

const index = (
  <React.StrictMode>
    <SSRProvider>
      <AppRouter />
    </SSRProvider>
  </React.StrictMode>
);

const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement.hasChildNodes()) {
  hydrate(index, rootElement);
} else {
  render(index, rootElement);
}

// import ReactDOM from "react-dom/client";
// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <Main />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
