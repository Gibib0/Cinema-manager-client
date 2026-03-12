import { createSlice, nanoid } from "@reduxjs/toolkit";
import {db} from '../../db'

const directorsSlice = createSlice({
	name: 'directors',
	initialState: db.directors,
	reducers: {
		addDirector: {
			reducer(state, action) {
				state.push(action.payload)
				db.directors.push(action.payload)
			},
			prepare(director) {
				return {
					payload: {
						id: nanoid(),
						...director
					}
				}
			}
		}
	},

	deleteDirector(state, action) {
		const id = action.payload;
		const index = state.findIndex(d => d.id === id);

		if (index !== -1) {
			state.splice(index, 1);
			db.directors = db.directors.filter(d => d.id !== id);
		}
	},

	updateDirector(state, action) {
		const {id, data} = action.payload
		const director = state.find(d => d.id === id)

		if (director) {
			Object.assign(director, data)
		}
	}
})

export const {
	addDirector, deleteDirector, updateDirector} = directorsSlice.actions

export const directorsReducer = directorsSlice.reducer