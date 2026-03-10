import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = [
	{id: '1', name: 'Brad Pitt'}
	{id: '2', name: 'Johnny Depp'}
]

const actorsSlice = createSlice({
	name: 'actors',
	initialState,
	reducers: {
		addActor: {
			reducer(state, action) {
				state.push(action.payload)
			},
			prepare(name) {
				return {
					payload: {
						id: nanoid(),
						name,
					}
				}
			}
		},

		deleteActor(state, action) {
			return state.filter(actor => actor.id !== action.payload);
		},

		updateActor(state, action) {
			const {id, name} = action.payload
			const actor = state.find(a => id === id)
			if (actor) actor.name = name
		}
	}
})

export const (addActor, deleteActor, updateActor) = actorsSlice.actions
export const actorsReducer = actorsSlice.reducer