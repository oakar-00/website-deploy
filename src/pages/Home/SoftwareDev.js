import { Link, useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";

const SoftwareDev = () => {
	return (
		<>
			<div className="flex flex-col-reverse md:flex-row md:justify-evenly items-center justify-center pt-4">
				<div className="flex flex-col md:items-end justify-center w-1/2 items-start md:p-6 ">
					<p className="font-sans text-8xl pb-2 hover:scale-110 duration-500 font-semibold">
						Hi!
					</p>
					<p className="font-sans text-5xl pb-2">
						I'm <span className="hover:tracking-wider duration-300">OAKAR</span>
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
						src={require("../../assets/me.jpeg")}
						alt="me"
					/>
				</div>
			</div>
		</>
	);
};

export default SoftwareDev;
