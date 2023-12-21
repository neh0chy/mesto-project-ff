import '../styles/index.css';
import {
  cardContainer,
  modalEditProfile,
  modalAddPlace,
  modalAvatar,
  profileEditBtn,
  placeAddBtn,
  formEditProfile,
  formNewPlace,
  formAvatarChange,
  nameInput,
  jobInput,
  titleInput,
  linkInput,
  avatarInput,
  validationConfig,
  avatarEditBtn,
  avatarImg
} from './constants';
import { modalImage, modalImageTitle, modalImageImage } from './constants';
import { createCard, deleteCard, setLike } from './card';
import { openModal, handleCloseClick, closeModal } from './modal';
import { enableValidation, clearValidation } from './validation';
import {
  getInitialCards,
  getUserInfo,
  patchUserInfo,
  postNewCard,
  patchAvatar
} from './api';
import { profileTitle, profileDescription } from './constants';
let currentUser = '';

// Вывести карточки на страницу
const promises = [getInitialCards(), getUserInfo()];
Promise.all(promises)
  .then(([cards, user]) => {
    avatarImg.setAttribute('style', `background-image: url(${user.avatar})`);
    currentUser = user;
    profileTitle.textContent = user.name;
    profileDescription.textContent = user.about;
    cards.forEach((card) => {
      const newCard = createCard(card, deleteCard, setLike, openModalImage, user);
      renderCard(newCard, cardContainer);
    });
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
modalAvatar.addEventListener('click', handleCloseClick);

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

// Слушатель кнопки смены аватара
avatarEditBtn.addEventListener('click', () => {
  openModal(modalAvatar);
});

// Функция обработки сабмита редактирования профиля
function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  formEditProfile.querySelector('.button').textContent = 'Сохранение...';
  patchUserInfo(nameInput.value, jobInput.value)
    .then(() => {
      profileTitle.textContent = nameInput.value;
      profileDescription.textContent = jobInput.value;
    })
    .catch((err) => console.log(err))
    .finally(() => {
      formEditProfile.querySelector('.button').textContent = 'Сохранить';
    });
}

// Функция обработки сабмита добавления нового места
function handleNewPlaceSubmit(evt) {
  evt.preventDefault();
  formNewPlace.querySelector('.button').textContent = 'Сохранение...';
  postNewCard(titleInput.value, linkInput.value)
    .then(() => {
      const newItem = {};
      newItem.name = `${titleInput.value}`;
      newItem.link = `${linkInput.value}`;
      newItem.likes = [];
      newItem.owner = currentUser;
      const newCard = createCard(
        newItem,
        deleteCard,
        setLike,
        openModalImage,
        currentUser
      );
      renderNewCard(newCard, cardContainer);
      clearValidation(modalAddPlace, validationConfig);
      formNewPlace.reset();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      formNewPlace.querySelector('.button').textContent = 'Сохранить';
    });
}

// Функция обработки сабмита смены аватара
function handleChangeAvatar(evt) {
  evt.preventDefault();
  formAvatarChange.querySelector('.button').textContent = 'Сохранение...';
  patchAvatar(avatarInput.value)
    .then(() => {
      avatarImg.setAttribute('style', `background-image: url(${avatarInput.value})`);
      // formAvatarChange.reset();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      formAvatarChange.querySelector('.button').textContent = 'Сохранить';
    });
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

// Слушатель сабмита смены аватара
formAvatarChange.addEventListener('submit', (evt) => {
  handleChangeAvatar(evt);
  closeModal(modalAvatar);
});

enableValidation(validationConfig);
