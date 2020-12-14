import {
    LitElement, html, css
} from 'lit-element'


import "./article-post.js";

class IndexPosts extends LitElement {


    static get style() {
        return css`;`
    }

    static get properties() {
        return {
            articles: {type: Array}
        };
    }

    connectedCallback() {
        super.connectedCallback();
        fetch('https://devschool-2020.firebaseio.com/talmacel-sergiu/articles.json')
            .then(response => response.json())
            .then(data => {
                this.articles = Object.keys(data).map((key) => data[key]);
                console.log(this.articles)
            })
    }

    constructor() {
        super();
        this.articles = []


    }

    render() {
        return html`
         ${this.articles.map((item) => {

            return html`
             <article-post .dataObj="${item}"></article-post>
             `
        })}
        `
    }
}

customElements.define('index-posts', IndexPosts)
