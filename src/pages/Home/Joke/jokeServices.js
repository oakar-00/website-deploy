import axios from "axios";

const getJoke = (lang, safeMode) => {
	if (safeMode) {
		return axios.get(`https://v2.jokeapi.dev/joke/any?lang=${lang}&safe-mode`);
	} else {
		return axios.get(`https://v2.jokeapi.dev/joke/any?lang=${lang}`);
	}
};

export default { getJoke };
