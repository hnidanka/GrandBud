import '../scss/style.scss'
import slider from './slider'
import services from './services'
import contact from './contact'
import {navigation} from'./navigation'
import priceList from './pricelist'
import { addScrollEventListeners} from './helper'
import animations from './animations'
window.addEventListener('load', () => {
    
    
    if (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html')) {
      animations();  
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