const cardTemplate = document.querySelector('#card-template').content;

// Функция создания карточки
function createCard(card, deleteCallBack) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardElement.querySelector('.card__image').src = card.link;
  cardElement.querySelector('.card__image').alt = card.name;
  cardElement.querySelector('.card__title').textContent = card.name;

  deleteButton.addEventListener('click', (evt) => {
    deleteCallBack(evt);
  });

  return cardElement;
}

// Функция добавления карточки
function renderCard(card, container) {
  container.append(card);
}

// Функция удаления карточки
function deleteCard(evt) {
  evt.target.closest('.card').remove();
}

export { createCard, renderCard, deleteCard };
