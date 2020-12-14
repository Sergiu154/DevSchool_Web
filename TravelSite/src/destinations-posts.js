import {
    LitElement, html, css
} from 'lit-element'


import './article-destination.js'


class DestinationsPosts extends LitElement {


    static get styles() {
        return css`;`
    }

    static get properties() {
        return {
            articles: {type: Array}
        };
    }


    constructor() {
        super();
        this.articles = []

    }

    connectedCallback() {
        super.connectedCallback();
        fetch('https://devschool-2020.firebaseio.com/talmacel-sergiu/destinations.json')
            .then(response => response.json())
            .then(data => {
                this.articles = Object.keys(data).map((key) => data[key]);
                console.log(this.articles)
            })
    }

    //

    render() {


        console.log(this.articles)
        return html`
         ${this.articles.map((item) => {

            return html`
             <article-destination .dataObj ="${item}"></article-destination>
             `
        })}
        `
    }


}

customElements.define('destinations-posts', DestinationsPosts);
