import {useDispatch, useSelector} from 'react-redux'
import {useParams, useNavigate} from 'react-router-dom'
// ===============================
import {addStudio, updateStudio} from '../../store/slices/studiosSlice'
// ===============================
import {Formik, Form} from 'formik'
// ===============================
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

function StudiosForm() {
	const {id} = useParams()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const studios = useSelector(state => state.studiosList)
	const editStudio = studios.find(s => s.id === id)

	const initialValues = editStudio || { name: '' }

	const handleSubmit = (values) => {
    if (editStudio) {
      dispatch(updateStudio({ id, name: values.name }))
    } else {
      dispatch(addStudio(values.name))
    }
    navigate('/studios')
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

export default StudiosForm