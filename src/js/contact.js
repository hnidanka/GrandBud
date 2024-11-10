import { changeTab } from "./helper";
function contact(){
    const messages = {
        loading: 'Ładowanie',
        success: 'Skontaktujemy się z tobą jak najszybciej',
        failure: 'Coś poszło nie tak'
    }
    const modal = document.querySelector('.modal'),
    modalContent = modal.querySelector('.modal-content');
    
    emailjs.init("1mXxwMPcfi6IffBb9");
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        changeTab(modal, modalContent, messages.loading);
        emailjs.sendForm('service_i2jy12d', 'template_wvdsbu8', this)
            .then(() => {
                changeTab(modal, modalContent, messages.success);

                event.target.reset()
            }, (error) => {
                changeTab(modal, modalContent, messages.failure);
            });
    });


}

export default contact;