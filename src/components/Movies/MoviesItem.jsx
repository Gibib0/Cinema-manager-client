import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function MoviesItem() {
	const {id} = useParams()
	const movie = useSelector(state => state.moviesList.find(m => m.id === id))

	if (!movie) return <div>No movie</div>

	return (
		<div>
			<h2>{movie.title}</h2>

			<img src={movie.poster} width='200' />

			<p>Year: {movie.year}</p>
			<p>Genre: {movie.genre}</p>
			<p>Director: {movie.director}</p>
			<p>Studio: {movie.studio}</p>

			<h3>Actors</h3>

			{movie.actors.map((actor, i) => (
				<div key={i}>{actor}</div>
			))}
		</div>
	)
}

export default MoviesItem