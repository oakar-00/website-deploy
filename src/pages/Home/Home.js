import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import Me from "./Me.js";
import Search from "./Weather/Search.js";
import JokeForm from "./Joke/JokeForm";
import countriesServices from "./Weather/services/countries.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SoftwareDev from "./SoftwareDev.js";
import { MdNightlight, MdWbSunny } from "react-icons/md";

function Home() {
	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, []);
	const [darkMode, setDarkMode] = useState(false);
	const [showMe, setShowMe] = useState(false);
	const [showWeather, setShowWeather] = useState(false);
	const [showJoke, setShowJoke] = useState(false);
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		countriesServices.getAll().then((response) => {
			console.log(response.data);
			setCountries(response.data);
		});
	}, []);

	const settings = {
		bg: "min-h-screen bg-top-left bg-gradient-to-b from-white to-gray-200 bg-auto text-black",
		button:
			"bg-gradient-to-r from-white to-gray-200 hover:from-purple-500 hover:to-pink-500 hover:text-white font-semibold mt-6 py-2 px-4 border border-b-4 border-r-4 border-gray-300 rounded",
	};

	const darkSettings = {
		bg: "min-h-screen bg-top-left bg-gradient-to-b from-black to-gray-700 bg-auto ",
		button:
			"bg-gradient-to-r from-black to-gray-900 hover:from-purple-500 hover:to-pink-500 hover:text-black font-semibold mt-6 py-2 px-4 border border-b-4 border-r-4 border-gray-500 rounded",
	};
	return (
		<div className={darkMode ? darkSettings.bg : settings.bg}>
			<Header darkMode={darkMode} />
			<div className="flex justify-center">
				<button onClick={() => setDarkMode(!darkMode)}>
					{darkMode ? <MdNightlight size={20} /> : <MdWbSunny size={20} />}
				</button>
			</div>
			<SoftwareDev settings={darkMode ? darkSettings : settings} />
			{/* <div className="flex md:flex-row flex-col items-center justify-center md:space-x-10">
				<button
					className={darkMode ? darkSettings.button : settings.button}
					onClick={() => {
						setShowWeather(false);
						setShowMe(!showMe);
					}}
				>
					<p>{showMe ? "Get to know me" : "Get to know me"}</p>
				</button>
				<button
					className={darkMode ? darkSettings.button : settings.button}
					onClick={() => {
						setShowMe(false);
						setShowWeather(!showWeather);
					}}
				>
					<p>
						{showWeather
							? "Ask me about the weather"
							: "Ask me about the weather"}
					</p>
				</button>
			</div> */}
			<div className="flex md:flex-row flex-col items-center justify-center md:space-x-10">
				<Link
					to={"/about"}
					state={darkMode ? { settings: darkSettings } : { settings: settings }}
				>
					<button className={darkMode ? darkSettings.button : settings.button}>
						<p>{showMe ? "Get to know me" : "Get to know me"}</p>
					</button>
				</Link>
				<button
					className={darkMode ? darkSettings.button : settings.button}
					onClick={() => {
						setShowMe(false);
						setShowJoke(false);
						setShowWeather(!showWeather);
					}}
				>
					<p>
						{showWeather
							? "Ask me about the weather"
							: "Ask me about the weather"}
					</p>
				</button>
				<button
					className={darkMode ? darkSettings.button : settings.button}
					onClick={() => {
						setShowMe(false);
						setShowJoke(!showJoke);
						setShowWeather(false);
					}}
				>
					<p>{showWeather ? "I'll tell you a joke" : "I'll tell you a joke"}</p>
				</button>
			</div>
			{showMe ? <Me settings={darkMode ? darkSettings : settings} /> : <></>}
			{showWeather ? (
				<Search
					settings={darkMode ? darkSettings : settings}
					countries={countries}
				/>
			) : (
				<></>
			)}
			{showJoke ? (
				<JokeForm settings={darkMode ? darkSettings : settings} />
			) : (
				<></>
			)}
			<Footer />
		</div>
	);
}
export default Home;
