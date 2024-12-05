import { changeTab } from "./helper";
function contact(){
    const messages = {
        loading: 'Ładowanie',
        success: 'Skontaktujemy się z tobą jak najszybciej',
        failure: 'Coś poszło nie tak'
    }
    const modal = document.querySelector('.modal'),
    modalContent = modal.querySelector('.modal-content');
        
    emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        changeTab(modal, modalContent, messages.loading);
        emailjs.sendForm(serviceId, templateId, this)
        .then(() => {
            changeTab(modal, modalContent, messages.success);
            event.target.reset();
        }, (error) => {
            changeTab(modal, modalContent, messages.failure);
        });

    });


}

export default contact;