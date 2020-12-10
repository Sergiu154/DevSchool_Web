import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

class Todo extends LitElement {
    static get styles() {
        return css`
                .todo-checked {
                    color: red;
                }
            `;
    }

    static get properties() {
        return {
            id: {type: Number},
            state: {type: String},
            name: {type: String},
            done: {type: Boolean}
        };
    }

    render() {
        return html`
            <div class="${this.done ? "todo-checked" : ""}">
                
                ${this.state === 'editing' ?
            html`
                <input value="${this.name}" type="text"  id="new-title">
                <button @click="${this.handleCancelClick}">Cancel</button>
                <button @click="${this.handleSaveClick}">Save</button>

            `

            : html`${this.name}
                 <input type="checkbox" ?checked="${this.done}" @click="${this.handleCheckboxClick}"/>
                <button @click="${this.handleEditClick}">Edit</button>
                `}
               
            </div>
        `;
    }

    handleCheckboxClick(event, index) {
        this.dispatchEvent(new CustomEvent("checkboxClickEvent", {
            detail: {
                id: this.id,
                done: event.target.checked,

            }
        }))
    }

    handleEditClick(event) {
        this.state = "editing"
    }

    handleCancelClick(event) {
        this.state = ""

    }

    handleSaveClick(event) {
        this.state = ""

        this.dispatchEvent(new CustomEvent("todoUpdateTitle", {
            detail: {
                title: this.shadowRoot.querySelector("#new-title").value,
                id : this.id
            }
        }))

    }
}

export default customElements.define('my-todo', Todo);