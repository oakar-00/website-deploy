import { Link } from "react-router-dom";

function Header(props) {
	return (
		<div className={props.darkMode ? "font-mono text-white" : "font-mono"}>
			<br />
			<Link to={"/"}>
				<h1 className="p-0 tracking-widest font-semibold text-center text-5xl duration-300 hover:tracking-[.7em]">
					OAKAR
				</h1>
			</Link>
			<br />
			{/* <div className="flex justify-center items-center pb-6">
				<div className="font-sans flex md:flex-row flex-col justify-evenly items-center pb-4 pt-2 w-3/4 border-b-2">
					<Link
						to={"/about"}
						className="p-2 md:p-0 font-semibold md:w-1/3 text-center duration-300 hover:scale-110"
					>
						🤓🤓🤓
					</Link>
					<Link
						to={"/bass"}
						className="p-2 md:p-0 font-semibold md:w-1/3 text-center duration-300 hover:scale-110"
					>
						🎸🎸🎸
					</Link>
					<Link
						to="/finland"
						className="p-0 font-semibold md:w-1/3 text-center duration-300 hover:scale-110"
					>
						Exchange Trip to Finland
					</Link>
				</div>
			</div> */}
		</div>
	);
}

export default Header;
