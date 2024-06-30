// src/DataList.js
import React from 'react'
import { List, ListItem, ListItemText } from '@mui/material'

function DataList({ items }) {
  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.id} button>
          <ListItemText primary={item.name} secondary={item.category} />
        </ListItem>
      ))}
    </List>
  )
}

export default DataList
