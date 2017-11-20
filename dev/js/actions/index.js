export const selectMovie = (movie) => {
	console.log("You clicked on movie: ", movie.title);
	return {
		type: "MOVIE_SELECTED",
		payload: movie
	}
}