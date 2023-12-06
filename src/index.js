import './styles/index.css';
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
} from './modules/constants';
import { initialCards } from './modules/cards';
import {
  createCard,
  renderCard,
  deleteCard,
  renderNewCard
} from './modules/card';
import { openModal, closeModal } from './modules/modal';

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

// Вывести карточки на страницу
initialCards.forEach((card) => {
  const newCard = createCard(card, deleteCard);
  renderCard(newCard, cardContainer);
});

// Слушетель кнопки редактирования профиля
profileEditBtn.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(modalEditProfile, formEditProfile);
});

// Слушатель кнопки добавления карточки
placeAddBtn.addEventListener('click', () => {
  openModal(modalAddPlace);
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
}

function handleNewPlaceSubmit(evt) {
  evt.preventDefault();
  const newItem = {};
  newItem.name = `${titleInput.value}`;
  newItem.link = `${linkInput.value}`;
  const newCard = createCard(newItem, deleteCard);
  renderNewCard(newCard, cardContainer);
  closeModal();
}

formEditProfile.addEventListener('submit', (evt) => {
  handleEditProfileSubmit(evt);
  closeModal();
});

formNewPlace.addEventListener('submit', (evt) => {
  handleNewPlaceSubmit(evt);
});

cardContainer.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('card__like-button')) {
    evt.target.classList.toggle('card__like-button_is-active');
  }
});
