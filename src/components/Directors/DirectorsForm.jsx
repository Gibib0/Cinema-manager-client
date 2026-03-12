import {useDispatch, useSelector} from 'react-redux'
import {useParams, useNavigate} from 'react-router-dom'
// ===============================
import {addDirector, updateDirector} from '../../store/slices/directorsSlice'
// ===============================
import {Formik, Form} from 'formik'
// ===============================
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

function DirectorsForm() {
	const {id} = useParams()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const directors = useSelector(state => state.directorsList)
	const editDirector = directors.find(d => d.id === id)

	const initialValues = editDirector || { name: '' }

	const handleSubmit = (values) => {
    if (editDirector) {
      dispatch(updateDirector({ id, name: values.name }))
    } else {
      dispatch(addDirector(values.name))
    }
    navigate('/directors')
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

export default DirectorsForm