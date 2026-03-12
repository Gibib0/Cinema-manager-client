import {useDispatch, useSelector} from 'react-redux'
import {useParams, useNavigate} from 'react-router-dom'
// ===============================
import {addActor, updateActor} from '../../store/slices/actorsSlice'
// ===============================
import {Formik, Form} from 'formik'
// ===============================
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

function ActorsForm() {
	const {id} = useParams()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const actors = useSelector(state => state.actorsList)
	const editActor = actors.find(a => a.id === id)

	const initialValues = editActor || { name: '' }

	const handleSubmit = (values) => {
    if (editActor) {
      dispatch(updateActor({ id, name: values.name }))
    } else {
      dispatch(addActor(values.name))
    }
    navigate('/actors')
  }

	return (
		<Box>
			<Formik enableReinitialize
							initialValues={initialValues}
							onSubmit={handleSubmit}>
				{({values, handleChange, handleReset}) => (
					<Form>
						<Stack spacing={2}>
							<TextField label='Name'
								name='name'
								value={values.name}
								onChange={handleChange}
							/>

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

export default ActorsForm