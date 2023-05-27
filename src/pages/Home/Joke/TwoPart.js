import { useState } from "react";

const TwoPart = (props) => {
	const [punchline, setPunchline] = useState(props.punchline);
	return (
		<div className="text-center space-y-2">
			<p className="italic mt-4">{props.setup}</p>
			{punchline ? (
				<p className="italic mt-4">{props.delivery}</p>
			) : (
				<button
					className={props.settings.button}
					type="submit"
					onClick={() => {
						setPunchline(true);
					}}
				>
					<p className="text-sm">Punchline</p>
				</button>
			)}
		</div>
	);
};

export default TwoPart;
