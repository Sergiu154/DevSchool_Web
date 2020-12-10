import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'



class AppHeader extends LitElement {

    static get properties() {
        return {
            navElems: {type: Array},
            ttl: {type: Object},
            containerClass: {type: String}
        };
    }

    constructor() {
        super();
        this.containerClass = "hcontainer";
        this.ttl =
            {
                text: "Traveloo",
                cls: "title"
            };

        this.navElems = [
            {
                name: 'Home',
                link: 'index.html'
            },
            {
                name: 'Destinations',
                link: 'destinations.html'
            },
            {
                name: 'Language',
                link: '#'
            }
        ];
    }

    render() {
        return html` 
<header>
     <div class=${this.containerClass}>

        <nav>
            <ul>
    
    
            ${this.navElems.map(i => {
            return html`
                
                <li><a href="${i.link}">${i.name}</a></li>
                
                `
        })}               
            </ul>
        </nav>


        <div class="${this.ttl.cls}"><h1>${this.ttl.text}</h1></div>

    </div>
</header>`
    }


    static get styles() {
        return css`
         *{
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }
        
        
        nav ul {
            display: flex;
            list-style-type: none;
            flex-direction: row;
            justify-content: center;
        }
        
        a {
            text-decoration: none;
            color: white;
            margin-right: 15px;
        }
        
        a:hover {
            color: #ffd884;
        
        }
        
        nav ul li {
            margin: 2%;
            font-family: sans-serif;
            font-size: 1.3em;
        }
        
        div h1 {
            color: white;
        
        }
        
        li a {
            border: 1px solid white;
            padding: 10px;
        }
        
        nav {
            width: 80%;
        
            /*background-color: red;*/
            margin: 30px auto;
            /*background: yellow;*/
            min-width: 300px;
        
        }
        header {
            background-color: #5850b3;
        
            min-width: 700px;
        }
        
        .hcontainer {
        
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            min-width: 700px;
            height: 45vh;
            align-items: center;
        
        }
        
        .hcontainer div h1 {
            margin-right: 50px;
            margin-top: 80px;
            /*background: red;*/
        }
                        `
    }


}

export default  customElements.define('app-header', AppHeader);