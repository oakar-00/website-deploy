import { useEffect, useState } from "react";

function Education(data) {
	const [title, setTitle] = useState();
	const [major, setMajor] = useState();
	const [course, setCourse] = useState();
	const [image, setImage] = useState();
	const [year, setYear] = useState();

	useEffect(() => {
		setTitle(data.data.title);
		setMajor(data.data.major);
		setCourse(data.data.course);
		setYear(data.data.year);
		setImage(data.data.image);
	});
	return (
		<div>
			<div className="flex flex-col-reverse md:flex-row my-4 pt-4 border-gray-500 border-2 rounded-lg">
				<div className="px-6 pt-2 w-full  items-start text-start ">
					<h2 className="flex text-start text-2xl">{title}</h2>
					<h2 className="flex text-lg italic pb-2">
						{major}, {year}
					</h2>
					<h2 className="flex text-md font-bold">Courses:</h2>
					<p className="flex text-sm">{course}</p>
				</div>
				<div className="flex px-6 py-2 items-center justify-center">
					{/* {score ? <iframe src={score} /> : <></>} */}
					{image ? <img className="object-contain h-48" src={image} /> : <></>}
				</div>
			</div>
		</div>
	);
}
export default Education;
