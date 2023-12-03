import './styles/index.css';
import { initialCards } from './modules/cards';

// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardContainer = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(card, deleteCallBack) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardElement.querySelector('.card__image').src = card.link;
  cardElement.querySelector('.card__image').alt = card.name;
  cardElement.querySelector('.card__title').textContent = card.name;

  deleteButton.addEventListener('click', (evt) => {
    deleteCallBack(evt);
  });

  return cardElement;
}

function openPopup() {}

function closePopup() {}

function renderCard(card, container) {
  container.append(card);
}

// @todo: Функция удаления карточки
function deleteCard(evt) {
  evt.target.closest('.card').remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((card) => {
  const newCard = createCard(card, deleteCard);
  renderCard(newCard, cardContainer);
});
