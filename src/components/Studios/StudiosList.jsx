import { useSelector, useDispatch } from "react-redux";
import { deleteStudio } from "../../store/slices/studiosSlice";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, Box, Typography} from "@mui/material";

function StudiosList() {
	const studios = useSelector(state => state.studiosList);
	const dispatch = useDispatch();
	
	return (
		<Box sx={{ p: 3 }}>
			<Box sx={{ mb: 4 }}>
				<Button
					variant="contained"
					color="success"
					startIcon={<AddIcon />}
					component={Link}
					to="/studios/new"
					size="large"
				>
					ADD NEW STUDIO
				</Button>
			</Box>

			{studios.length === 0 ? (
				<Typography variant="body1" color="text.secondary" align="center">
					No studios yet.
				</Typography>
			) : (
				<List sx={{ bgcolor: 'background.paper', borderRadius: 1, boxShadow: 1 }}>
					{studios.map(studio => (
						<ListItem
							key={studio.id}
							divider
							sx={{
								'&:last-child': { borderBottom: 'none' }
							}}
						>
							<ListItemText
								primary={
									<Link
										to={`/studios/${studio.id}`}
										style={{
											textDecoration: 'none',
											color: 'inherit',
											fontWeight: 500
										}}
									>
										{studio.title}
									</Link>
								}
							/>

							<ListItemSecondaryAction>
								<IconButton
									edge="end"
									aria-label="edit"
									component={Link}
									to={`/studios/edit/${studio.id}`}
									color="primary"
									sx={{ mr: 1 }}
								>
									<EditIcon />
								</IconButton>

								<IconButton
									edge="end"
									aria-label="delete"
									onClick={() => dispatch(deleteStudio(studio.id))}
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

export default StudiosList;