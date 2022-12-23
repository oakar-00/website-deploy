import { useEffect, useState } from "react";

function Education(data) {
	const [title, setTitle] = useState();
	const [major, setMajor] = useState();
	const [course, setCourse] = useState();
	const [image, setImage] = useState();
	const [score, setScore] = useState();

	useEffect(() => {
		setTitle(data.data.title);
		setMajor(data.data.major);
		setCourse(data.data.course);
		setScore(data.data.score);
		setImage(data.data.image);
	});
	console.log(course);
	return (
		<div>
			<div className="flex flex-col md:flex-row my-4 py-4 border-gray-500 border-2 rounded-lg">
				<div className="px-6 py-2 w-full  items-center text-start ">
					<h2 className="flex text-start text-2xl">{title}</h2>
					<h2 className="flex text-lg pb-2">{major}</h2>
					<h2 className="flex text-lg pb-2">{score}</h2>

					<p> {course}</p>
				</div>
				<div className="flex px-6 py-2 items-center justify-center">
					{score ? <iframe src={score} /> : <></>}
					{image ? (
						<img className="object-contain h-48" src={image} />
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	);
}
export default Education;
