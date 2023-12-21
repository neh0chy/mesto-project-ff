// Шаблон и контейнер
export const cardTemplate = document.querySelector('#card-template').content;
export const cardContainer = document.querySelector('.places__list');

// Шаблоны модалок профиля и добавления карточки и их кнопки закрытия
export const modalEditProfile = document.querySelector('.popup_type_edit');
export const modalAddPlace = document.querySelector('.popup_type_new-card');

// Шаблон изображения с полями и кнопка закрытия
export const modalImage = document.querySelector('.popup_type_image');
export const modalImageTitle = modalImage.querySelector('.popup__caption');
export const modalImageImage = modalImage.querySelector('.popup__image');
export const modalImageClose = modalImage.querySelector('.popup__close');

// Поля профиля
export const profileTitle = document.querySelector('.profile__title');
export const profileDescription = document.querySelector('.profile__description');

// Элементы для смены аватара
export const modalAvatar = document.querySelector('.popup_type_edit-avatar');
export const avatarEditBtn = document.querySelector('.profile__image-overlay');
export const avatarImg = document.querySelector('.profile__image');
export const formAvatarChange = document.forms['edit-avatar'];
export const avatarInput = formAvatarChange.link;

// Кнопки
export const profileEditBtn = document.querySelector('.profile__edit-button');
export const placeAddBtn = document.querySelector('.profile__add-button');

// Форма профиля и поля формы
export const formEditProfile = document.forms['edit-profile'];
export const nameInput = formEditProfile.name;
export const jobInput = formEditProfile.description;

// Форма добавления карточки и поля формы
export const formNewPlace = document.forms['new-place'];
export const titleInput = formNewPlace['place-name'];
export const linkInput = formNewPlace.link;

// Настройки валидации
export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
