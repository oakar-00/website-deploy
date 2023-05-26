import { useState } from "react";
import { Link } from "react-router-dom";

const Me = (props) => {
	const [showStudy, setShowStudy] = useState(false);
	const [showInterest, setShowInterest] = useState(false);
	const [showLanguages, setShowLanguages] = useState(false);
	const [showHobbies, setShowHobbies] = useState(false);
	return (
		<>
			<div className="flex flex-col justify-center items-center pt-6 ">
				{/* <p className="font-sans text-3xl pb-6 duration-500 font-semibold">
					About me
				</p> */}
				<div className="flex flex-col md:flex-row md:justify-evenly items-center justify-center space-x-6">
					<div>
						<img
							className="flex object-cover h-48 w-48 rounded-full border-2 justify-center"
							src={require("../../assets/comSci.jpg")}
							alt="image_not_available"
						/>
					</div>
					<div className="text-start">
						<span className="font-bold">Computer Science & Design</span> student{" "}
						<br />
						from Singapore University of Technology and Design.
						<br />
						<br />
						Interested in <br />
						<span className="font-bold">Web Software Development</span> <br />
						<span className="font-bold">Machine Learning</span> <br /> and
						<span className="font-bold"> Artificial Intelligence</span>
					</div>
				</div>
				<div className="flex flex-col text-md w-full justify-center items-center text-center p-4">
					<p>
						Experienced in Python, Java, javascript, ReactJs, HTML, CSS,
						tailwind, Dart, Flutter and SQL. <br />I am also familiar with
						features from the Amazon Web Services as well.
						<br />
					</p>
				</div>
				<div className="flex flex-row justify-center space-x-4">
					<Link
						to={"/about"}
						state={{ settings: props.settings }}
						className="text-2xl text-start "
					>
						<button className={props.settings.button}>
							<p>{"Work Experience"}</p>
						</button>
					</Link>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center pt-6 ">
				<p className="font-sans text-xl pb-4 duration-500 font-semibold">
					In my spare time, I like to...
				</p>
				<div className="flex flex-col md:flex-row md:space-x-10">
					<Link
						to={"/bass"}
						state={{ settings: props.settings }}
						className="text-2xl text-start "
					>
						<div className="flex flex-col justify-center items-center">
							<img
								className=" object-cover h-32 w-32 rounded-full border-2"
								src={require("../../assets/bassBnW.jpg")}
							/>
							<div className="flex flex-col md:p-2">
								PLAY <br />
								<p className="text-5xl text-start font-bold">BASS</p>
							</div>
						</div>
					</Link>

					<a
						href={"https://www.youtube.com/channel/UCVqugAbAnVm6sLYBuOBnxOw"}
						className="text-2xl text-start "
					>
						<div className="flex flex-col justify-center items-center p-2">
							<img
								className=" object-cover h-32 w-32 rounded-full border-2"
								src={require("../../assets/arctic.png")}
							/>
							<div className="flex flex-col md:p-2">
								MAKE YOUTUBE <br />
								<p className="text-5xl text-start font-bold">VIDEOS</p>
							</div>
						</div>
					</a>
				</div>
			</div>
		</>
	);
};

export default Me;
