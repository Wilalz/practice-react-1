import React, {useState} from 'react'
import styles from "../../styles.module.css"
import { Title } from '../Title'

const CardPokemonState = () => {

    const [ pokemons, setPokemons ] = useState([
        {
            id: 1,
            name: "Picachu",
            attack: 112
        },
        {
            id: 2,
            name: "Bulbasaur",
            attack: 118
        },
        {
            id: 3,
            name: "Charmander",
            attack: 100
        }
    ]);
    
    const eliminarPokemon = (id, name, ev) => {
        ev.preventDefault()
        console.log(`Eliminado el pokemon ${id}: ${name}`)
        setPokemons(pokemons.filter (x => x.id != id)
        )
    }

    const pokemon = () => {
        return (
            pokemons.map((pokemon) =>
                <div key={pokemon.id}
                className={styles.cardFlex}>
                    <p >Name: {pokemon.name}</p>
                    <p>Attack: {pokemon.attack}</p>
                    <button
                        onClick={ev => eliminarPokemon(pokemon.id, pokemon.name, ev)}>
                        Delete
                    </button>
                </div>
                )
        )
    }

    const restartList = [
        {
            id: 1,
            name: "Picachu",
            attack: 112
        },
        {
            id: 2,
            name: "Bulbasaur",
            attack: 118
        },
        {
            id: 3,
            name: "Charmander",
            attack: 100
        }
    ]


    // acá funciona bien - vamos a probar con useState

    return (
        <div className={styles.container}>
            <Title>Delete Pokemon with State</Title>
            <div className={styles.containerFlex}>
                {pokemon()}
            </div>
            
            <button onClick={ () => setPokemons (restartList)} >
                Restart😎
            </button>
        </div>
    )
}

export default CardPokemonState