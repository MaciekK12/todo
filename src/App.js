import React, { useState, useEffect } from 'react'
import Todo from './Todo'

import './App.css'



function App() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count])

  return (
    <div className="App">
    <div>
      <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <Todo></Todo>
    </div>
  );
}

export default App
