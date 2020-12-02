import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'


class ArticleDestination extends LitElement {

    constructor() {
        super();
    }

    static get style() {
        return css`
        section {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-content: center;
        margin: 5vh 13vw;
    }

        article {
        display: flex;
        height: 25vh;
        margin-bottom: 20px;
        justify-content: space-between;
    }

    .asideText {
        padding: 25px;
        background-color: #f5f5f5;
        overflow: hidden;
    }

        img {
        object-fit: fill;
    }


    .destinationTitle {
        text-align: center;
        margin: 70px 0;
        color: #5850b3;
    }

        article a {
        color: black;
    }

        article a:hover {
        color: #5850b3;
    }

        img:hover {
        z-index: 2;
        box-shadow: 0 3px 5px 5px grey;
    } `

    }

    static get properties() {
        return {
            asideText: {type: Object},
            sursa: {type: String}

        };
    }


    render() {
        return html
            ` 
         <article>
               <img src="${this.sursa}"
                        alt="salut"/>
            
                <h2>${this.asideText.title}</h2> <br/>
                <p>
                   ${this.asideText.text}

                </p>

                Find more info <a href="https://crouton.net/">here</a> <br/><br/> <br/>


            </article>
        `
    }
}

customElements.define('article-destination', ArticleDestination);
