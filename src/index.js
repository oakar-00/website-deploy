import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Bass from "./pages/Bass/Bass";
import Finland from "./pages/Finland";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const base_url = "/website-deploy";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path={base_url + "/"} element={<Home />} />
				<Route path={base_url + "/about"} element={<About />} />
				<Route path={base_url + "/bass"} element={<Bass />} />
				<Route path={base_url + "/finland"} element={<Finland />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
