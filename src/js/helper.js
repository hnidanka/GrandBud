export async function fetchData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return null; 
    }
}
export function addScrollEventListeners(navItemsSelector) {
    const navItems = document.querySelectorAll(navItemsSelector);

    navItems.forEach(item => {      
            item.addEventListener(item.tagName === 'SELECT' ? 'change' : 'click', (e) => {
            e.preventDefault();
            const targetId = item.tagName === 'SELECT' ? e.target.value : item.getAttribute('data-target');
            handleNavigation(targetId);
            navItems.forEach(navItem => navItem.classList.remove('active'));
            e.target.classList.add('active');    
        });
    });
}

function handleNavigation(targetId) {
    if (targetId === 'pricelist') {
        window.location.href = 'pricelist.html';
        return;
    }

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        resetMenuState();
    }
}

function resetMenuState() {
    const menuButton = document.querySelector('#menuBar-icon'),
        logo = document.querySelector('.logo-container'),
        menu = document.querySelector('nav ul'),
        navigation = document.querySelector('nav');

    if (menuButton && logo && navigation) {
        menuButton.classList.remove('full-width');
        menu.classList.remove('show', 'column');
        logo.classList.remove('hide');
        navigation.classList.remove('column');
    }
}



export function scrollToServiceFromUrl(param) {
  console.log(param)
    if (param) {
        const targetSection = document.getElementById(param);
        console.log(targetSection)
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}


export function navigateTo(selector){
    const navItems = document.querySelectorAll(selector);
    navItems.forEach(item=>{
        item.addEventListener('click', (e) => {
            e.preventDefault();
            if(selector === '#services .services-action button' ){
                window.location.href = 'pricelist.html';
            }else{
                window.location.href = '/';
            }
            
        });
    })
}



export function changeTab(modalSelector, modalContentSelector, content = ''){
    modalContentSelector.innerHTML = `<p>${content}</p>`;
  if(content === 'Ładowanie'){
    modalContentSelector.innerHTML = `
        <p>${content}</p>
        <div class="newtons-cradle">
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
        </div>`;
  }
  
  modalSelector.classList.remove('hide');
    modalSelector.classList.add('show', 'fade');
    
  setTimeout(()=>{
      modalSelector.classList.remove('show', 'fade');
      modalSelector.classList.add('hide');

  }, 3000)

}