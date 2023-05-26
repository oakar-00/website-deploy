import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Bass from "./pages/Bass/Bass";
import Finland from "./pages/Finland";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// doesn't work on refresh
	// <React.StrictMode>
	// <BrowserRouter>
	// 	<Routes>
	// 		<Route path={base_url + "/"} element={<Home />} />
	// 		<Route path={base_url + "/about"} element={<About />} />
	// 		<Route path={base_url + "/bass"} element={<Bass />} />
	// 		<Route path={base_url + "/finland"} element={<Finland />} />
	// 	</Routes>
	// </BrowserRouter>
	// </React.StrictMode>
	<HashRouter>
		<Routes>
			<Route exact path={"/"} element={<Home />} />
			<Route path={"/about"} element={<About />} />
			<Route path={"/bass"} element={<Bass />} />
			<Route path={"/finland"} element={<Finland />} />
		</Routes>
	</HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
