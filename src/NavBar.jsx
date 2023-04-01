import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
const NavBar = () => {
  return (
    <div>
            <Box>
      <AppBar >
        <Toolbar>
          <Typography>product  </Typography>
     
          <Button color="inherit">View </Button>
          <Button color="inherit">Add </Button>
        


        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar
