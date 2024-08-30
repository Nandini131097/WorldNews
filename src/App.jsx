import { useState } from 'react'

import Maincomponent from './components/Maincomponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Maincomponent/>
    </>
  )
}

export default App
