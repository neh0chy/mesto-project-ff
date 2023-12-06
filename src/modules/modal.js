import { modalImage, modalImageTitle, modalImageImage } from './constants';

// Функция открытия модального окна (общая) и добавление слушателей
export function openModal(modal) {
  modal.classList.add('popup_is-opened');
  document.addEventListener('click', closeModalButton);
  document.addEventListener('click', closeModalOverlay);
  document.addEventListener('keydown', closeModalEsc);
}

// Функция загрузки данных изображения в тимплейт
export function openModalImage(evt) {
  const cardItem = evt.target.closest('.card');
  const image = cardItem.querySelector('.card__image');
  const title = cardItem.querySelector('.card__title');
  modalImageTitle.textContent = title.textContent;
  modalImageImage.src = image.src;
  modalImageImage.alt = image.alt;
  openModal(modalImage);
}

// Функция закрытия модального окна и удаление слушателей
export function closeModal() {
  const openedModal = document.querySelector('.popup_is-opened');
  openedModal.classList.remove('popup_is-opened');
  document.removeEventListener('click', closeModalButton);
  document.removeEventListener('click', closeModalOverlay);
  document.removeEventListener('keydown', closeModalEsc);
}

// Обработчук закрытия модального окна по крестику
function closeModalButton(evt) {
  if (evt.target.classList.contains('popup__close')) {
    closeModal();
  }
}

// Обработчук закрытия модального окна по Esc
function closeModalEsc(evt) {
  if (evt.key === 'Escape') {
    closeModal();
  }
}

// Обработчук закрытия модального окна по клику на оверлей
function closeModalOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    closeModal();
  }
}
