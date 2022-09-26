import { LitElement, html } from 'lit-element';

export class Ejemplo1 extends LitElement {

    static get styles() {
        return css `
        p {
            color: green; 
        }
        `
    }

    render() {
        return html `
        <p>Soy verde </p>
        `;
    }
}
customElements.define('ejemplo1', Ejemplo1);