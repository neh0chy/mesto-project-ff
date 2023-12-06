import { cardTemplate } from './constants';

// Функция создания карточки
export function createCard(card, deleteCallBack, likeCallBack, imageCallBack) {
  const cardElement = cardTemplate
    .querySelector('.places__item')
    .cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const cardLink = cardElement.querySelector('.card__image');
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardLike = cardElement.querySelector('.card__like-button');

  cardLink.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;

  cardImage.addEventListener('click', imageCallBack);
  cardLike.addEventListener('click', likeCallBack);
  deleteButton.addEventListener('click', deleteCallBack);
  return cardElement;
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

// Функция обработки лайка
export function setLike(evt) {
  if (evt.target.classList.contains('card__like-button')) {
    evt.target.classList.toggle('card__like-button_is-active');
  }
}
