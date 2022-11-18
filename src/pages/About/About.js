import Header from "../Header";
import Footer from "../Footer";
import Intro from "./Intro";

function About() {
	return (
		<div className="min-h-screen bg-top-left bg-gradient-to-b from-black to-gray-700 bg-auto">
			<Header />
			<div className="flex flex-col justify-evenly item-center m-6">
				<div className="flex flex-col w-full justify-evenly items-center ">
					<Intro />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default About;
