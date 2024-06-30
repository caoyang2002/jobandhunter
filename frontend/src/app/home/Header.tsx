'use client'
import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material'
import SubmitPositionDialog from '../components/SubmitPositionDialog'

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" noWrap>
          <Link href="/" color="inherit">
            Job&Hunter
          </Link>
        </Typography>
        <div>
          <br />{' '}
        </div>
        {/* <Button color="inherit">提交职位</Button> */}
        <SubmitPositionDialog />
        <Button color="inherit">查询职位</Button>
        <Button color="inherit">建议</Button>
      </Toolbar>
    </AppBar>
  )
}
