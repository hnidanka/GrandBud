import {addScrollEventListeners, navigateTo , scrollToServiceFromUrl} from './helper.js';
async function priceList(){
    const scrollBtn = document.querySelector('.scrollBtn');
    scrollBtn.addEventListener('click', (e)=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    async function initPricelistNav() {
        const pricelistNav = document.querySelector('#pricelistNav');
        if (!pricelistNav) return; 
        try {
        const response = await fetch('data/pricelist.json');
       if(!response.ok){
        throw new Error('Error in try')
       }
        const {pricelist} = await response.json();
        const categotyList = document.createElement('ul')
        categotyList.classList.add('categotyList')
        pricelist.forEach(elem=>{
            const category = document.createElement('li')
            category.setAttribute('data-target', `${elem.id}`);
            category.textContent = elem.category;
            category.classList.add('category');
            categotyList.appendChild(category);
            
        })
        pricelistNav.appendChild(categotyList);

        addScrollEventListeners('#pricelistNav li');
        } catch (error) {
            console.log('Error')
        }
        
        
    }
    initPricelistNav()

    async function initPricelistNavSelect(){
        const pricelistNavSelect = document.querySelector('#pricelistNav-select');
        if (!pricelistNavSelect) return; 
        try {
        const response = await fetch('data/pricelist.json');
       if(!response.ok){
        throw new Error('Error in try')
       }
        const {pricelist} = await response.json();
        const categoryList = document.createElement('select')
        categoryList.setAttribute('name', 'categoryList');
        categoryList.setAttribute('id', 'categoryList');
        pricelist.forEach(elem=>{
            const category = document.createElement('option')
            category.setAttribute('value', elem.id);
            category.textContent = elem.category;
            categoryList.appendChild(category);
            
        })
        pricelistNavSelect.appendChild(categoryList);

        addScrollEventListeners('#pricelistNav-select select');
        } catch (error) {
            console.log('Error')
        }
    }
    initPricelistNavSelect()

    // tables
    class PricelistCategotyItem{
        constructor(id, name, price_net, unit){
            this.id = id;
            this.name = name;
            this.price_net = price_net;
            this.unit = unit;
        }

        addItem(){
            const row = document.createElement('tr');
            row.innerHTML= `
            <td class="column-category-lp">${this.id}</td>
            <td class="column-category-name">${this.name}</td>
            <td class="column-category-price">${this.price_net}</td>
            <td class="column-category-unit">${this.unit}</td>`
            return row;
        }
    }
    class PricelistCategoty{
        constructor(id,category, items){
            this.id = id;
            this.category = category;
            this.items = items;
        }
        addCategoryHeader(){
            const mainSection = document.querySelector('#pricelist'),
            table = document.createElement('table'),
             thead = document.createElement('thead');
             thead.innerHTML = `<tr>
                <th>Lp.</th>
                <th>${this.category}</th>
                <th>Cena netto (PLN)</th>
                <th>j.m.</th>
            </tr>`
            table.appendChild(thead);
            table.setAttribute('id', `${this.id}`)

            const tbody = document.createElement('tbody')
            this.items.forEach(({item_id, name, price_net, unit})=>{
                const categoryItem = new PricelistCategotyItem(item_id,name,price_net,unit);
                tbody.appendChild(categoryItem.addItem());
            })
            table.appendChild(tbody);

            mainSection.appendChild(table);

        }

      
    }

const response = await fetch('data/pricelist.json');
if (response.ok) {
    const data = await response.json();
    
    data.pricelist.forEach(({ id, category, items }) => {
        new PricelistCategoty(id, category, items).addCategoryHeader();
    });
} else {
    console.error("Błąd w pobieraniu danych:", response.status);
}


    navigateTo("header nav ul li")
    const params = new URLSearchParams(window.location.search);
    const serviceId = params.get('service');
    if (serviceId) {
     scrollToServiceFromUrl(serviceId);
    }

    const menuItems = document.querySelectorAll('nav ul li')
    if (menuItems.length > 0) {
        menuItems.forEach(section => {
            section.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = section.getAttribute('data-target');
                console.log(targetId)
                if (targetId) {
                    window.location.href = `./?section=${encodeURIComponent(targetId)}`;
                }
            });
        });
    }
}
    
export default priceList;
