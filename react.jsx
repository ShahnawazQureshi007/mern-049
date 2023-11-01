import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <h1>Hey This is me a Container</h1>
        <div className='item-1'>
          <h2>I'm Item in the Container</h2>

        </div>

      </div>
      <div className='circle'>
     
      </div>
      <button onClick={function(){alert("This is a Alert")}}> IM Button</button>
    </>
  )
}

export default App
