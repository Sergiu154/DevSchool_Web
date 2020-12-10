import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'


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


    async getDestinations() {
        const res = await Promise.all(this.ids.map(id => {
            return fetch("https://devschool-2020.firebaseio.com/talmacel-sergiu/destinations/" + id + ".json")
                .then(response => response.json())
                .then(data =>{console.log(data); this.articles.push(data)})
        }))
        // console.log(this.articles.length)

        // console.log(this.articles)


    }

    constructor() {
        super();
        this.ids = ["-MOBz-Ks2hwXb-ldEzla", "-MOBz-SUC4-YdZjDv-IF", "-MOBz-_-B6G6cXtPRBLa", "-MOBz-glyxK1XYgUrRsw", "-MOBz-oaykkqqWSa3QFs", "-MOBz-wLhL4nJ2-GHHrG"]
        this.articles = []



    }

    connectedCallback(){
    super.connectedCallback();

        this.getDestinations()
    }


    render() {

        console.log(this.articles)
        return html`
         ${this.articles.map((item) => {

            return html`
             <article-destination .asideText ="${item.asideText}" .sursa="${item.sursa}"></article-destination>
             `
        })}
        `
    }


}

customElements.define('destinations-posts', DestinationsPosts);
