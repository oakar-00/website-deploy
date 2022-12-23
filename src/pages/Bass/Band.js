function Band() {
	return (
		<div className="flex flex-col justify-center items-center py-2 md:p-4 ">
			<div className="flex flex-col justify-center items-center w-full">
				<img
					class="object-contain md:h-[36rem] border-2"
					src={require("../../assets/bassBnW.jpg")}
				/>
				<p className="flex text-3xl text-center py-10 font-serif">
					I enjoy listening to Rock and Metal 🤘
				</p>
			</div>
			<div className="flex flex-col md:flex-row m-2">
				<img
					class="flex flex-col md:flex-row object-contain w-screen md:w-96 md:h-32 md:p-0 p-6"
					src={require("../../assets/metallicaa.png")}
				/>
				<img
					class="flex flex-col md:flex-row object-contain w-screen md:w-96 md:h-32 md:p-0 p-6"
					src={require("../../assets/megadeth.png")}
				/>
			</div>
			<div className="flex flex-col md:flex-row justify-center items-center w-full m-2">
				<img
					class="flex flex-col md:flex-row object-contain w-screen md:w-96 md:h-32 md:p-0 p-6"
					src={require("../../assets/rhcp.png")}
				/>

				<img
					class="flex flex-col md:flex-row object-contain w-screen md:w-96 md:h-32 md:p-0 p-6"
					src={require("../../assets/ledzeppelin.png")}
				/>

				<img
					class="flex flex-col md:flex-row object-contain w-screen md:w-96 md:h-32 md:p-0 p-6"
					src={require("../../assets/gunsnroses.png")}
				/>
			</div>
		</div>
	);
}
export default Band;
