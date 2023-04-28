import styles from "./styles.module.css"
import './App.css'
import { Title } from './components/Title'
import Post, {Post2} from "./components/ejercicio0/Post"
import { CardClassC } from './components/ejercicio1/CardClassC'
import { CardFunctionalC } from './components/ejercicio1/CardFunctionalC'
import { CardPpalElephants } from './components/ejercicio2/CardPpalElephants'
import { CardCoche } from './components/ejercicio3/CardCoche'
import { CardList } from "./components/ejercicio4/CardList"
import CardPokemonState from './components/ejercicio5/CardPokemonState'
import { FormLogin } from "./components/ejercicio6/FormLogin"
import { FormRejuvenecedor } from "./components/ejercicio7/FormRejuvenecedor"

function App() {



  return (
    <div className="App">
      <h1>React</h1>
      <CardClassC />
      <CardFunctionalC />
      <hr />
      <Title>Hooks - useState</Title>
      <div className={styles.container}>
        <Post text="Me gusta!"></Post> 
        <Post2 text="Post 2" />
      </div>
      <hr />
      <CardPpalElephants />
      <hr />
      <div className={styles.container}>
        <Title>3. Encender o Apagar coches</Title>
        <CardCoche type="&#x1F69A;" />
        <CardCoche type="&#x1F697;" />
        <CardCoche type="&#x1F699;" />
        <CardCoche type="&#x1F69C;" />
      </div>
      <hr />
      <CardList />
      <hr />
      <CardPokemonState />
      <hr />
      <FormLogin />
      <hr />
      <FormRejuvenecedor />



    </div>
  )
}

export default App
