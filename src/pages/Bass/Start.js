import Band from "./Band";

function Start() {
	return (
		<div className="flex flex-col md:flex-row justify-center items-center p-2 md:p-4 w-full">
			{/* <div className="flex flex-row justify-center items-center"> */}
			<img
				class="object-contain md:h-[32rem] w-full"
				src={require("../../assets/play_bass_black_and_white.jpg")}
			/>
			<Band />
		</div>
	);
}

export default Start;
