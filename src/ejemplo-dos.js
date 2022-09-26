import { LitElement, html, css } from 'lit-element';

export class EjemploDos extends LitElement {

    static get styles() {
        return css `
            div {
                border: 1px solid gray;
                padding: 8px;
            }
    `
    };

    render() {
        return html `
        <div>Contenedor</div>
        `;
    }
}
customElements.define('ejemplo-dos', EjemploDos);