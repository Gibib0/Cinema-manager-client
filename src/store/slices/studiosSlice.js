import { createSlice, nanoid } from "@reduxjs/toolkit";
import {db} from '../../db'

const studiosSlice = createSlice({
	name: 'studios',
	initialState: db.studios,
	reducers: {
		addStudio: {
			reducer(state, action) {
				state.push(action.payload)
				db.studios.push(action.payload)
			},
			prepare(studio) {
				return {
					payload: {
						id: nanoid(),
						...studio
					}
				}
			}
		}
	},

	deleteStudio(state, action) {
		const id = action.payload;
		const index = state.findIndex(s => s.id === id);

		if (index !== -1) {
			state.splice(index, 1);
			db.studios = db.studios.filter(s => s.id !== id);
		}
	},

	updateStudio(state, action) {
		const {id, data} = action.payload
		const studio = state.find(s => s.id === id)

		if (studio) {
			Object.assign(studio, data)
		}
	}
})

export const {
	addStudio, deleteStudio, updateStudio} = studiosSlice.actions

export const studiosReducer = studiosSlice.reducer