import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

function DirectorsItem() {
	const {id} = useParams()

	const director = useSelector(state => 
		state.directorsList.find(d => d.id === id)
	)

	if (!director) return <div>No director</div>

	return (
		<div>
			<h2>{director.name}</h2>
		</div>
	)
}

export default DirectorsItem