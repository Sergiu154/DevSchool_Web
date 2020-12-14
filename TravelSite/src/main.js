import {Router} from "@vaadin/router"

import './main-component.js'
import './destinations-component.js'

const outlet = document.getElementById('outlet')
const router = new Router(outlet)
router.setRoutes([
    {path: '/', component: 'main-component'},
    {path: '/destinations', component: 'destinations-component'},

])

console.log(outlet)