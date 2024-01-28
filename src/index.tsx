import React from "react";
import reportWebVitals from "./cra/reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import { hydrateRoot } from "react-dom/client";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./app/i18n";
import { AppRouter } from "./app/app-router";

const index = (
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

const container = document.getElementById("app") as HTMLElement;

if (container.hasChildNodes()) {
  hydrateRoot(container, index);
} else {
  const root = createRoot(container!);
  root.render(index);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
