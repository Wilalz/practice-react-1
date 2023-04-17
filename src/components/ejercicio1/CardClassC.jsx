import { Component } from "react";
import styles from "./styles.module.css"

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
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1>{this.state.title}</h1>
                    <p>{this.state.body}</p>
                </div>
            </div>
        )
    }
}
