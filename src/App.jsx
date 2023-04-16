import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // HOOKS  ---------------------------------
  // reglas:
  // 1. Usarlos solo dentro de componentes funcionales
  // 2. No usarlos en condicionales, ciclos o funciones anidadas (if, for, while....)
  // 3. Llamar a los Hooks en el principio de la funcion del componente
  
  // ------ useState ------------------------
  // crea una variable para almacenar una pieza del estado
  // ademas permite actualizar dicho valor en un componente funcional

  // Ejemplos
  // const [count, setCount] = useState(0)
  // const [phone, setPhone] = useState("")
  // const [username, setUsername] = useState("0")
  // const [pagado, setPagado] = useState(false)
  // const [colors, setColors] = useState({day: "orange", night:"blue"})

  //const Post = () => {
  //   const [likes, setLikes] = useState(0); //correcto
  //   return <h3>{likes}</h3>;
  //};


  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
