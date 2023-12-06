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
  renderNewCard,
  setLike
} from './modules/card';
import { openModal, openModalImage, closeModal } from './modules/modal';

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

// Вывести карточки на страницу
initialCards.forEach((card) => {
  const newCard = createCard(card, deleteCard, setLike, openModalImage);
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
  closeModal();
  formNewPlace.reset();
}

// Слушатель сабмита редактирования профиля
formEditProfile.addEventListener('submit', (evt) => {
  handleEditProfileSubmit(evt);
  closeModal();
});

// Слушатель сабмита добавления нового места
formNewPlace.addEventListener('submit', (evt) => {
  handleNewPlaceSubmit(evt);
});
