import { cardTemplate } from './constants';
import { deleteMyCard, putLike, deleteLike } from './api';

// Функция создания карточки
export function createCard(card, deleteCallBack, imageCallBack, user) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const cardLink = cardElement.querySelector('.card__image');
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardLike = cardElement.querySelector('.card__like-button');
  const cardLikesNumber = cardElement.querySelector('.card__like-count');

  cardElement.id = card._id;
  cardLink.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;

  cardImage.addEventListener('click', () => imageCallBack(cardImage, cardTitle));
  cardLike.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('card__like-button_is-active')) {
      deleteLike(evt.target.parentElement.closest('.card'))
        .then(() => {
          evt.target.classList.toggle('card__like-button_is-active');
          cardLikesNumber.textContent = Number(cardLikesNumber.textContent) - 1;
        })
        .catch((err) => console.log(err));
    } else {
      putLike(evt.target.parentElement.closest('.card'))
        .then(() => {
          evt.target.classList.toggle('card__like-button_is-active');
          cardLikesNumber.textContent = Number(cardLikesNumber.textContent) + 1;
        })
        .catch((err) => console.log(err));
    }
  });
  deleteButton.addEventListener('click', deleteCallBack);
  cardLikesNumber.textContent = card.likes.length ? card.likes.length : 0;

  if (user) {
    if (card.owner._id !== user._id) {
      deleteButton.classList.add('card__delete-button_disabled');
    }

    card.likes.forEach((item) => {
      if (item._id === user._id) {
        cardLike.classList.toggle('card__like-button_is-active');
      }
    });
  }

  return cardElement;
}

// Функция удаления карточки
export function deleteCard(evt) {
  deleteMyCard(evt.target.parentElement)
    .then(() => {
      evt.target.closest('.card').remove();
    })
    .catch((err) => console.log(err));
}
