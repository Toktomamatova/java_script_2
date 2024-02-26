//MODAL♥
const modal = document.querySelector('.modal');
const modalTriggerButton = document.querySelector('#btn-get');
const modalCloseButton = document.querySelector('.modal_close');

let isModalOpenedAfterScroll = false;

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

const openModalAfterScroll = () => {
    if (!isModalOpenedAfterScroll && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        openModal();
        isModalOpenedAfterScroll = true;
    }
}

const openModalAfterTenSec = () => {
    setTimeout(openModal, 10000);
}

modalTriggerButton.onclick = () => openModal();
modalCloseButton.onclick = () => closeModal();
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
}

window.addEventListener('scroll', openModalAfterScroll);
window.addEventListener('load', openModalAfterTenSec);
