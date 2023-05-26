import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Intro from "./Intro";
import Experience from "./Experience";
import Education from "./Education";
import AboutMe from "./AboutMe";
import proj_details from "./proj.json";
import work_details from "./work.json";
import edu_details from "./edu.json";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

function About() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const location = useLocation();
	const [abtMe, setAbtMe] = useState(false);
	const [edu, setEdu] = useState(false);
	const [workExp, setWorkExp] = useState(false);
	const [projExp, setProjExp] = useState(false);

	return (
		<>
			<div className={location.state.settings.bg}>
				<Header />
				<div className="flex flex-col justify-evenly item-center p-6">
					<div className="flex flex-col w-full justify-evenly items-center ">
						<img
							class="object-contain h-64 md:h-64 rounded-full border-4 hover:-translate-y-4 duration-200"
							src={require("../../assets/me.jpeg")}
							// src="https://media-exp1.licdn.com/dms/image/C5603AQGfpisXDwbcDg/profile-displayphoto-shrink_800_800/0/1644377364272?e=2147483647&v=beta&t=gTvwwaDlLxZ86YKkFaRY5gBcXTYfumzfj1G_KrVH2fo"
						/>
						<div className="py-4 w-full">
							<p className="flex flex-col text-3xl text-center py-2">
								Computer Science and Design
							</p>
							<p className="flex flex-col text-lg text-center">
								Singapore University of Technology and Design
							</p>
						</div>

						<div className="flex flex-col md:flex-row items-center justify-center md:space-x-10">
							<button
								className={location.state.settings.button}
								onClick={() => {
									setAbtMe(!abtMe);
									setEdu(false);
									setProjExp(false);
									setWorkExp(false);
								}}
							>
								<p>About me </p>
							</button>
							<button
								className={location.state.settings.button}
								onClick={() => {
									setAbtMe(false);
									setEdu(!edu);
									setProjExp(false);
									setWorkExp(false);
								}}
							>
								<p>Education</p>
							</button>
							<button
								className={location.state.settings.button}
								onClick={() => {
									setAbtMe(false);
									setEdu(false);
									setProjExp(false);
									setWorkExp(!workExp);
								}}
							>
								<p>Work Experience</p>
							</button>
							<button
								className={location.state.settings.button}
								onClick={() => {
									setAbtMe(false);
									setEdu(false);
									setProjExp(!projExp);
									setWorkExp(false);
								}}
							>
								<p>Project Experience</p>
							</button>
							<Link
								to={"/"}
								state={{ settings: location.state.settings.button }}
							>
								<button className={location.state.settings.button}>
									<AiFillHome />
								</button>
							</Link>
						</div>
						<div className="w-1/2 border-b-2">
							<div className="w-full">
								<div className="mt-8 w-full">
									{abtMe ? <AboutMe /> : <></>}

									{edu ? (
										edu_details.map((data) => (
											<Education
												data={{
													title: data.title,
													major: data.major,
													course: data.course,
													year: data.year,
													image: data.image,
												}}
											/>
										))
									) : (
										<></>
									)}

									{workExp ? (
										work_details.map((data) => (
											<Experience
												data={{
													title: data.title,
													role: data.role,
													desc: data.desc,
													link: data.link,
													image: data.image,
												}}
											/>
										))
									) : (
										<></>
									)}
									{projExp ? (
										proj_details.map((data) => (
											<Experience
												data={{
													title: data.title,
													desc: data.desc,
													link: data.link,
												}}
											/>
										))
									) : (
										<></>
									)}
								</div>
								{/* <div className="py-4 w-full md:w-1/2">
							<h1 className="flex flex-col text-start text-3xl py-4">
								Project Experience
							</h1> */}
							</div>
						</div>

						{/* <Intro /> */}
					</div>
				</div>

				<Footer />
			</div>
		</>
	);
}

export default About;
