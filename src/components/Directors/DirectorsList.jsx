import { useSelector, useDispatch } from "react-redux";
import { deleteDirector } from "../../store/slices/directorsSlice";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, Box, Typography} from "@mui/material";

function DirectorsList() {
	const directors = useSelector(state => state.directorsList);
	const dispatch = useDispatch();
	
	return (
		<Box sx={{ p: 3 }}>
			<Box sx={{ mb: 4 }}>
				<Button
					variant="contained"
					color="success"
					startIcon={<AddIcon />}
					component={Link}
					to="/directors/new"
					size="large"
				>
					ADD NEW DIRECTOR
				</Button>
			</Box>

			{directors.length === 0 ? (
				<Typography variant="body1" color="text.secondary" align="center">
					No directors yet.
				</Typography>
			) : (
				<List sx={{ bgcolor: 'background.paper', borderRadius: 1, boxShadow: 1 }}>
					{directors.map(director => (
						<ListItem
							key={director.id}
							divider
							sx={{
								'&:last-child': { borderBottom: 'none' }
							}}
						>
							<ListItemText
								primary={
									<Link
										to={`/directors/${director.id}`}
										style={{
											textDecoration: 'none',
											color: 'inherit',
											fontWeight: 500
										}}
									>
										{director.title}
									</Link>
								}
							/>

							<ListItemSecondaryAction>
								<IconButton
									edge="end"
									aria-label="edit"
									component={Link}
									to={`/directors/edit/${director.id}`}
									color="primary"
									sx={{ mr: 1 }}
								>
									<EditIcon />
								</IconButton>

								<IconButton
									edge="end"
									aria-label="delete"
									onClick={() => dispatch(deleteDirector(director.id))}
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

export default DirectorsList;