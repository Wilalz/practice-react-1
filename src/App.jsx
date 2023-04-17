import './App.css'
import { Title } from './components/Title'
import { Post } from "./components/Post"
import { CardClassC } from './components/ejercicio1/CardClassC'
import { CardFunctionalC } from './components/ejercicio1/CardFunctionalC'
import { CardGroup } from './components/ejercicio2/CardGroup'
import { CardCoche } from './components/ejercicio3/CardCoche'

function App() {
  // HOOKS  ---------------------------------
  // reglas:
  // 1. Usarlos solo dentro de componentes funcionales
  // 2. No usarlos en condicionales, ciclos o funciones anidadas (if, for, while....)
  // 3. Llamar a los Hooks en el principio de la funcion del componente
  
  // ------ useState ------------------------
  // crea una variable para almacenar una pieza del estado
  // ademas permite actualizar dicho valor en un componente funcional
  // su valor se preserva incluso luego del re-renderizado
  // estructura [ {objeto con data clave:valor}, function() ]

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


  return (
    <div className="App">
      <Title>Hooks --- useState</Title>
      <Post text="Me gusta!"></Post> 
      <CardClassC />
      <CardFunctionalC />
      <hr />
      <CardGroup />
      <hr />


    </div>
  )
}

export default App
