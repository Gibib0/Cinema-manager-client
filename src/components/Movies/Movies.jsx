import { Routes, Route } from "react-router-dom"
// ==============================
import MoviesList from './MoviesList'
import MoviesItem from './MoviesItem'
import MoviesForm from './MoviesForm'

function Movies() {
	return (
		<Routes>
			<Route path="/" element={<MoviesList />} />
			<Route path=":id" element={<MoviesItem />} />
			<Route path="new" element={<MoviesForm />} />
			<Route path="edit/:id" element={<MoviesForm />} />
		</Routes>
	)
}

export default Movies