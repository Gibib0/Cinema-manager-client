import {useDispatch, useSelector} from 'react-redux'
import {useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
// ===============================
import {addMovie, updateMovie} from '../../store/slices/moviesSlice'
import { addActor } from '../../store/slices/actorsSlice'
// ===============================
import {Formik, Form} from 'formik'
// ===============================
import {TextField, Button, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, Box, Typography, Stack} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

function MoviesForm() {
	const {id} = useParams()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const movies = useSelector(state => state.moviesList)
	const actorsFromStore = useSelector(state => state.actorsList)
	const editMovie = movies.find(m => m.id === id)
	const [newActor, setNewActor] = useState('')
	const [localActors, setLocalActors] = useState(editMovie?.actors || [])

	useEffect(() => {
    if (editMovie) {
      setLocalActors(editMovie.actors || [])
    }
  }, [editMovie])

	const initialValues = editMovie
    ? {...editMovie}
    : {
        title: '',
				year: '',
				genre: '',
				director: '',
				studio: '',
				poster: ''
      }

	const addActorToList = (name) => {
		const trimmed = name.trim()
		if (!trimmed) return

		const exists = actorsFromStore.some(
			a => a.name.toLowerCase() === trimmed.toLowerCase()
		)

		if (!exists) {
			dispatch(addActor(trimmed))
		}

		setLocalActors(prev => {
			if (prev.includes(trimmed)) return prev
			return [...prev, trimmed]
		})

		setNewActor('')
	}

	const handleSubmit = (values) => {
		const processedValues = {
			...values,
			actors: localActors,
		}

		if (editMovie) {
			dispatch(updateMovie({id, data: processedValues}))
		} else  {
			dispatch(addMovie(processedValues))
		}
		navigate('/movies')
	}

	return (
		<Box>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
			>
				{({values, handleChange, handleReset}) => (
					<Form>
						<Stack spacing={3}>
							<TextField label='Title'
								name='title'
								value={values.title}
								onChange={handleChange}
							/>

							<TextField label='Year'
								name='year'
								value={values.year}
								onChange={handleChange}
							/>

							<TextField label='Genre'
								name='genre'
								value={values.genre}
								onChange={handleChange}
							/>

							<TextField label='Director'
								name='director'
								value={values.director}
								onChange={handleChange}
							/>

							<TextField label='Studio'
								name='studio'
								value={values.studio}
								onChange={handleChange}
							/>

							<Box sx={{mt: 2}}>
								<Typography variant='subtitle1' gutterBottom>
									Actors
								</Typography>

								<Box sx={{display: 'flex', gap: 1, mb: 2}}>
									<TextField 
										fullWidth
										size='small'
										label='Actor name'
										value={newActor}
										onChange={(e) => setNewActor(e.target.value)}
										onKeyDown={(e) => {
											if (e.key === 'Enter' && newActor.trim()) {
												e.preventDefault()
												addActorToList(newActor)
											}
										}}
									/>

									<IconButton
										color='primary'
										onClick={() => addActorToList(newActor)}
										disabled={!newActor.trim()}
									>
										<AddCircleOutlineIcon />
									</IconButton>
								</Box>
								{localActors.length > 0 ? (
									<List dense sx={{bgcolor: 'action.hover', borderRadius: 1, maxHeight: 200, overflowY: 'auto'}}>
										{localActors.map((actor, index) => (
											<ListItem
												key={index}
												secondaryAction={
													<IconButton
														edge='end'
														aria-label='delete'
														onClick={() => setLocalActors(prev => prev.filter((_, i) => i !== index))}
														size='small'
														color='error'
													>
														<DeleteIcon fontSize='small' />
													</IconButton>
												}
											>
												<ListItemText primary={actor} />
											</ListItem>
										))}
									</List>
								) : (
									<Typography variant='body2' color='text.secondary' sx={{mt: 1}}>
										No actors yet
									</Typography>
								)}
							</Box>

							<TextField label='Poster url'
								name='poster'
								value={values.poster}
								onChange={handleChange}
							/>

							{values.poster && (
								<img src={values.poster} width='150' alt='preview' />
							)}

							<Stack direction='row' spacing={2}>
								<Button type='submit' variant='contained'>Save</Button>

								<Button onClick={() => navigate(-1)}>Return</Button>

								<Button onClick={handleReset}>Reset</Button>
							</Stack>

						</Stack>
					</Form>
				)}

			</Formik>
		</Box>
	)
}

export default MoviesForm