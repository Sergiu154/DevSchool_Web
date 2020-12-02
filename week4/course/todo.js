import {
    LitElement, html
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module"

    console.log('TO DO')

class Todos extends LitElement{

    static get properties()
    {

        return {
            todos: {type: Array},
            title: {type: String}
        }
    }

    constructor() {
        super();

        this.title ="Titlu";
        this.todos = [
            {
                name : "todo1",

            },
            {
                name: "Pere"
            }
        ]
    }
    render()
    {
        return html`
    <h2>${this}</h2>
    <ul>
    
    <li>${this.todos.map( item => {return html`<li>${item.name}</li>`})}</li>
</ul>
`
    }
}
customElements.define("my-todos",LitElement);