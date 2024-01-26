import { inventory } from './inventory'
import { vehicle } from './vehicle'
import { signup } from './signup'
import Alpine from 'alpinejs'

window.inventory = inventory
window.vehicle = vehicle
window.signup = signup


const modalEl = document.getElementById('promo-popup');
const promoModal = new Modal(modalEl, {
    placement: 'center'
});

const checkOpening = Alpine.store('openingPopup')

console.log(checkOpening);

if (!checkOpening) {
    //promoModal.show();
}

const closeModalEl = document.getElementById('close-modal');
if (closeModalEl) {
closeModalEl.addEventListener('click', function() {
    promoModal.hide();
});
}
window.openModalEl = document.getElementById('open-modal');
if (window.openModalEl) {
window.openModalEl.addEventListener('click', function() {
    Alpine.store('openingPopup', true);
    promoModal.show();
})
}
