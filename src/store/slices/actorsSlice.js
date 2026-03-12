import { createSlice, nanoid } from "@reduxjs/toolkit";
import {db} from '../../db'

const actorsSlice = createSlice({
	name: 'actors',
	initialState: db.actors,
	reducers: {
		addActor: {
			reducer(state, action) {
				state.push(action.payload)
				db.actors.push(action.payload)
			},
			prepare(actor) {
				return {
					payload: {
						id: nanoid(),
						...actor
					}
				}
			}
		}
	},

	deleteActor(state, action) {
		const id = action.payload;
		const index = state.findIndex(a => a.id === id);

		if (index !== -1) {
			state.splice(index, 1);
			db.actors = db.actors.filter(a => a.id !== id);
		}
	},

	updateActor(state, action) {
		const {id, data} = action.payload
		const actor = state.find(a => a.id === id)

		if (actor) {
			Object.assign(actor, data)
		}
	}
})

export const {
	addActor, deleteActor, updateActor} = actorsSlice.actions

export const actorsReducer = actorsSlice.reducer