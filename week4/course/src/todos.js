import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

import "./todo.js";

class Todos extends LitElement {
    obj;

    static get styles() {
        return css`
            `;
    }

    static get properties() {
        return {
            todos: {type: Array},
            title: {type: String}
        }
    }

    constructor() {
        super();

        this.title = 'Titlu';
        this.todos = [
            {
                name: 'Mere',
                done: true
            },
            {
                name: 'Pere',
                done: false
            }
        ]
    }


    render() {
        return html`
        <h2>${this.title}</h2>
        <form @submit="${this.handleAddedTodo}">
            <input type="text" placeholder="new todo" name="newTodo"  id="newTodo">
            <input type="submit" value="Click">
        </form>
        <ul>
            ${this.todos.map((item, index) => {
            return html`
                    
                    <my-todo .id = "${index}" .name=${item.name} .done=${item.done} 
                    @todoUpdateTitle="${this.handleTodoUpdateTitle}"
                    @checkboxClickEvent="${this.handleCheckBoxClickEvent}"></my-todo>`;
        })}
        </ul>
        `;
    }

    handleCheckBoxClickEvent(event) {

        const id = event.detail.id;
        const done = event.detail.done;

        let newTodos = [...this.todos]
        newTodos[id].done = done;
        this.todos = newTodos;

    }

    handleAddedTodo(event) {
        event.preventDefault();
        let formData = new FormData(event.target);

        let newTodo = {
            name: formData.get("newTodo"),
            done: false
        }
        this.todos = [...this.todos, newTodo]
    }

    handleTodoUpdateTitle(event) {
        const title = event.detail.title;
        const id = event.detail.id;

        let newTodos = [...this.todos];
        newTodos[id].name = title;
        this.todos = newTodos;
    }

    connectedCallback() {
        super.connectedCallback();

        const iAmYoda = new Promise((resolve, reject) => {
            const person = "Yoda"
            if (person === 'Yoda') {
                resolve('I am Yoda')
            } else reject(`I am ${person}`)

        })

        const promise2 = new Promise(((resolve, reject) => {

            setTimeout(reject, 700, 'ok')
        }))


        const promise3 = new Promise(((resolve, reject) => {

            setTimeout(reject, 500, 'super')
        }))

        Promise.race([iAmYoda, promise2, promise3]).then(response => console.log(response)).catch(error => console.log(error))

        // iAmYoda.then((response) => console.log(response)).catch((error) => console.log(error)).finally(() => console.log('in finally'))

        this.getPosts()
        this.getPosts2()
    }


    getPosts() {
        // 'https://jsonplaceholder.typicode.com/todos/1'
        // const axios = window.axios;
        //
        // // axios.get('https://jsonplaceholder.typicode.com/todos/1')
        // //     .then(response => console.log(response))
        // //     .catch(error => console.log(error))
        //
        // //     axios.post('https://jsonplaceholder.typicode.com/posts', {
        // //                                     title: 'foo',
        // //                                     body: 'bar',
        // //                                     userId: 1,
        // // },{
        // //
        // //         headers: {
        // //             'content-type': 'multipart/form-data',
        // //             Authorization: 'Bearer ceva-token'
        // //         }
        // //     }).then(response => console.log(response))
        //
        //
        // // const request = axios.create({
        // //     baseURL: 'https://jsonplaceholder.typicode.com',
        // //     timeout: 1000.
        // // });
        // //
        // // request.get('posts').then(response => console.log(response))
        //
        // fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => console.log(data))




        srcs = [""]
        this.obj = {
            "src": "https://i.picsum.photos/id/964/200/200.jpg?hmac=Xpyys0fUK6t9mTJx-ZmJH2T9G2Hp7bfieNlb-dHqBek",
            "divClass": "asideText",
            "title": "Destination 3",
            "text": "Duis placerat tincidunt convallis. Integer posuere massa ac neque malesuada finibus. Nullam pharetra erat at diam porttitor varius nec eget odio.Aenean ullamcorper egestas pulvinar. Vestibulum molestie interdum orci, at semper lacus placerat eget. Morbi blandit lacus nec ante luctus, et commodo lacus aliquam. Aenean gravida, tortor sit amet tempor dictum, nunc odio pellentesque metus, eget convallis nisl metus non turpis.In molestie scelerisque accumsan. Cras vestibulum mi elit, ultricies facilisis magna eleifend aliquam."
        }

        // fetch("https://devschool-2020.firebaseio.com/talmacel-sergiu/articles.json", {
        //     method: "POST",
        //
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(this.obj)
        // })
        //     .then(function (res) {
        //         console.log(res)
        //     })
        //     .catch(function (res) {
        //         console.log(res)
        //     })

    }

    async getPosts2() {
        const axios = window.axios;
        try {

            const response = await
                axios.get('https://jsonplaceholder.typicode.com/todos/1')
                    .then(response => console.log(response))
                    .catch(error => console.log(error))


            console.log('asdadasw')

        } catch (error) {
            console.log(error)
        }

    }

}

customElements.define('my-todos', Todos);