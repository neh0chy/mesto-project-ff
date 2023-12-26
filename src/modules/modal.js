// Функция открытия модального окна (общая) и добавление слушателей
export function openModal(modal) {
  modal.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeModalEsc);
}

// Функция закрытия модального окна и удаление слушателей
export function closeModal(modal) {
  modal.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeModalEsc);
}

// Обработчук закрытия модального окна по Esc
function closeModalEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closeModal(openedPopup);
  }
}
