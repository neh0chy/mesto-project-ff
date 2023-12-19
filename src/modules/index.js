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
  linkInput,
  validationConfig
} from './constants';
import { modalImage, modalImageTitle, modalImageImage } from './constants';
import { initialCards } from './cards';
import { createCard, deleteCard, setLike } from './card';
import { openModal, handleCloseClick, closeModal } from './modal';
import { enableValidation, clearValidation } from './validation';

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

// Вывести карточки на страницу
initialCards.forEach((card) => {
  const newCard = createCard(card, deleteCard, setLike, openModalImage);
  renderCard(newCard, cardContainer);
});

// Функция добавления карточки
export function renderCard(card, container) {
  container.append(card);
}

// Функция добавления новой карточки пользователем
function renderNewCard(card, container) {
  container.prepend(card);
}

// Функция открытия изображения
export function openModalImage(image, title) {
  modalImageTitle.textContent = title.textContent;
  modalImageImage.src = image.src;
  modalImageImage.alt = image.alt;
  openModal(modalImage);
}

// Слушатели модальных окон
modalEditProfile.addEventListener('click', handleCloseClick);
modalAddPlace.addEventListener('click', handleCloseClick);
modalImage.addEventListener('click', handleCloseClick);

// Слушетель кнопки редактирования профиля
profileEditBtn.addEventListener('click', () => {
  clearValidation(modalEditProfile, validationConfig);
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
  clearValidation(modalAddPlace, validationConfig);
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

enableValidation(validationConfig);
