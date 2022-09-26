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
        <h1>Hola mundo </h1>
        `;
    }
}
customElements.define('ejemplo-uno', EjemploUno);