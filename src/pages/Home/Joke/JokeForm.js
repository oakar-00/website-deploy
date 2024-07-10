import { useState } from "react";
import JokeResponse from "./JokeResponse";
import jokeServices from "./jokeServices";
import OnePart from "./OnePart";
import TwoPart from "./TwoPart";

const JokeForm = (props) => {
	const [showJoke, setShowJoke] = useState(false);
	const [setup, setSetUp] = useState("");
	const [delivery, setDelivery] = useState("");
	const [joke, setJoke] = useState("");
	const [punchline, setPunchline] = useState(false);

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="pt-4 text-lg focus:border-fuchsia-600 focus:ring-pink-500 focus:outline-none">
				<p>What kind of joke you want?</p>
			</div>
			<div className="flex flex-row space-x-4 items-center text-center">
				<p>Language:</p>
				<div class="flex items-center">
					<input
						type="radio"
						value="en"
						name="jokeLang"
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					/>
					<label for="default-radio-1" class="ml-2 text-sm font-medium">
						English
					</label>
				</div>
				<div class="flex items-center">
					<input
						type="radio"
						value="de"
						name="jokeLang"
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					/>
					<label for="default-radio-2" class="ml-2 text-sm font-medium">
						German
					</label>
				</div>
			</div>
			<div class="flex items-center mt-2">
				<input
					type="checkbox"
					name="safeMode"
					class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
				/>
				<label for="link-checkbox" class="ml-2 text-sm font-medium">
					Safe Mode
				</label>
			</div>

			<button
				className={props.settings.button}
				type="submit"
				onClick={() => {
					const lang = document.querySelector(
						'input[name="jokeLang"]:checked'
					).value;
					const safeMode = document.querySelector(
						'input[name="safeMode"]'
					).checked;
					setShowJoke(true);
					setPunchline(false);
					jokeServices.getJoke(lang, safeMode).then((response) => {
						// console.log(response.data);
						setSetUp(response.data.setup);
						setDelivery(response.data.delivery);
						setJoke(response.data.joke);
					});
				}}
			>
				<p className="text-sm">Tell me a joke</p>
			</button>
			<p className="text-xs">jokes might be nsfw</p>
			<p className="pt-4 text-xs">
				Made using:{" "}
				<a
					className="hover:underline"
					href="https://sv443.net/jokeapi/v2/"
					rel="noopener noreferrer"
					target="_blank"
				>
					https://sv443.net/jokeapi/v2/
				</a>
			</p>
			<div>
				{joke ? (
					<div className="m-4">
						<p className="italic">{joke}</p>
					</div>
				) : (
					<div className="text-center space-y-4 mt-4 mb-8">
						<p className="italic">{setup}</p>
						{punchline ? (
							<p className="italic ">{delivery}</p>
						) : setup ? (
							<button
								className={props.settings.button}
								type="submit"
								onClick={() => {
									setPunchline(true);
								}}
							>
								<p className="text-sm">Punchline</p>
							</button>
						) : (
							<></>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default JokeForm;
