export function animations(){

    const serviceBlocks = document.querySelectorAll('.service-block'),
    serviceList = document.querySelector('#services-list'),
    offerBlocks = document.querySelectorAll('.about-us-offer ul li'),
    sloganBlocks = document.querySelectorAll('.slogan'),
    aboutUsImageBlock = document.querySelectorAll('.about-us-image-block img'),
    homeBannerDescr = document.querySelector('.home-content .home-descr p'),
    homeBannerAction = document.querySelector('.home-content .home-action button');

const isInViewport = (element) => {
const rect = element.getBoundingClientRect();
return rect.top >= 0 && rect.bottom <= window.innerHeight;
};
const addClassToElem = (elem,className = 'in-view')=>{
elem.classList.add(className);
};
const showInOrder = (item, key) => {
setTimeout(() => {
    addClassToElem(item);  
}, key * 100);
};

const checkInView = (items) => {
if (window.innerWidth > 768) {
    items.forEach((item, key) => {
        if (isInViewport(item) && !item.classList.contains('in-view')) {
            showInOrder(item, key);
        }
    });
}else{
    items.forEach((item) => {
        if (isInViewport(item) && !item.classList.contains('in-view')) {
            item.classList.add('in-view');
        }
    }); 
}


     
};

const initServiceScrollAnimation = () => {
window.addEventListener('scroll', ()=>{
    checkInView(serviceBlocks);
checkInView(offerBlocks);
checkInView(sloganBlocks);
checkInView(aboutUsImageBlock);
});

};
addClassToElem(homeBannerDescr);
setTimeout(()=>{

addClassToElem(homeBannerAction);
}, 1000)
initServiceScrollAnimation()
}



export default animations;