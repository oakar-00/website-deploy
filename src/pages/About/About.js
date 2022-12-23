import Header from "../Header";
import Footer from "../Footer";
import Intro from "./Intro";
import Experience from "./Experience";
import Education from "./Education";
import proj_details from "./proj.json";
import work_details from "./work.json";
import edu_details from "./edu.json";
import { useEffect } from "react";

function About() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="min-h-screen bg-top-left bg-gradient-to-b from-black to-gray-700 bg-auto">
			<Header />
			<div className="flex flex-col justify-evenly item-center p-6">
				<div className="flex flex-col w-full justify-evenly items-center ">
					<img
						class="object-contain h-64 md:h-96 rounded-full border-4 hover:-translate-y-4 duration-200"
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
					<div className="py-4 w-1/2 border-b-2"></div>
					<div className="py-4 w-full md:w-1/2">
						{/* <h1 className="flex flex-col text-start text-3xl py-4">
							Education
						</h1>
						{edu_details.map((data) => (
							<Education
								data={{
									title: data.title,
									major: data.major,
									course: data.course,
									score: data.link,
									image: data.image,
								}}
							/>
						))} */}
						<h1 className="flex flex-col text-start text-3xl py-4">
							Work Experience
						</h1>
						{work_details.map((data) => (
							<Experience
								data={{
									title: data.title,
									role: data.role,
									desc: data.desc,
									link: data.link,
									image: data.image,
								}}
							/>
						))}
					</div>
					<div className="py-4 w-full md:w-1/2">
						<h1 className="flex flex-col text-start text-3xl py-4">
							Project Experience
						</h1>
						{proj_details.map((data) => (
							<Experience
								data={{
									title: data.title,
									desc: data.desc,
									link: data.link,
								}}
							/>
						))}
					</div>
					{/* <Intro /> */}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default About;
