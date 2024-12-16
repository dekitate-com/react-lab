import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(
	<React.StrictMode>
		<h2>Hello World</h2>
		<p>contents</p>
		<App />
	</React.StrictMode>,
);
