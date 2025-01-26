import { useState, useEffect } from "react";
import Search from "./components/search.jsx";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${API_KEY}`,
	},
};

const App = () => {
	const [searchTerm, setSetsearchTerm] = useState("");

	useEffect(() => {}, []);

	return (
		<main>
			<div className="pattern" />

			<div className="wrapper">
				<header>
					<h1 id="logo">netfilms</h1>
					<img
						src="./hero.png"
						alt="hero"
					/>
					<h1>
						Find <span className="text-gradient">Movies</span> You&apos;ll Enjoy
						Without the Hassle
					</h1>

					<Search
						searchTerm={searchTerm}
						setSetsearchTerm={setSetsearchTerm}
					/>
				</header>
			</div>
		</main>
	);
};

export default App;
