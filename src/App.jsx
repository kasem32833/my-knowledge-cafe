import { useState } from 'react'
import Header from './Components/Header/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
    </>
  )
}

export default App
