import Header from "./Header.js";
import Footer from "./Footer.js";
import { useCallback, useState, useEffect } from "react";

function Home() {
	const names = [
		"FrontEnd Developer",
		"Machine Learning",
		"Software Development",
	];
	const [newName, setnewName] = useState("");

	const shuffle = useCallback(() => {
		const index = Math.floor(Math.random() * names.length);
		setnewName(names[index]);
	}, []);

	useEffect(() => {
		const intervalID = setInterval(shuffle, 3000);
		return () => clearInterval(intervalID);
	}, [shuffle]);

	return (
		<div className="min-h-screen bg-top-left bg-gradient-to-b from-black to-gray-700 bg-auto">
			<Header />
			<div className="flex flex-col-reverse md:flex-row md:justify-evenly items-center justify-center ">
				<div className="flex flex-col md:items-end justify-center w-1/2 items-start md:p-6">
					<p className="font-sans text-5xl mb-2 text-white hover:scale-110 duration-500 font-semibold">
						Hi!
					</p>
					<p className="font-sans text-5xl mb-2">
						I'm{" "}
						<span className="hover:tracking-wider duration-300">
							OAKAR
						</span>
					</p>
					<p className="font-sans text-lg animate-pulse">{newName}</p>
				</div>
				<div className="flex flex-col items-start justify-center md:w-1/2 md:p-6">
					<img
						className="object-contain h-64 w-64 rounded-full hover:scale-110 duration-300 border-4"
						src="https://media-exp1.licdn.com/dms/image/C5603AQGfpisXDwbcDg/profile-displayphoto-shrink_800_800/0/1644377364272?e=2147483647&v=beta&t=gTvwwaDlLxZ86YKkFaRY5gBcXTYfumzfj1G_KrVH2fo"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}

const names = ["tony", "elias", "fadi"];

function MyComponent() {
	const [newName, setnewName] = useState("");

	const shuffle = useCallback(() => {
		const index = Math.floor(Math.random() * names.length);
		setnewName(names[index]);
	}, []);

	useEffect(() => {
		const intervalID = setInterval(shuffle, 5000);
		return () => clearInterval(intervalID);
	}, [shuffle]);

	return <p>name:{newName}</p>;
}

export default Home;
