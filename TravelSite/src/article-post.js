import {
    LitElement, html, css
} from 'lit-element'

class ArticlePost extends LitElement {

    static get properties() {

        return {
            dataObj: {type: Object},
        };
    }


    constructor() {
        super();
    }

    static get styles() {
        return css`
        
        * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}

        
        .img_div {
    grid-area: img;
        }
        
        .img_div:hover {
            z-index: 2;
            box-shadow: 0 3px 5px 5px grey;
        }
        
        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        
        }
        
        
        .asideText {
            grid-area: asideText;
            overflow: hidden;
            background-color: #f5f5f5;
            text-align: center;
            padding: 80px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
        article {
            display: grid;
            grid-template-areas: "img asideText";
            grid-template-columns: 53% 47%;
            grid-template-rows: 500px;
        
        }
        
        .reverseArticle {
            grid-template-areas: "asideText img ";
            grid-template-columns: 47% 53%;
        
        
        }
        
        .articleContainer {
            display: grid;
            grid-template-areas: "article" "article" "article";
        }
        
                
                `
    }


    render() {
        console.log(this.dataObj.articleClass)
        // console.log(this.imageObj)
        return html
            ` 
         <article class="${this.dataObj.articleClass}">
                <div class="${this.dataObj.divClass} "><img
                        src="${this.dataObj.src}"
                        alt="salut"/></div>

                <div class="asideText">
                    <h2>${this.dataObj.title}</h2> <br/>
                    <h4>${this.dataObj.subtitle}</h4> <br/>
                    <p>
                       ${this.dataObj.text}

                    </p>

                </div>

            </article>
        `
    }


}

customElements.define('article-post', ArticlePost);