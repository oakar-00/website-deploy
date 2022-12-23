import "../../assets/bass_color.jpg";
import "../../assets/bombay_burma.jpg";
import "../../assets/wildfires.jpg";
import "../../assets/metallica.jpg";

function Gallery() {
	return (
		<div className="flex flex-col w-full md:flex-row justify-center items-center px-0">
			<div className="flex flex-col p-2 md:p-6 h-[32rem]">
				<img
					className="object-cover h-full w-96 border-2 rounded-md"
					src={require("../../assets/bass_color.jpg")}
				/>
			</div>
			<div className="flex flex-col p-2 md:p-6 items-center h-[32rem]">
				<div className="flex flex-col h-1/2 relative group">
					<img
						className="object-cover p-2 h-full filter group-hover:blur-sm duration-500 border-x-2 border-t-2"
						src={require("../../assets/bombay_burma.jpg")}
					/>
					<div class="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 inset-y-0 flex justify-center items-center text-2xl font-semibold">
						🇲🇲 Bombay Burma 🇲🇲
					</div>
				</div>
				<div className="flex flex-col h-1/2 relative group">
					<img
						className="object-cover p-2 h-full filter group-hover:blur-sm duration-500 border-x-2 border-b-2"
						src={require("../../assets/wildfires.jpg")}
					/>
					<div class="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 inset-y-0 flex justify-center items-center text-2xl font-semibold">
						🔥 WildFires 🔥
					</div>
				</div>
			</div>
			<div className="flex flex-col p-2 md:p-6 h-[32rem]">
				<img
					className="object-cover h-full w-96 border-2 rounded-md"
					src={require("../../assets/metallica.jpg")}
				/>
			</div>
		</div>
	);
}
export default Gallery;
