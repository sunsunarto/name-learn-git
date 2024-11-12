import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [visible, setvisible] = useState(false)
  const toggleName =()=>{
    setvisible(!visible)
  }

  return (
    <>
     <div className="toggle">
      <button onClick={toggleName}>{visible? 'sembuikan' :'Tampilkan'}</button>
      {visible && <p> Nama: Sunaryo</p>}
     </div>
    </>
  )
}

export default App
