import {
    LitElement, html, css
} from 'lit-element'

import "./destinations-posts.js"
import "./index-posts.js"
import "./app-header.js"
import "./app-footer.js"


class MainComponent extends LitElement {

    render() {
        return html`
        
        <app-header></app-header>
<div class="line"></div>

<main>


    <section class="introSection">
        <h2> Plan your next trip with Traveloo!</h2> <br/>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur enim velit, maximus eget lorem ultrices,
            hendrerit porta nunc. Sed venenatis eget massa sit amet commodo. Vivamus dapibus mattis aliquam. Maecenas
            consectetur magna quis lectus elementum porta. Aliquam fermentum, lorem sed ultrices tincidunt, lacus diam
            commodo metus, nec volutpat mauris sapien eget ex. Donec pulvinar volutpat nisl eget auctor. Mauris
            tristique tortor at eros euismod, aliquam vestibulum lorem vestibulum.


        </p>
    </section>

    <section>
        <div class="articleContainer">
        <index-posts></index-posts>
        </div>
    </section>

</main>


<app-footer></app-footer>
    
        `
    }
}

export default customElements.define('main-component', MainComponent)