import { LitElement, html, css } from 'lit-element';
import { buttonStyles } from './ejemplo-tres'
export class EjemploTreshijo extends LitElement {
    static get styles() {
        return [buttonStyles,
            css `:host {
        display: block;
        border: 3px solid black;
        padding: 8px
    }`
        ]
    }

    render() {
        return html `
        <button class="blue-button">Hola</button>
        `;
    }
}
customElements.define('ejemplo-treshijo', EjemploTreshijo);