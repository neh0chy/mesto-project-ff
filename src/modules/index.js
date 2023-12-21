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
import { createCard, deleteCard, setLike } from './card';
import { openModal, handleCloseClick, closeModal } from './modal';
import { enableValidation, clearValidation } from './validation';
import { getInitialCards, getUserInfo, patchUserInfo, postNewCard } from './api';

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

// Вывести карточки на страницу
const promises = [getInitialCards(), getUserInfo()];
Promise.all(promises)
  .then(([cards, user]) => {
    cards.forEach((card) => {
      const newCard = createCard(card, deleteCard, openModalImage, user);
      renderCard(newCard, cardContainer);
    });
  })
  .catch((err) => console.log(err));

// Загрузка данных о юзере в разметку
getUserInfo()
  .then((res) => {
    profileTitle.textContent = res.name;
    profileDescription.textContent = res.about;
  })
  .catch((err) => console.log(err));

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
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  clearValidation(modalEditProfile, validationConfig);
  openModal(modalEditProfile);
});

// Слушатель кнопки добавления карточки
placeAddBtn.addEventListener('click', () => {
  openModal(modalAddPlace);
});

// Функция обработки сабмита редактирования профиля
function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  patchUserInfo(nameInput.value, jobInput.value)
    .then(() => {
      profileTitle.textContent = nameInput.value;
      profileDescription.textContent = jobInput.value;
    })
    .catch((err) => console.log(err));
}

// Функция обработки сабмита добавления нового места
function handleNewPlaceSubmit(evt) {
  evt.preventDefault();
  postNewCard(`${titleInput.value}`, `${linkInput.value}`)
    .then(() => {
      const newItem = {};
      newItem.name = `${titleInput.value}`;
      newItem.link = `${linkInput.value}`;
      newItem.likes = [];
      newItem.owner = '';
      const newCard = createCard(newItem, deleteCard, openModalImage);
      renderNewCard(newCard, cardContainer);
      clearValidation(modalAddPlace, validationConfig);
      formNewPlace.reset();
    })
    .catch((err) => console.log(err));
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
