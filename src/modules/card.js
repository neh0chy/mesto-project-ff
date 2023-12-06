import {
  cardTemplate,
  modalImage,
  modalImageImage,
  modalImageTitle
} from './constants';
import { openModal } from './modal';

// Функция создания карточки
export function createCard(card, deleteCallBack) {
  const cardElement = cardTemplate
    .querySelector('.places__item')
    .cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const cardLink = cardElement.querySelector('.card__image');
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');

  cardLink.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;

  cardImage.addEventListener('click', () => {
    loadModalImageInfo(card.link, card.name);
    openModal(modalImage);
  });

  deleteButton.addEventListener('click', deleteCallBack);

  return cardElement;
}

// Функция наполнения тимплейта данными об открываемой карточке
function loadModalImageInfo(cardLink, cardName) {
  modalImageTitle.textContent = cardName;
  modalImageImage.src = cardLink;
  modalImageImage.alt = cardName;
}

// Функция добавления карточки
export function renderCard(card, container) {
  container.append(card);
}

export function renderNewCard(card, container) {
  container.prepend(card);
}

// Функция удаления карточки
export function deleteCard(evt) {
  evt.target.closest('.card').remove();
}
