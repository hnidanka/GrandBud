import { fetchData } from "./helper";
function services(){
    const servicesList = document.querySelector('#services-list'),
        serviceBlocks = servicesList.querySelectorAll('.service-block');

    async function showServices() {
        const { services } = await fetchData('data/services.json');
        serviceBlocks.forEach((elem, key) => {
            elem.innerHTML = `
                <h3 class="service-name"> ${services[key].name} </h3>
                <img class="service-icon" src=${services[key].img} alt=${services[key].name}>
                <p class="service-description"> ${services[key].description}</p>
            `;
            
        });
    }
    showServices();
}

export default services