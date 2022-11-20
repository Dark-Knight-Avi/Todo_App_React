import React from 'react'
import {Navbar, Todos, Todositem} from './components/exports'

function App() {
  return (
    <>
      <Navbar title="Todos"/>
      <div className="flex justify-center items-center">
        <Todos />
      </div>
    </>
  )
}

export default App