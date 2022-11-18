function Start() {
	return (
		<div className="flex flex-col md:flex-row justify-center items-center p-2 md:p-10 ">
			<img
				class="object-contain h-[32rem]"
				src={require("../../assets/play_bass_black_and_white.jpg")}
			/>
			<div className="flex flex-col justify-center items-center md:items-start p-20 font-serif">
				<p className="flex text-3xl text-center py-2">
					I enjoy listening to Rock and Metal
				</p>
				<p className="flex text-xl text-center py-4">
					Favourite bands:{" "}
				</p>
				<p className="text-xl py-2  px-4">Metallica</p>
				<p className="text-xl py-2  px-4">Megadeth</p>
				<p className="text-xl py-2 px-4">Red Hot Chilli Peppers</p>
				{/* <li className="font-bold text-5xl hover:scale-125 duration-300">
					Metallica
				</li> */}
			</div>
		</div>
	);
}

export default Start;
