function Intro() {
	return (
		<div className="flex flex-col-reverse md:flex-row justify-center items-center ">
			<div className="flex flex-col justify-center items-bottom md:items-start px-4 md:px-12 font-serif w-full md:w-3/4">
				<div className="py-4 w-full">
					<p className="flex flex-col text-3xl text-center md:text-end py-2">
						Computer Science and Design
					</p>
					<p className="flex flex-col text-lg text-center md:text-end py-2">
						Singapore University of Technology and Design
					</p>
				</div>
				<div className="py-4 w-full">
					<p className="flex flex-col text-2xl text-center md:text-end py-2">
						Software Development Intern
					</p>
					<a
						className="flex flex-col text-lg items-center md:items-end py-0"
						href="https://www.linkedin.com/company/kinexcs/"
					>
						@Kinexcs
					</a>
				</div>
				<div className="py-4 w-full">
					<p className="flex flex-col text-2xl text-center md:text-end py-2">
						Skills:
					</p>
					<p className="flex flex-col text-lg text-center md:text-end py-0">
						Python, Java, Dart, Flutter, AWS
					</p>
					<p className="flex flex-col text-lg text-center md:text-end py-0">
						Javascript, React, CSS, HTML, Tailwind
					</p>
				</div>
			</div>

			<img
				class="object-contain h-96 rounded-lg"
				src="https://media-exp1.licdn.com/dms/image/C5603AQGfpisXDwbcDg/profile-displayphoto-shrink_800_800/0/1644377364272?e=2147483647&v=beta&t=gTvwwaDlLxZ86YKkFaRY5gBcXTYfumzfj1G_KrVH2fo"
			/>
		</div>
	);
}

export default Intro;
