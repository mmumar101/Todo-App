import React from "react";
import { ReactDOM } from "react-dom/client";
import {App from} 'App.js';
import {contextTheme} from "./components/contextTheme";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <contextTheme>
            <App />
        </contextTheme>
    </React.StrictMode>
);