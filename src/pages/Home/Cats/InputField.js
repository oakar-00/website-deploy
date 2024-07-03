import { useState } from "react";

const InputField = (props) => {
	const [code, setCode] = useState("");
	const codeChangeHandler = (event) => {
		setCode(event);
	};
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="text-lg focus:border-fuchsia-600 focus:ring-pink-500 focus:outline-none">
				<input
					className="rounded-full h-10 focus:outline-fuchsia-600 focus:outline text-black p-4"
					value={code}
					onChange={(e) => codeChangeHandler(e.target.value)}
				></input>
			</div>
		</div>
	);
};

export default InputField;
