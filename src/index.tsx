import React from 'react'
import ReactDOM from 'react-dom'
import sum from 'sum'

ReactDOM.render(
  <h1>Привет, мир{sum(1, 3)}</h1>,
  document.getElementById('root'),
)
