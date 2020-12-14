import {
    LitElement, html, css
} from 'lit-element'


class ArticleDestination extends LitElement {

    static get styles() {
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
            dataObj: {type: Object},


        };
    }


    render() {
        // console.log(this.asideText)
        // console.log(this.sursa)
        return html
            ` 
         <article>
               <img src="${this.dataObj.src}"
                        alt="salut"/>
            
            <div class="${this.dataObj.divClass}">
                <h2>${this.dataObj.title}</h2> <br/>
                <p>
                   ${this.dataObj.description}
s
                </p>

                Find more info <a href=${this.dataObj.moreInfoSrc}>here</a> <br/><br/> <br/>

            </div>
            </article>
        `
    }
}

customElements.define('article-destination', ArticleDestination);
