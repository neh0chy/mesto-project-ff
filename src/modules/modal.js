export function openModal(modal) {
  modal.classList.add('popup_is-opened');
  document.addEventListener('click', closeModalButton);
  document.addEventListener('click', closeModalOverlay);
  document.addEventListener('keydown', closeModalEsc);
}

export function closeModal() {
  const openedModal = document.querySelector('.popup_is-opened');
  openedModal.classList.remove('popup_is-opened');
  document.removeEventListener('click', closeModalButton);
  document.removeEventListener('click', closeModalOverlay);
  document.removeEventListener('keydown', closeModalEsc);
}

function closeModalButton(evt) {
  if (evt.target.classList.contains('popup__close')) {
    closeModal();
  }
}

function closeModalEsc(evt) {
  if (evt.key === 'Escape') {
    closeModal();
  }
}

function closeModalOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    closeModal();
  }
}
