import { LitElement, html, css } from 'lit-element';

export class EjemploCuatro extends LitElement {
    static get styles() {
        return css `
        :host {
            display: block;
            background-color: lightgray;
            padding: 8px;
        }
        :host(.blue) {
            background-color: aliceblue: aliceblue;
            color: darkgreen;
        }
        `
    };


    render() {
        return html `Hellow World`;
    }
}
customElements.define('ejemplo-cuatro', EjemploCuatro);