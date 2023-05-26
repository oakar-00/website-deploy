const AboutMe = () => {
	return (
		<>
			<div className="flex flex-col md:flex-row md:justify-evenly items-center justify-center space-x-6">
				{/* <h1 className="flex flex-col text-start text-3xl py-4">About Me</h1> */}
				<div>
					<img
						className="flex object-cover h-48 w-48 rounded-full border-2 justify-center"
						src={require("../../assets/comSci.jpg")}
						alt="image_not_available"
					/>
				</div>
				<div className="text-center md:text-start">
					<span className="font-bold">Computer Science & Design</span> student{" "}
					<br />
					from Singapore University of Technology and Design.
					<br />
					<br />
					Interested in <br />
					<span className="font-bold">Web Software Development</span> <br />
					<span className="font-bold">Machine Learning</span> <br /> and
					<span className="font-bold"> Artificial Intelligence</span>
				</div>
			</div>
			<div className="flex flex-col text-md w-full justify-center items-center text-center p-4">
				<p>
					Experienced in Python, Java, javascript, ReactJs, HTML, CSS, tailwind,
					Dart, Flutter and SQL. <br />I am also familiar with features from the
					Amazon Web Services as well.
					<br />
				</p>
			</div>
		</>
	);
};
export default AboutMe;
