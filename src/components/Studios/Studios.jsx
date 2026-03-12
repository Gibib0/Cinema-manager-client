import { Button, Stack } from "@mui/material"
import { Link, Navigate, Route, Routes } from "react-router-dom"
import StudiosItem from "./StudiosItem"
import StudiosList from "./StudiosList"

function Studios() {
	return (
		<Routes>
			<Route path=':id' element={<StudiosItem />}/>
			<Route path='/' element={<StudiosList />}/>
			<Route path='new' element={<Navigate to='/studios/new/:id' />}/>
		</Routes>
	)
}

export default Studios