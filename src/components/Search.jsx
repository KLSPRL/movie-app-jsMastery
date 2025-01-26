const Search = ({ searchTerm, setSetSearchTerm }) => {
	return (
		<div className="search">
			<div>
				<img
					src="search.svg"
					alt="search"
				/>
				<input
					type="text"
					placeholder="Search through tousands of movies 🎥"
					value={searchTerm}
					onChange={(e) => setSetSearchTerm(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default Search;
