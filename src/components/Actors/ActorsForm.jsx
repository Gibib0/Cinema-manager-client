import { useState } from "react"
import { useDispatch } from "react-redux"
import {addActor} from '../../store/slices/actorsSlice'

function ActorsForm() {
	const [name, setName] = useState('')
	const dispatch = useDispatch()

	const handleSave = () => {
		if (!name) return
		dispatch(addActor(name))
		setName('')
	}

	return (
		<div>ActorsForm</div>
	)
}

export default ActorsForm