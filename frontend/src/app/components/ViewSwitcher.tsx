// src/ViewSwitcher.js
import React from 'react'

function ViewSwitcher({ view, onChangeView }) {
  return (
    <div>
      <button onClick={() => onChangeView('list')} disabled={view === 'list'}>
        List View
      </button>
      <button onClick={() => onChangeView('table')} disabled={view === 'table'}>
        Table View
      </button>
      {/* 可以添加更多视图的按钮 */}
    </div>
  )
}

export default ViewSwitcher
