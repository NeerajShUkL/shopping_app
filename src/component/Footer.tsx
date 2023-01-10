import { BottomNavigation, Typography, Paper } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import React from 'react'

const Footer: React.FC = () => {
  return (
    <BottomNavigation sx={{marginTop: 5,
      bottom: 0,}} >
    <Paper sx={{
      width: '100%'}} component="footer" variant='outlined'>
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my:1
          }}
        >
          {/* <Link href="/">
            <Image priority src="/Logo.svg" width={75} height={30} alt="Logo" />
          </Link> */}
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2023. [] Limited
          </Typography>
        </Box>
      </Container>
    </Paper>
    </BottomNavigation>
  )
}

export default Footer