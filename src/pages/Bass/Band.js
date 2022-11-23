function Band() {
	return (
		<div className="flex flex-col justify-center items-center p-2 md:p-4 ">
			<div className="flex flex-col justify-center items-center w-full">
				<img
					class="object-contain md:h-[36rem]"
					src={require("../../assets/play_bass_black_and_white.jpg")}
				/>
				<p className="flex text-3xl text-center py-10 font-serif">
					I enjoy listening to Rock and Metal 🤘
				</p>
			</div>
			<div className="flex flex-col md:flex-row ">
				<div>
					<img
						class="flex flex-col md:flex-row object-contain w-96 md:h-32 p-2"
						src={require("../../assets/metallicaa.png")}
					/>
				</div>
				<div>
					<img
						class="flex flex-col md:flex-row object-contain w-96 md:h-32 p-2"
						src={require("../../assets/megadeth.png")}
					/>
				</div>
			</div>
			<div className="flex flex-col md:flex-row justify-center items-center w-full">
				<div>
					<img
						class="flex flex-col md:flex-row object-contain w-96 md:h-32 p-2"
						src={require("../../assets/rhcp.png")}
					/>
				</div>
				<div>
					<img
						class="flex flex-col md:flex-row object-contain w-96 md:h-32 p-2"
						src={require("../../assets/ledzeppelin.png")}
					/>
				</div>
				<div>
					<img
						class="flex flex-col md:flex-row object-contain w-96 md:h-32 p-2"
						src={require("../../assets/gunsnroses.png")}
					/>
				</div>
			</div>
		</div>
	);
}
export default Band;
