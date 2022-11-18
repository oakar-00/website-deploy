import logo from "../logo.svg";
import { Link } from "react-router-dom";
import Header from "./Header.js";

function App() {
	return (
		<div className="bg-zinc-700 min-h-screen">
			<Header />
			<header className="App-header">
				<img src={logo} className="content-start" alt="logo" />
				<p className="text-center text-white">
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<li>
					<Link to="/about">About</Link>
				</li>
				<a
					className="align-center"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
