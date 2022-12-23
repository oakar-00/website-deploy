import Header from "../Header";
import Footer from "../Footer";
import "../../assets/play_bass_black_and_white.jpg";
import Band from "./Band";
import Gallery from "./Gallery";
import { useEffect } from "react";

function Bass() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		// <div className="min-h-screen bg-bottom bg-bass_black_and_white bg-cover">
		<div className="min-h-screen bg-top-left bg-gradient-to-b from-black to-gray-700 bg-auto">
			<Header />
			<div className="flex flex-col justify-evenly item-center">
				<div className="flex flex-col w-screen justify-evenly items-center ">
					<Band />

					{/* <img
						class="object-cover h-[32rem] p-4"
						src={require("../../assets/play_bass_black_and_white.jpg")}
					/> */}
					<p className="text-center text-5xl font-serif p-6 md:p-10 motion-safe:animate-fadeIn">
						<span className="text-pink-500">LOVE</span> these guys!{" "}
						{"<"}3{" "}
					</p>
					<Gallery />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Bass;
