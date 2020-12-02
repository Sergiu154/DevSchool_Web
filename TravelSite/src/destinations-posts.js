import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'


import './article-destination.js'


class DestinationsPosts extends LitElement {


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
                asideText: {
                    clasa: "asideText",
                    title: "Destination 3",
                    text: "Duis placerat tincidunt convallis. Integer posuere massa ac neque malesuada finibus. Nullam pharetra \
                    erat at diam porttitor varius nec eget odio.Aenean ullamcorper egestas pulvinar. Vestibulum molestie\
                    interdum orci, at semper lacus placerat eget. Morbi blandit lacus nec ante luctus, et commodo lacus\
                    aliquam. Aenean gravida, tortor sit amet tempor dictum, nunc odio pellentesque metus, eget convallis\
                    nisl metus non turpis.In molestie scelerisque accumsan. Cras vestibulum mi elit, ultricies facilisis\
                    magna eleifend aliquam."


                },
                sursa: "https://i.picsum.photos/id/964/200/200.jpg?hmac=Xpyys0fUK6t9mTJx-ZmJH2T9G2Hp7bfieNlb-dHqBek"


            }
        ]
    }

    render() {
        return html`
         ${this.articles.map((item) => {

            return html`
             <article-destination .asideText =${item.asideText} .sursa=${item.sursa}></article-destination>
             `
        })}
        `
    }


}

customElements.define('destinations-posts', DestinationsPosts);
