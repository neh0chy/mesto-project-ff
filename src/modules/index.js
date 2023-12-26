import '../styles/index.css';
import {
  cardContainer,
  modalEditProfile,
  modalAddPlace,
  modalAvatar,
  modalQuestion,
  profileEditBtn,
  placeAddBtn,
  formEditProfile,
  formNewPlace,
  formAvatarChange,
  formQuestion,
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
import { createCard, setLike } from './card';
import { openModal, closeModal } from './modal';
import { enableValidation, clearValidation } from './validation';
import {
  getInitialCards,
  getUserInfo,
  patchUserInfo,
  postNewCard,
  patchAvatar,
  deleteMyCard
} from './api';
import { profileTitle, profileDescription } from './constants';
let currentUser = '';
let cardToDelete = null;

// Вывести карточки на страницу
const promises = [getInitialCards(), getUserInfo()];
Promise.all(promises)
  .then(([cards, user]) => {
    avatarImg.setAttribute('style', `background-image: url(${user.avatar})`);
    currentUser = user;
    profileTitle.textContent = user.name;
    profileDescription.textContent = user.about;
    cards.forEach((card) => {
      const newCard = createCard(
        card,
        handleQuestionModal,
        setLike,
        openModalImage,
        user
      );
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

// Слушатели закрытия по крестику и оверлею
const allModals = document.querySelectorAll('.popup');
allModals.forEach((modal) => {
  modal.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup__close')) {
      closeModal(modal);
    }
    if (evt.target.classList.contains('popup')) {
      closeModal(modal);
    }
  });
});

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
  evt.submitter.textContent = 'Сохранение...';
  patchUserInfo(nameInput.value, jobInput.value)
    .then(() => {
      profileTitle.textContent = nameInput.value;
      profileDescription.textContent = jobInput.value;
      closeModal(modalEditProfile);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      evt.submitter.textContent = 'Сохранить';
    });
}

// Функция обработки сабмита добавления нового места
function handleNewPlaceSubmit(evt) {
  evt.preventDefault();
  evt.submitter.textContent = 'Сохранение...';
  postNewCard(titleInput.value, linkInput.value)
    .then(() => {
      const newItem = {};
      newItem.name = `${titleInput.value}`;
      newItem.link = `${linkInput.value}`;
      newItem.likes = [];
      newItem.owner = currentUser;
      const newCard = createCard(
        newItem,
        handleQuestionModal,
        setLike,
        openModalImage,
        currentUser
      );
      renderNewCard(newCard, cardContainer);
      closeModal(modalAddPlace);
      clearValidation(modalAddPlace, validationConfig);
      formNewPlace.reset();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      evt.submitter.textContent = 'Сохранить';
    });
}

// Функция обработки сабмита смены аватара
function handleChangeAvatar(evt) {
  evt.preventDefault();
  evt.submitter.textContent = 'Сохранение...';
  patchAvatar(avatarInput.value)
    .then(() => {
      avatarImg.setAttribute('style', `background-image: url(${avatarInput.value})`);
      closeModal(modalAvatar);
      formAvatarChange.reset();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      evt.submitter.textContent = 'Сохранить';
    });
}

// Слушатель сабмита редактирования профиля
formEditProfile.addEventListener('submit', handleEditProfileSubmit);

// Слушатель сабмита добавления нового места
formNewPlace.addEventListener('submit', handleNewPlaceSubmit);

// Слушатель сабмита смены аватара
formAvatarChange.addEventListener('submit', handleChangeAvatar);

// Слушатель сабмита подтверждения удаления карточки
formQuestion.addEventListener('submit', (evt) => {
  evt.preventDefault();
  evt.submitter.textContent = 'Удаление...';
  deleteMyCard(cardToDelete.parentElement)
    .then(() => {
      closeModal(modalQuestion);
      cardToDelete.closest('.card').remove();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      evt.submitter.textContent = 'Да';
    });
});

// Функция обработки модального окна удаления карточки
export function handleQuestionModal(evt) {
  cardToDelete = evt.target;
  openModal(modalQuestion);
}

enableValidation(validationConfig);
