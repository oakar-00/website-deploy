import Header from "./Header.js";
import Footer from "./Footer.js";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import proj_details from "./proj.json";
import Experience from "./About/Experience.js";
import { useEffect } from "react";

function Home() {
	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, []);

	return (
		<div className="min-h-screen bg-top-left bg-gradient-to-b from-black to-gray-700 bg-auto ">
			<Header />
			<div className="flex flex-col-reverse md:flex-row md:justify-evenly items-center justify-center">
				<div className="flex flex-col md:items-end justify-center w-1/2 items-start md:p-6 ">
					<p className="font-sans text-8xl pb-2 text-white hover:scale-110 duration-500 font-semibold">
						Hi!
					</p>
					<p className="font-sans text-5xl pb-2">
						I'm{" "}
						<span className="hover:tracking-wider duration-300">
							OAKAR
						</span>
					</p>
					<div className="text-xl">
						<Typewriter
							options={{
								autoStart: true,
								loop: true,
								delay: 100,
								strings: [
									// "FrontEnd Developer",
									// "Machine Learning",
									"Software Developer",
								],
							}}
						/>
					</div>
				</div>
				<div className="flex flex-col items-start justify-center md:w-1/2">
					<img
						className="object-contain h-64 w-64 rounded-full hover:scale-110 duration-300 border-4"
						src={require("../assets/me.jpeg")}
						//src="https://media-exp1.licdn.com/dms/image/C5603AQGfpisXDwbcDg/profile-displayphoto-shrink_800_800/0/1644377364272?e=2147483647&v=beta&t=gTvwwaDlLxZ86YKkFaRY5gBcXTYfumzfj1G_KrVH2fo"
					/>
				</div>
			</div>
			<div className="flex flex-row md:items-center justify-center items-start md:p-6 ">
				<button class=" bg-gradient-to-r from-black to-gray-900 font-semibold mt-6 py-2 px-4 border border-b-4 border-r-4 border-gray-400 rounded">
					<Link
						to={"/about"}
						className="p-2 md:p-0 text-xl font-semibold md:w-1/3 duration-300 hover:scale-110"
					>
						Relevant Experiences
					</Link>
				</button>
			</div>
			{/* <p className="font-sans text-xl pt-8 text-center">My Links</p> */}
			<Footer />
			{/* <div className="flex flex-col-reverse md:flex-row md:justify-evenly items-end justify-center ">
				<p className="font-sans text-lg ">{newName}</p>
			</div> */}

			<div className="flex flex-col md:flex-row items-center justify-center p-24 ">
				<img
					className=" object-cover h-64 w-64 rounded-full hover:scale-110 duration-300 border-4"
					src={require("../assets/bassBnW.jpg")}
				/>
				<div className="flex flex-col md:p-12">
					<p className="text-5xl text-start ">I also play</p>
					<p className="text-9xl text-start font-bold">BASS</p>
					<button class="bg-gradient-to-r from-black to-gray-900 font-semibold mt-6 py-2 px-4 border border-b-4 border-r-4 border-gray-400 rounded">
						<Link
							to={"/bass"}
							className="p-2 md:p-0 font-semibold md:w-1/3 duration-300 hover:scale-110"
						>
							More about BASS stuff
						</Link>
					</button>
				</div>
			</div>
			{/* <div className="flex flex-col w-full justify-evenly items-center px-4 md:px-0">
				<div className="mt-10 w-full md:w-1/2">
					<Link
						to={"/about"}
						className="p-2 md:p-0 font-semibold md:w-1/3 duration-300 hover:scale-110 text-5xl"
					>
						Relevant Experiences
					</Link>
					<h1 className="flex flex-col text-start text-3xl py-4">
						Work Experience
					</h1>
					{[proj_details[1]].map((data) => (
						<div className="text-center">
							<Experience
								data={{
									title: data.title,
									desc: data.desc,
									link: data.link,
									image: data.image,
								}}
							/>
							<p> ... </p>
						</div>
					))}
				</div>
				<div className="py-4 w-full md:w-1/2">
					<h1 className="flex flex-col text-start text-3xl py-4">
						Project Experience
					</h1>
					{[proj_details[0]].map((data) => (
						<div className="text-center">
							<Experience
								data={{
									title: data.title,
									desc: data.desc,
									link: data.link,
									image: data.image,
								}}
							/>
							<p> ... </p>
						</div>
					))}
					<div className="flex w-full justify-center">
						<button class="bg-gradient-to-r from-black to-gray-900 font-semibold mt-6 py-2 px-4 border border-b-4 border-r-4 border-gray-400 rounded">
							<Link
								to={"/about"}
								className="p-2 md:p-0 font-semibold md:w-1/3 duration-300 hover:scale-110"
							>
								Click here for more details
							</Link>
						</button>
					</div>
				</div>
			</div> */}
			{/* <Footer /> */}
		</div>
	);
}
export default Home;
