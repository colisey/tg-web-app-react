import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";


const root = ReactDOM.createRoot(
  document.getElementById("root")// as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// { command: "/start", description: "Начальное приветствие" },
//     { command: "/form", description: "Пример Формы сбора данных" },
//     { command: "/shop", description: "Пример магазина" },
//     { command: "/basket", description: "Пример корзины магазина" },
//     { command: "/gallery", description: "Пример галлереи" },
//     { command: "/cases", description: "Пример Кейсов" },
//     { command: "/contacts", description: "Контакты" },
