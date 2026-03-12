import { useSelector, useDispatch } from "react-redux";
import { deleteMovie } from "../../store/slices/moviesSlice";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, Box, Typography} from "@mui/material";

function MoviesList() {
  const movies = useSelector(state => state.moviesList);
  const dispatch = useDispatch();

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 4 }}>
        <Button
          variant="contained"
          color="success"
          startIcon={<AddIcon />}
          component={Link}
          to="/movies/new"
          size="large"
        >
          ADD NEW MOVIE
        </Button>
      </Box>

      {movies.length === 0 ? (
        <Typography variant="body1" color="text.secondary" align="center">
          No movies yet.
        </Typography>
      ) : (
        <List sx={{ bgcolor: 'background.paper', borderRadius: 1, boxShadow: 1 }}>
          {movies.map(movie => (
            <ListItem
              key={movie.id}
              divider
              sx={{
                '&:last-child': { borderBottom: 'none' }
              }}
            >
              <ListItemText
                primary={
                  <Link
                    to={`/movies/${movie.id}`}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      fontWeight: 500
                    }}
                  >
                    {movie.title}
                  </Link>
                }
              />

              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  component={Link}
                  to={`/movies/edit/${movie.id}`}
                  color="primary"
                  sx={{ mr: 1 }}
                >
                  <EditIcon />
                </IconButton>

                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => dispatch(deleteMovie(movie.id))}
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

export default MoviesList;