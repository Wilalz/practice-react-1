import styles from "./styles.module.css"
import './App.css'
import { Title } from './components/Title'
import Post, {Post2} from "./components/ejercicio0/Post"
import { CardClassC } from './components/ejercicio1/CardClassC'
import { CardFunctionalC } from './components/ejercicio1/CardFunctionalC'
import { CardPpalElephants } from './components/ejercicio2/CardPpalElephants'
import { CardCoche } from './components/ejercicio3/CardCoche'
import { CardList } from "./components/ejercicio4/CardList"

function App() {



  return (
    <div className="App">
      <Title>Hooks --- useState</Title>
      <div className={styles.container}>
        <Post text="Me gusta!"></Post> 
        <Post2 text="Post 2" />
      </div>
      <CardClassC />
      <CardFunctionalC />
      <hr />
      <CardPpalElephants />
      <hr />
      <div className={styles.container}>
        <Title>Encender o Apagar coches</Title>
        <CardCoche type="&#x1F69A;" />
        <CardCoche type="&#x1F697;" />
        <CardCoche type="&#x1F699;" />
        <CardCoche type="&#x1F69C;" />
      </div>
      <hr />
      <CardList />


    </div>
  )
}

export default App
