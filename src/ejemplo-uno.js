import { LitElement, html, css } from 'lit-element';
//No importante importar css igual :3 saludos 
export class EjemploUno extends LitElement {

    static get styles() {
        return css `
    p{
        color: green;
    }
    `
    }

    render() {
        return html `
        <p>soy verde</p>
        `;
    }
}
customElements.define('ejemplo-uno', EjemploUno);