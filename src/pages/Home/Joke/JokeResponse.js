import jokeServices from "./jokeServices";
import { useState } from "react";

const JokeResponse = () => {
	const [setup, setSetUp] = useState("");
	const [delivery, setDelivery] = useState("");
	const [joke, setJoke] = useState("");
	const api = jokeServices.getJoke().then((response) => {
		console.log(response.data);
		setSetUp(response.data.setup);
		setDelivery(response.data.delivery);
		setJoke(response.data.joke);
	});
	return (
		<div>
			<p>
				{joke}, {setup}, {delivery}
			</p>
		</div>
	);
};

export default JokeResponse;
