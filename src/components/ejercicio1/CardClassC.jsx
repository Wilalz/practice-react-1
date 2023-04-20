import { Component } from "react";
import styles from "./styles.module.css"
import { Title } from '../Title'

export class CardClassC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Clase",
            body: "Este es un componente de clase"
        }
    }

    render() {
        return (
            <>
                <Title>Tipos de componentes</Title>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h1>{this.state.title}</h1>
                        <p>{this.state.body}</p>
                    </div>
                </div>
            </>
        )
    }
}
