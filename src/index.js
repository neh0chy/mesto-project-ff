import './styles/index.css';
import { initialCards } from './modules/cards';
import { createCard, renderCard, deleteCard } from './modules/card';
import { openModal, closeModal } from './modules/modal';

const cardContainer = document.querySelector('.places__list');
const popup = document.querySelector('.popup');

// Вывести карточки на страницу
initialCards.forEach((card) => {
  const newCard = createCard(card, deleteCard);
  renderCard(newCard, cardContainer);
});
