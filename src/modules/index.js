import '../styles/index.css';
import {
  cardContainer,
  modalEditProfile,
  modalAddPlace,
  profileEditBtn,
  placeAddBtn,
  formEditProfile,
  formNewPlace,
  nameInput,
  jobInput,
  titleInput,
  linkInput
} from './constants';
import { modalImage, modalImageTitle, modalImageImage } from './constants';
import { initialCards } from './cards';
import { createCard, renderCard, setLike } from './card';
import { openModal, closeModal } from './modal';

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

// Вывести карточки на страницу
initialCards.forEach((card) => {
  const newCard = createCard(card, deleteCard, setLike, openModalImage);
  renderCard(newCard, cardContainer);
});

// Функция добавления новой карточки пользователем
function renderNewCard(card, container) {
  container.prepend(card);
}

// Функция удаления карточки
function deleteCard(evt) {
  evt.target.closest('.card').remove();
}

// Функция открытия изображения
export function openModalImage(image, title) {
  modalImageTitle.textContent = title.textContent;
  modalImageImage.src = image.src;
  modalImageImage.alt = image.alt;
  openModal(modalImage);
}

// Обработчик закрытия по крестику и оверлею
function handleCloseClick(evt) {
  const modal = evt.target.closest('.popup');
  if (evt.target.classList.contains('popup__close')) {
    closeModal(modal);
  }
  if (evt.target.classList.contains('popup')) {
    closeModal(modal);
  }
}

// Слушатели модальных окон
modalEditProfile.addEventListener('click', handleCloseClick);
modalAddPlace.addEventListener('click', handleCloseClick);
modalImage.addEventListener('click', handleCloseClick);

// Слушетель кнопки редактирования профиля
profileEditBtn.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(modalEditProfile);
});

// Слушатель кнопки добавления карточки
placeAddBtn.addEventListener('click', () => {
  openModal(modalAddPlace);
});

// Функция обработки сабмита редактирования профиля
function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
}

// Функция обработки сабмита добавления нового места
function handleNewPlaceSubmit(evt) {
  evt.preventDefault();
  const newItem = {};
  newItem.name = `${titleInput.value}`;
  newItem.link = `${linkInput.value}`;
  const newCard = createCard(newItem, deleteCard, setLike, openModalImage);
  renderNewCard(newCard, cardContainer);
  formNewPlace.reset();
}

// Слушатель сабмита редактирования профиля
formEditProfile.addEventListener('submit', (evt) => {
  handleEditProfileSubmit(evt);
  closeModal(modalEditProfile);
});

// Слушатель сабмита добавления нового места
formNewPlace.addEventListener('submit', (evt) => {
  handleNewPlaceSubmit(evt);
  closeModal(modalAddPlace);
});
