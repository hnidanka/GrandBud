export async function fetchData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return null; 
    }
}

export function addScrollEventListeners(selector) {
    const navItems = document.querySelectorAll(selector);
    console.log(navItems);
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('data-target'); // Use `item` instead of `this`
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
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

// document.addEventListener('DOMContentLoaded', scrollToServiceFromUrl);

export function navigateTo(selector){
    const navItems = document.querySelectorAll(selector);
    navItems.forEach(item=>{
        item.addEventListener('click', (e) => {
            e.preventDefault();
            if(selector === '#services .services-action button' ){
                window.location.href = 'pricelist.html';
            }else{
                window.location.href = 'index.html';
            }
            
        });
    })
}



export function changeTab(modalSelector, modalContentSelector, content = ''){
  modalContentSelector.innerHTML = `<p>${content}</p>`;
  modalSelector.classList.remove('hide');
    modalSelector.classList.add('show', 'fade');
  setTimeout(()=>{
      modalSelector.classList.remove('show', 'fade');
      modalSelector.classList.add('hide');

  }, 3000)

}