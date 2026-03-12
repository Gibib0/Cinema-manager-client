import { createSlice, nanoid } from "@reduxjs/toolkit";
import {db} from '../../db'

const moviesSlice = createSlice({
	name: 'movies',
	initialState: db.movies,
	reducers: {
		addMovie: {
			reducer(state, action) {
				state.push(action.payload)
				db.movies.push(action.payload)
			},
			prepare(movie) {
				return {
					payload: {
						id: nanoid(),
						...movie
					}
				}
			}
		}
	},

	deleteMovie(state, action) {
    const id = action.payload;
    const index = state.findIndex(m => m.id === id);

    if (index !== -1) {
      state.splice(index, 1);
      db.movies = db.movies.filter(m => m.id !== id);
    }
  },

	updateMovie(state, action) {
		const {id, data} = action.payload
		const movie = state.find(m => m.id === id)

		if (movie) {
			Object.assign(movie, data)
		}
	}
})

export const {
	addMovie, deleteMovie, updateMovie} = moviesSlice.actions

export const moviesReducer = moviesSlice.reducer