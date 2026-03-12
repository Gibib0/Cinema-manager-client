import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

function StudiosItem() {
	const {id} = useParams()

	const studio = useSelector(state => 
		state.actorsList.find(s => s.id === id)
	)

	if (!studio) return <div>No studio</div>

	return (
		<div>
			<h2>{studio.name}</h2>
		</div>
	)
}

export default StudiosItem