// src/DataList.js
'use client'
import React, { useState, useEffect } from 'react'
import { List, ListItem, ListItemText } from '@mui/material'

function JobList() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/getalljob', {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        setJobs(data) // Store fetched data in state
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, []) // Empty dependency array means this effect runs only once after the component mounts

  return (
    <List>
      {jobs.map((job) => (
        <ListItem key={job.id}>
          <ListItemText primary={job.title} secondary={job.company} />
        </ListItem>
      ))}
    </List>
  )
}

export default JobList
