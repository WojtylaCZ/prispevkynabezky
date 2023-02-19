import React from "react";
import "./index.css";
import { Main } from "./app/main";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import SSRProvider from "react-bootstrap/SSRProvider";

import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root") as HTMLElement;
if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <SSRProvider>
        <Main />
      </SSRProvider>
    </React.StrictMode>,

    rootElement
  );
} else {
  render(
    <React.StrictMode>
      <SSRProvider>
        <Main />
      </SSRProvider>
    </React.StrictMode>,
    rootElement
  );
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
