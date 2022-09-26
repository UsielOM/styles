import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit/directives/class-map';
import { styleMap } from 'lit/directives/style-map'

export class EjemploSeis extends LitElement {

    static get properties() {
        return {
            classes: {},
            styles: {},
        }

    }

    static get styles() {
        return css `
        .someclass{
            border: 1px solid red;
            padding: 4px;
        }
        .anotherclass {
            background-color: navy;
        }
        `

    }

    constructor() {
        super();
        this.classes = { someclass: true, anotherclass: true };
        this.styles = { color: 'lightgreen', fontFamily: 'Roboto' };
    }

    render() {
        return html `
        <div class=${classMap(this.classes)} style=${styleMap(this.styles)}>
    
        Some content
    </div>
        `;
    }
}
customElements.define('ejemplo-seis', EjemploSeis);