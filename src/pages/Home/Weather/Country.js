import { useState } from "react";
import weatherServices from "./services/weatherServices.js";

const Country = (props) => {
	console.log(props.country.latlng[0], props.country.latlng[1]);
	const [temp, setTemp] = useState(0);
	const [icon, setIcon] = useState("");
	const [wind, setWind] = useState(0);
	const [desc, setDesc] = useState("");
	const api = weatherServices
		.getWeather(props.country.latlng[0], props.country.latlng[1])
		.then((response) => {
			console.log(response.data);
			setTemp((response.data.main.temp - 273.15).toFixed(2)); //the temperature form API is in Kelvin
			setIcon(weatherServices.getIcon(response.data.weather[0].icon));
			setDesc(response.data.weather[0].description);
			setWind(response.data.wind.speed.toFixed(2));
		});
	// console.log("this is temp: ", data);

	return (
		<div className="flex flex-col justify-center items-center p-4">
			<h1 className="text-2xl font-bold text-center self-center">
				{props.country.name.common}
			</h1>
			<p>
				Capital: {props.country.capital} <br />
				Area: {props.country.area} km²
			</p>
			<p>Languages: </p>
			<ul>
				{Object.values(props.country.languages).map((language) => (
					<li>{language}</li>
				))}
			</ul>
			<br />
			<img
				className="rounded-xl m-4"
				src={props.country.flags.png}
				alt="flag not available"
			/>
			<br />
			<h2 className="self-center text-xl">
				Weather in {props.country.capital}
			</h2>
			<p className="self-center">Temperature: {temp}°C</p>
			<img className="self-center" alt="image not available" src={icon}></img>
			<p className="self-center">{desc}</p>
			<p className="self-center">wind: {wind}m/s</p>
		</div>
	);
};

export default Country;
