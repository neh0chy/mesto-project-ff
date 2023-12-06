// Шаблон и контейнер
export const cardTemplate = document.querySelector('#card-template').content;
export const cardContainer = document.querySelector('.places__list');

// Шаблоны модалок профиля и добавления карточки
export const modalEditProfile = document.querySelector('.popup_type_edit');
export const modalAddPlace = document.querySelector('.popup_type_new-card');

// Шаблон изображения с полями
export const modalImage = document.querySelector('.popup_type_image');
export const modalImageTitle = modalImage.querySelector('.popup__caption');
export const modalImageImage = modalImage.querySelector('.popup__image');

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
