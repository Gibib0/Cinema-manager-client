import { useSelector, useDispatch } from "react-redux";
import { deleteActor } from "../../store/slices/actorsSlice";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, Box, Typography} from "@mui/material";

function ActorsList() {
	const actors = useSelector(state => state.actorsList);
	const dispatch = useDispatch();
	
	return (
		<Box sx={{ p: 3 }}>
			<Box sx={{ mb: 4 }}>
				<Button
					variant="contained"
					color="success"
					startIcon={<AddIcon />}
					component={Link}
					to="/actors/new"
					size="large"
				>
					ADD NEW ACTOR
				</Button>
			</Box>

			{actors.length === 0 ? (
				<Typography variant="body1" color="text.secondary" align="center">
					No actors yet.
				</Typography>
			) : (
				<List sx={{ bgcolor: 'background.paper', borderRadius: 1, boxShadow: 1 }}>
					{actors.map(actor => (
						<ListItem
							key={actor.id}
							divider
							sx={{
								'&:last-child': { borderBottom: 'none' }
							}}
						>
							<ListItemText
								primary={
									<Link
										to={`/actors/${actor.id}`}
										style={{
											textDecoration: 'none',
											color: 'inherit',
											fontWeight: 500
										}}
									>
										{actor.title}
									</Link>
								}
							/>

							<ListItemSecondaryAction>
								<IconButton
									edge="end"
									aria-label="edit"
									component={Link}
									to={`/actors/edit/${actor.id}`}
									color="primary"
									sx={{ mr: 1 }}
								>
									<EditIcon />
								</IconButton>

								<IconButton
									edge="end"
									aria-label="delete"
									onClick={() => dispatch(deleteActor(actor.id))}
									color="error"
								>
									<DeleteIcon />
								</IconButton>
							</ListItemSecondaryAction>
						</ListItem>
					))}
				</List>
			)}
		</Box>
	);
}

export default ActorsList;