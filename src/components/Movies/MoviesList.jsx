import { useSelector, useDispatch } from "react-redux";
import { deleteMovie } from "../../store/slices/moviesSlice";
import { Link } from "react-router-dom";
// =====================
import AddIcon from '@mui/icons-material/Add'
import { Button } from "@mui/material";

function MoviesList() {
	const movies = useSelector(state => state.moviesList)
	const dispatch = useDispatch()

	return (
		<div>
			<Link to='/movies/new'>
				<Button startIcon={<AddIcon />}>ADD NEW MOVIE</Button>
			</Link>

			{movies.map(movie => (
				<div key={movie.id}>
					<Link to={`/movies/${movie.id}`}>
						{movie.title}
					</Link>

					<Link to={`/movies/new/${movie.id}`}>
						Edit
					</Link>

					<Button onClick={() => dispatch(deleteMovie(movie.id))}>
						Delete
					</Button>
				</div>
			))}
		</div>
	)
}

export default MoviesList