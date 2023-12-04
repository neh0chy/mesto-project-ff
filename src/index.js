import './styles/index.css';
import {
  cardContainer,
  modalEditProfile,
  modalAddPlace,
  profileEditBtn,
  placeAddBtn
} from './modules/constants';
import { initialCards } from './modules/cards';
import { createCard, renderCard, deleteCard } from './modules/card';
import { openModal } from './modules/modal';

// Вывести карточки на страницу
initialCards.forEach((card) => {
  const newCard = createCard(card, deleteCard);
  renderCard(newCard, cardContainer);
});

// Слушетель кнопки редактирования профиля
profileEditBtn.addEventListener('click', () => {
  openModal(modalEditProfile);
});

// Слушатель кнопки добавления карточки
placeAddBtn.addEventListener('click', () => {
  openModal(modalAddPlace);
});
