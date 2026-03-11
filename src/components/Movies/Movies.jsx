import { Routes, Route } from "react-router-dom"
// ==============================
import MoviesList from './MoviesList'
import MoviesItem from './MoviesItem'

function Movies() {
	return (
		<Routes>
			<Route path="/" element={<MoviesList />} />
			<Route path=":id" element={<MoviesItem />} />
			<Route path="new" element={<MoviesList />} />
			<Route path="mew/:id" element={<MoviesList />} />
		</Routes>
	)
}

export default Movies