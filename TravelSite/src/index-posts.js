import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'


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

    constructor() {
        super();

        this.articles = [

            {
                articleClass: "reverseArticle",
                asideText: {
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
                },
                imageObj: {
                    clasa: "img_div",
                    sursa: "https://i.picsum.photos/id/608/1200/900.jpg?hmac=4L3lIqP3LkdecrcxKL95gVjwKZJUNca9yCaIoz6-KUY"
                }

            }
        ]
    }

    render() {
        return html`
         ${this.articles.map((item) => {

            return html`
             <article-post .articleClass="${item.articleClass}" .asideText = "${item.asideText}" .imageObj="${item.imageObj}"></article-post>
             `
        })}
        `
    }
}

customElements.define('index-posts', IndexPosts)
