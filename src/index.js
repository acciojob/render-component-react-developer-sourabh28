import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createRoot } from "react-dom/client";


const para =React.createElement(
    "p",
    {id: "abc"}, "I am learning React. My life is getting better."
);
const root = createRoot(document.getElementById("root"));
root.render(para);