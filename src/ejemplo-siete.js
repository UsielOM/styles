import { LitElement, html, css } from 'lit-element';

export class EjemploSiete extends LitElement {


    static get styles() {
        return css `{

            :host{
                color: var(--my-element-text-color, black);
                background: var(--my-element-background-color, white);
                font-family: var(--my-element-font-family, Roboto);
                display: block:
                padding: 8px;
                margin: 8px;
            }

        }`
    }

    render() {
        return html `
        <div>Hello World</div>
        `;
    }
}
customElements.define('ejemplo-siete', EjemploSiete);