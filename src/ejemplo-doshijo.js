import { css } from 'lit-element';
import { EjemploDos } from './ejemplo-dos';
export class EjemploDoshijo extends EjemploDos {
    static get styles() {
        return [EjemploDos.styles, //Utilizamos desde el principio return para poder retornar los dos estilos al mismo tiempo 
            css ` div{
        color: red;
    }`
        ]

    }

}
customElements.define('ejemplo-doshijo', EjemploDoshijo);