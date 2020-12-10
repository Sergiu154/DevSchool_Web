import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

class ArticlePost extends LitElement {

    static get properties() {

        return {
            articleClass: {type: String},
            asideText: {type: Object},
            imageObj: {type: Object}
        };
    }


    constructor() {
        super();

        /*
        this.articleClass = "reverseArticle"
        this.asideText = {
            clasa: "asideText",
            title: "Article1",
            subtitle: "Subtitle article 1",
            text: " " +
                "            Duis placerat tincidunt convallis. Integer posuere massa ac neque malesuada finibus. Nullam\n" +
                "            pharetra\n" +
                "            erat at diam porttitor varius nec eget odio. Aenean ullamcorper egestas pulvinar. Vestibulum\n" +
                "            molestie\n" +
                "            interdum orci, at semper lacus placerat eget. Morbi blandit lacus nec ante luctus, et commodo\n" +
                "            lacus\n" +
                "            aliquam. Aenean gravida, tortor sit amet tempor dictum, nunc odio pellentesque metus, eget\n" +
                "            convallis\n" +
                "            nisl metus non turpis. In molestie scelerisque accumsan. Cras vestibulum mi elit, ultricies\n" +
                "            facilisis\n" +
                "            magna eleifend aliquam."
        }
        this.imageObj = {
            clasa: "img_div",
            sursa: "https://i.picsum.photos/id/608/1200/900.jpg?hmac=4L3lIqP3LkdecrcxKL95gVjwKZJUNca9yCaIoz6-KUY"
        }
 */

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
        console.log(this.articleClass)
        console.log(this.imageObj)
        return html
            ` 
         <article class="${this.articleClass}">
                <div class="${this.imageObj.clasa} "><img
                        src="${this.imageObj.sursa}"
                        alt="salut"/></div>

                <div class="${this.asideText.clasa}">
                    <h2>${this.asideText.title}</h2> <br/>
                    <h4>${this.asideText.subtitle}</h4> <br/>
                    <p>
                       ${this.asideText.text}

                    </p>

                </div>

            </article>
        `
    }


}

customElements.define('article-post', ArticlePost);