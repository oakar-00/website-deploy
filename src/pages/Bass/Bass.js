import Header from "../Header";
import Footer from "../Footer";
import "../../assets/play_bass_black_and_white.jpg";
import Start from "./Start";
import Gallery from "./Gallery";

function Bass() {
	return (
		// <div className="min-h-screen bg-bottom bg-bass_black_and_white bg-cover">
		<div className="min-h-screen bg-top-left bg-gradient-to-b from-black to-gray-700 bg-auto">
			<Header />
			<div className="flex flex-col justify-evenly item-center">
				<div className="flex flex-col w-full justify-evenly items-center ">
					<Start />
					{/* <img
						class="object-cover h-[32rem] p-4"
						src={require("../../assets/play_bass_black_and_white.jpg")}
					/> */}
					<p className="text-center text-5xl font-serif p-2 md:p-6 motion-safe:animate-fadeIn">
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
