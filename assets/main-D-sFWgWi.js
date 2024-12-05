(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const v of n.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&c(v)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();async function P(t){try{return await(await fetch(t)).json()}catch(e){return console.error("Error fetching data:",e.message),null}}function q(t){const e=document.querySelectorAll(t);e.forEach(i=>{i.addEventListener(i.tagName==="SELECT"?"change":"click",c=>{c.preventDefault();const o=i.tagName==="SELECT"?c.target.value:i.getAttribute("data-target");_(o),e.forEach(n=>n.classList.remove("active")),c.target.classList.add("active")})})}function _(t){if(t==="pricelist"){window.location.href="pricelist.html";return}const e=document.getElementById(t);e&&(e.scrollIntoView({behavior:"smooth",block:"start"}),W())}function W(){const t=document.querySelector("#menuBar-icon"),e=document.querySelector(".logo-container"),i=document.querySelector("nav ul"),c=document.querySelector("nav");t&&e&&c&&(t.classList.remove("full-width"),i.classList.remove("show","column"),e.classList.remove("hide"),c.classList.remove("column"))}function H(t){if(console.log(t),t){const e=document.getElementById(t);console.log(e),e&&e.scrollIntoView({behavior:"smooth",block:"start"})}}function T(t){const e="/GrandBud/";document.querySelectorAll(t).forEach(c=>{c.addEventListener("click",o=>{o.preventDefault(),t==="#services .services-action button"?window.location.href=`${e}pricelist.html`:window.location.href=`${e}`})})}function A(t,e,i=""){e.innerHTML=`<p>${i}</p>`,i==="Ładowanie"&&(e.innerHTML=`
        <p>${i}</p>
        <div class="newtons-cradle">
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
        </div>`),t.classList.remove("hide"),t.classList.add("show","fade"),setTimeout(()=>{t.classList.remove("show","fade"),t.classList.add("hide")},3e3)}function O(){const t=l=>l<=9?`0${l}`:l;function e(l,y){l.forEach(u=>u.classList.remove("active")),l[y].classList.add("active")}function i(l,y,u,S,D,M){let m=1,b=0,w=0,N=window.getComputedStyle(l).width;y.style.width=`${N.slice(0,N.length-2)*u.length}px`,S.textContent=t(u.length),e(D,0),u.forEach(k=>{b=k.clientWidth}),u[0].classList.add("focused");const $=(k,j)=>{u[j-1].classList.add("focused"),M.textContent=t(j),y.style.transform=`translateX(-${k}px)`};return{nextSlide:()=>(u[m-1].classList.remove("focused"),w>=b*(u.length-1)?(w=0,m=1):(w+=b,m+=1),$(w,m),m-1),prevSlide:()=>(u[m-1].classList.remove("focused"),w===0?(w=b*(u.length-1),m=u.length):(w-=b,m-=1),$(w,m),m-1),navToSlide:k=>(u[m-1].classList.remove("focused"),m=parseInt(k),w=(m-1)*b,$(w,m),m-1)}}async function c(l,y){const S=(await P(y)).works[l-1];S?(E.classList.add("fade"),E.innerHTML=`
                <h2>${S.header}</h2>
                <p>${S.location}</p>
                <p>${S.leadTime}</p>
                <p>${S.scopeOfWork}</p>
            `):E.innerHTML="No description available."}const o=l=>{e(f,l),c(l+1,"data/works.json"),E.classList.remove("fade")},n=document.querySelector(".works-slider-actions"),v=n.querySelector(".current"),p=n.querySelector(".total"),g=document.querySelector(".next-action"),d=document.querySelector(".prev-action"),a=document.querySelector(".works-slider"),r=document.querySelector(".works-slider-inner"),s=document.querySelectorAll(".works-slide"),h=document.querySelector(".slider-nav"),f=h.querySelectorAll(".block"),E=document.querySelector(".work-slide-descr"),L=i(a,r,s,p,f,v);c(1,"data/works.json"),g.addEventListener("click",l=>{l.preventDefault(),o(L.nextSlide())}),d.addEventListener("click",l=>{o(L.prevSlide())}),f.forEach(l=>{l.addEventListener("click",y=>{const u=y.target.getAttribute("data-to-slide");o(L.navToSlide(u))})});let I=0,C=0,B=!1;a.addEventListener("touchstart",l=>{I=l.touches[0].clientX,B=!0}),a.addEventListener("touchmove",l=>{B&&(C=l.touches[0].clientX)}),a.addEventListener("touchend",()=>{if(!B)return;const l=I-C;l>50?o(L.nextSlide()):l<-50&&o(L.prevSlide()),B=!1})}function X(){const t=document.querySelector("#services-list"),e=t.querySelectorAll(".service-block");async function i(){const{services:c}=await P("data/services.json");e.forEach((o,n)=>{o.innerHTML=`
                <h3 class="service-name"> ${c[n].name} </h3>
                <img class="service-icon" src=${c[n].img} alt=${c[n].name}>
                <p class="service-description"> ${c[n].description}</p>
            `})}i()}function U(){const t={loading:"Ładowanie",success:"Skontaktujemy się z tobą jak najszybciej",failure:"Coś poszło nie tak"},e=document.querySelector(".modal"),i=e.querySelector(".modal-content");emailjs.init("1mXxwMPcfi6IffBb9");const c="service_i2jy12d",o="template_wvdsbu8";document.getElementById("contact-form").addEventListener("submit",function(n){n.preventDefault(),A(e,i,t.loading),emailjs.sendForm(c,o,this).then(()=>{A(e,i,t.success),n.target.reset()},v=>{A(e,i,t.failure)})})}function x(){const t=document.querySelector("nav"),e=document.querySelector("#menuBar-icon"),i=document.querySelector(".logo-container"),c=document.querySelector("nav ul");window.addEventListener("click",g=>{const d=g.target;window.innerWidth<=768&&(e.contains(d)?t.classList.contains("column")?n():o():c.contains(d)?d.tagName==="LI"&&n():n())});function o(){t.classList.add("column"),e.classList.add("hide"),c.classList.add("show"),i.classList.add("hide")}function n(){t.classList.remove("column"),e.classList.remove("hide"),c.classList.remove("show"),i.classList.remove("hide")}window.location.pathname=="/"&&T("#services .services-action button"),T("header nav .logo-container img");const p=new URLSearchParams(window.location.search).get("section");p&&H(p)}async function R(){document.querySelector(".scrollBtn").addEventListener("click",d=>{window.scrollTo({top:0,behavior:"smooth"})});async function e(){const d=document.querySelector("#pricelistNav");if(d)try{const a=await fetch("data/pricelist.json");if(!a.ok)throw new Error("Error in try");const{pricelist:r}=await a.json(),s=document.createElement("ul");s.classList.add("categotyList"),r.forEach(h=>{const f=document.createElement("li");f.setAttribute("data-target",`${h.id}`),f.textContent=h.category,f.classList.add("category"),s.appendChild(f)}),d.appendChild(s),q("#pricelistNav li")}catch{console.log("Error")}}e();async function i(){const d=document.querySelector("#pricelistNav-select");if(d)try{const a=await fetch("data/pricelist.json");if(!a.ok)throw new Error("Error in try");const{pricelist:r}=await a.json(),s=document.createElement("select");s.setAttribute("name","categoryList"),s.setAttribute("id","categoryList"),r.forEach(h=>{const f=document.createElement("option");f.setAttribute("value",h.id),f.textContent=h.category,s.appendChild(f)}),d.appendChild(s),q("#pricelistNav-select select")}catch{console.log("Error")}}i();class c{constructor(a,r,s,h){this.id=a,this.name=r,this.price_net=s,this.unit=h}addItem(){const a=document.createElement("tr");return a.innerHTML=`
            <td class="column-category-lp">${this.id}</td>
            <td class="column-category-name">${this.name}</td>
            <td class="column-category-price">${this.price_net}</td>
            <td class="column-category-unit">${this.unit}</td>`,a}}class o{constructor(a,r,s){this.id=a,this.category=r,this.items=s}addCategoryHeader(){const a=document.querySelector("#pricelist"),r=document.createElement("table"),s=document.createElement("thead");s.innerHTML=`<tr>
                <th>Lp.</th>
                <th>${this.category}</th>
                <th>Cena netto (PLN)</th>
                <th>j.m.</th>
            </tr>`,r.appendChild(s),r.setAttribute("id",`${this.id}`);const h=document.createElement("tbody");this.items.forEach(({item_id:f,name:E,price_net:L,unit:I})=>{const C=new c(f,E,L,I);h.appendChild(C.addItem())}),r.appendChild(h),a.appendChild(r)}}const n=await fetch("data/pricelist.json");n.ok?(await n.json()).pricelist.forEach(({id:a,category:r,items:s})=>{new o(a,r,s).addCategoryHeader()}):console.error("Błąd w pobieraniu danych:",n.status),T("header nav ul li");const p=new URLSearchParams(window.location.search).get("service");p&&H(p);const g=document.querySelectorAll("nav ul li");g.length>0&&g.forEach(d=>{d.addEventListener("click",a=>{a.preventDefault();const r=d.getAttribute("data-target");console.log(r),r&&(window.location.href=`./?section=${encodeURIComponent(r)}`)})})}function V(){const t=document.querySelectorAll(".service-block");document.querySelector("#services-list");const e=document.querySelectorAll(".about-us-offer ul li"),i=document.querySelectorAll(".slogan"),c=document.querySelectorAll(".about-us-image-block img"),o=document.querySelector(".home-content .home-descr p"),n=document.querySelector(".home-content .home-action button"),v=r=>{const s=r.getBoundingClientRect();return s.top>=0&&s.bottom<=window.innerHeight},p=(r,s="in-view")=>{r.classList.add(s)},g=(r,s)=>{setTimeout(()=>{p(r)},s*100)},d=r=>{window.innerWidth>768?r.forEach((s,h)=>{v(s)&&!s.classList.contains("in-view")&&g(s,h)}):r.forEach(s=>{v(s)&&!s.classList.contains("in-view")&&s.classList.add("in-view")})},a=()=>{window.addEventListener("scroll",()=>{d(t),d(e),d(i),d(c)})};p(o),setTimeout(()=>{p(n)},1e3),a()}window.addEventListener("load",()=>{window.location.pathname.endsWith("/")||window.location.pathname.endsWith("index.html")?(V(),X(),O(),U(),q("nav ul li"),q(".about-us-action"),q(".home-action button"),x()):window.location.pathname.endsWith("pricelist.html")&&(R(),x())});
