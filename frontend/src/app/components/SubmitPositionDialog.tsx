import React, { useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
  Snackbar,
  Alert,
} from '@mui/material'

function SubmitPositionDialog() {
  const [open, setOpen] = React.useState(false)
  const [textValue, setTextValue] = React.useState('')
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackbarOpen(false)
  }

  const handleSubmit = () => {
    const userInput = textValue
    console.log('用户输入的职位信息:', userInput)
    fetch('http://127.0.0.1:5000/addjob', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ job_description: userInput }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        console.log('成功提交的数据:', data)
        // alert('ok')
        setSnackbarMessage('数据提交成功')
        setSnackbarOpen(true)
      })
      .catch((error) => {
        console.error('提交失败:', error)
        setSnackbarMessage('提交失败: ' + (error.message || 'Unknown error'))
        setSnackbarOpen(true)
      })

    handleClose()
  }
  const customSnackbarStyle = {
    top: 20, // 从顶部的距离
    left: '50%',
    transform: 'translateX(-50%)', // 向左移动50%来居中对齐
  }

  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>
        提交职位
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>请输入职位信息</DialogTitle>
        <DialogContent>
          <Box sx={{ width: '100%' }}>
            <TextField
              autoFocus
              margin="dense"
              label="输入职位信息"
              type="text"
              fullWidth
              multiline
              rows={10} // 设置较大的行数以提供较大的文本域
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
              variant="outlined"
              sx={{ minWidth: 300 }} // 设置最小宽度
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleSubmit} color="primary">
            提交
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} //
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarMessage.includes('失败') ? 'error' : 'success'}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default SubmitPositionDialog
