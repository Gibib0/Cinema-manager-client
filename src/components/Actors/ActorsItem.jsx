import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

function ActorsItem() {
	const {id} = useParams()

	const actor = useSelector(state => 
		state.actorsList.find(a => a.id === id)
	)

	if (!actor) return <div>No actor</div>

	return (
		<div>
			<h2>{actor.name}</h2>
		</div>
	)
}

export default ActorsItem