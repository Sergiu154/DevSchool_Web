import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'


class AppFooter extends LitElement {

    static get styles() {
        return css`
        
        footer {
    height: 10vh;
    text-align: center;
    line-height: 10vh;
    margin-top: 50px;
    color: whitesmoke;
    background-color: #5850b3;
    
    .copywrite
    {
    font-family: Arial;
}
        `
    }

    static get properites() {

        return {
            footerText: {type: String},
        };
    }

    constructor() {
        super();
        this.footerText = ' 2020 Travel website - All rights reserved'
    }

    render() {
        return html`
        <footer>
        <span class="copywrite">&copy;</span>
            ${this.footerText}            
        </footer>
        `
    }
}

customElements.define('app-footer', AppFooter);