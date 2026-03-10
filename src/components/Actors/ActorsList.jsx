import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function ActorsList() {
const actors = useSelector(state => state.actorsList)

	return (
		<div>
			<h2>Actors list</h2>

			{actors.map(actor => (
				<div key={actor.id}>
					<Link to={actor.id}>
						{actor.name}
					</Link>
				</div>
			))}
		</div>
	)
}

export default ActorsList