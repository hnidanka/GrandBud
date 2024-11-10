import { addScrollEventListeners } from "./helper";
export function navigation (){
       //menu manipulation
       const menuButton = document.querySelector('#menuBar-icon');
       const menu = document.querySelector('nav ul'),
       toolbar = document.querySelector('.toolbar'),
       logoContainer = document.querySelector('.logo-container');
       menuButton.addEventListener('click', (e) => {
           e.preventDefault();
           menu.classList.toggle('show');
           menu.classList.toggle('column');
           toolbar.classList.toggle('column');
           logoContainer.classList.toggle('column')
       });
   
       //navigate to pricelist
       const priceListNavButton = document.querySelector('#services .services-action button');
       priceListNavButton.addEventListener('click', (e) => {
           e.preventDefault();
           window.location.href = 'pricelist.html';
           console.log('clicke')
       });

       const services = document.querySelectorAll('.service-block');
       services.forEach(service=>{
        service.addEventListener('click', (e)=>{
            e.preventDefault();
            const targetId = service.getAttribute('data-target'); 
            console.log(targetId)
            window.location.href = `pricelist.html?service=${targetId}`;
        })
       })
}