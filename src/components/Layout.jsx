import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { Outlet } from "react-router-dom"
// =============================
import Header from "./Header/Header"
import NavBar from "./Navigation/NavBar"
import Footer from "./Footer/Footer"

function Layout() {
	return (
		<Box sx={{ width: '100%', minHeight: '100vh' }}>
			<Grid container direction='column' sx={{minHeight: '100vh'}}>
				<Grid item>
					<Header />
				</Grid>

				<Grid sx={{flex: 1}}>
					<Grid container>
						<Grid size={{ xs: 2 }} sx={{ border: '4px solid green', p: 2 }}>
              <NavBar />
            </Grid>

						<Grid size={{ xs: 7 }} sx={{ border: '4px solid red', p: 2 }}>
              <Outlet />
            </Grid>

						<Grid size={{ xs: 3 }} sx={{ border: '4px solid orange', p: 2 }}>
              <h2>Service</h2>
							<p>label required</p>
            </Grid>
					</Grid>
				</Grid>

				<Grid item>
          <Footer />
        </Grid>
			</Grid>
		</Box>
	)
}

export default Layout