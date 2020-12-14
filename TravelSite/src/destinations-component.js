import {
    LitElement, html, css
} from 'lit-element'

import "./destinations-posts.js"
import "./index-posts.js"
import "./app-header.js"
import "./app-footer.js"


class DestinationsComponent extends LitElement {

    render() {
        return html`
        <app-header></app-header>


<div class="line"></div>

<main>

    <h2 class="destinationTitle">Destinations</h2>

    <section>
        <destinations-posts></destinations-posts>
    </section>



</main>


<app-footer></app-footer>
        `
    }
}

export default customElements.define('destinations-component', DestinationsComponent)