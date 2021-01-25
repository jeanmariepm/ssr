import React from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'

const Hello = () => {
  return (
    <div>
      <h1>Hello, world</h1>
      <Button></Button>
    </div>
  )
}

ReactDOM.render(<Hello/>, document.getElementById("App") )