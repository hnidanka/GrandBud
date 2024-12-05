import { scrollToServiceFromUrl, navigateTo } from "./helper";
export function navigation() {

        const navigation = document.querySelector('nav'),
        menuButton = document.querySelector('#menuBar-icon'),
        logo = document.querySelector('.logo-container'),
        menuToolbar = document.querySelector('nav ul');

        window.addEventListener('click', (e) => {
            const target = e.target;
            if (window.innerWidth <= 768) {
                if (menuButton.contains(target)) {
                    if (navigation.classList.contains('column')) {
                        closeMenu();
                    } else {
                        openMenu();
                    }
                } else if (menuToolbar.contains(target)) {
                    if (target.tagName === 'LI') {
                        closeMenu();
                    }
                } else {
                    closeMenu();
                }
            }
        });

    
    function openMenu() {
        navigation.classList.add('column');
        menuButton.classList.add('hide');
        menuToolbar.classList.add('show');
        logo.classList.add('hide');
    }
    
    function closeMenu() {
        navigation.classList.remove('column');
        menuButton.classList.remove('hide');
        menuToolbar.classList.remove('show');
        logo.classList.remove('hide');
    }
    
    if(window.location.pathname =='/'){ 
            navigateTo("#services .services-action button");   
    }
    navigateTo('header nav .logo-container img');
    // if (services.length > 0) {
    //     services.forEach(service => {
    //         service.addEventListener('click', (e) => {
    //             e.preventDefault();
    //             const targetId = service.getAttribute('data-target');
    //             if (targetId) {
    //                 window.location.href = `pricelist.html?service=${encodeURIComponent(targetId)}`;
    //             }
    //         });
    //     });
    // }

    const params = new URLSearchParams(window.location.search);
    const sectionId = params.get('section');
    if (sectionId) {
     scrollToServiceFromUrl(sectionId);
    }
}
