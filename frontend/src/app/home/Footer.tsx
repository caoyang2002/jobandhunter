import * as React from 'react'
import Link from '@mui/material/Link'
import { Container, Typography, Box } from '@mui/material'
import JobList from '../components/JobList'

function Footer() {
  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          py: 3,
          px: 2,
          position: 'relative',
          bottom: 0,
          width: '100%',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mb: 0 }}
          >
            &copy; {new Date().getFullYear()} 侵权联系：
            <Link
              href="mailto:478300029@qq.com"
              color="inherit"
              style={{ textDecoration: 'none' }}
            >
              478300029@qq.com
            </Link>
          </Typography>
        </Container>
      </Box>
      <JobList />
    </>
  )
}

export default Footer
