import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

function Footer() {
	return (
		<div className="flex flex-row justify-center items-center">
			<div className="flex flex-row justify-evenly items-center mt-0 md:w-2/4 w-full  p-4 ">
				<a href="mailto:oakkarrr00@gmail.com">
					{" "}
					<AiFillMail size={70} />
				</a>
				<a href="https://github.com/oakar-00">
					{" "}
					<AiFillGithub size={70} />
				</a>
				<a href="https://www.linkedin.com/in/oakarmin/">
					{" "}
					<AiFillLinkedin size={70} />
				</a>
			</div>
		</div>
	);
}

export default Footer;
