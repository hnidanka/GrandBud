import '../scss/style.scss'
// import '../scss/pricelist.scss'
import slider from './slider'
import services from './services'
import contact from './contact'
import {navigation} from'./animations'
import priceList from './pricelist'
import { addScrollEventListeners, navigateTo } from './helper'
window.addEventListener('DOMContentLoaded', () => {
    
    
    if (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html')) {
        services();
    slider();
    contact();
     addScrollEventListeners('nav ul li');
     addScrollEventListeners('.about-us-action');
     addScrollEventListeners('.home-action button')
     navigation();
    } else if (window.location.pathname.endsWith('pricelist.html')) {
      priceList();
      navigation();
    }
})