import { useState } from "react";

const Weather = (props) => {
	const [textField, setTextField] = useState("");

	const textFieldHandler = (event) => {
		console.log(event.target.value);
		setTextField(event.target.value);
	};
	return (
		<div className="flex flex-col justify-center items-center">
			<input
				type="text"
				value={textField}
				placeholder="Search for a country"
				onChange={textFieldHandler}
			/>
		</div>
	);
};

export default Weather;
