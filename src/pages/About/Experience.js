import { useEffect, useState } from "react";

function Experience(data) {
	const [title, setTitle] = useState();
	const [role, setRole] = useState();
	const [desc, setDesc] = useState();
	const [image, setImage] = useState();
	const [link, setLink] = useState();
	const [webLink, setWebLink] = useState();

	useEffect(() => {
		setTitle(data.data.title);
		setRole(data.data.role);
		setDesc(data.data.desc);
		setLink(data.data.link);
		setImage(data.data.image);
		setWebLink(data.data.weblink);
	});
	console.log(webLink);
	console.log(title);
	return (
		<div>
			<div className="flex flex-col-reverse md:flex-row my-4 py-4 border-gray-500 border-2 rounded-lg">
				<div className="px-6 py-2 w-full md:w-3/4 items-center">
					<h2 className="flex text-2xl">{title}</h2>
					<h2 className="flex text-lg pb-2">{role}</h2>
					<p> {desc}</p>
					{webLink == "" ? (
						<></>
					) : (
						<a
							href={webLink}
							className="flex pt-4 text-blue-500 hover:underline"
							rel="noopener noreferrer"
							target="_blank"
						>
							Website Link
						</a>
					)}
				</div>
				<div className="flex px-6 py-2 items-center justify-center">
					{link ? <iframe src={link} /> : <></>}
					{image ? <img className="object-contain h-48" src={image} /> : <></>}
				</div>
			</div>
		</div>
	);
}
export default Experience;
