// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardContainer = document.querySelector('.places__list');

// @todo: Функция создания карточки
function renderCard(card, cardDelete) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardElement.querySelector('.card__image').src = card.link;
  cardElement.querySelector('.card__title').textContent = card.name;

  deleteButton.addEventListener('click', (evt) => {
    cardDelete(evt);
  });

  cardContainer.append(cardElement);
}

// @todo: Функция удаления карточки
function cardDelete(evt) {
  evt.target.closest('.card').remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((card) => {
  renderCard(card, cardDelete);
});
