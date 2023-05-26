import { useState } from "react";
import Country from "./Country.js";

const Search = (props) => {
	const [searchText, setSearchText] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [selectOne, setSelectOne] = useState();

	const searchChangehandler = (event) => {
		console.log(event.target.value);
		setSearchText(event.target.value);
		setSelectOne();

		const tem = [];
		props.countries.forEach((country) => {
			if (
				country.name.common
					.toLowerCase()
					.includes(event.target.value.toLowerCase())
			) {
				tem.push(country);
			}
		});
		console.log(tem.length);
		console.log(tem);

		setSearchResults(tem);
	};

	const showCountry = (country) => {
		setSearchResults([]);
		setSelectOne(country);
		return;
	};

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="pt-4 text-lg focus:border-fuchsia-600 focus:ring-pink-500 focus:outline-none">
				<input
					className="rounded-full h-10 focus:outline-fuchsia-600 focus:outline text-black p-4"
					value={searchText}
					onChange={searchChangehandler}
				></input>
			</div>
			<div>
				{searchText.length === 0 ? (
					<p className="text-sm">search for a country</p>
				) : searchResults.length === 1 ? (
					<Country country={searchResults[0]} />
				) : searchResults.length > 10 ? (
					<p className="text-sm text-red-500">
						Too many matches, specify another filter
					</p>
				) : (
					searchResults.map((res) => (
						<div className="hover:text-fuchsia-600 hover:scale-125 duration-200">
							<button onClick={() => showCountry(res)}>
								{`${res.name.common}`}{" "}
							</button>
						</div>
					))
				)}
				{selectOne ? <Country country={selectOne} /> : <></>}
			</div>
		</div>
	);
};

export default Search;
