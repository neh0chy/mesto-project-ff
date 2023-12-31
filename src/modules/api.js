const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-3',
  headers: {
    authorization: 'e4d5256e-33f1-4ab5-9380-349d502386d0',
    'Content-Type': 'application/json'
  }
};

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export function getInitialCards() {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'GET',
    headers: config.headers
  }).then(checkResponse);
}

export function getUserInfo() {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: config.headers
  }).then(checkResponse);
}

export function patchUserInfo(name, job) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: job
    })
  }).then(checkResponse);
}

export function postNewCard(name, link) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  }).then(checkResponse);
}

export function deleteMyCard(card) {
  return fetch(`${config.baseUrl}/cards/${card.id}`, {
    method: 'DELETE',
    headers: config.headers
  }).then(checkResponse);
}

export function putLike(card) {
  return fetch(`${config.baseUrl}/cards/likes/${card.id}`, {
    method: 'PUT',
    headers: config.headers
  }).then(checkResponse);
}

export function deleteLike(card) {
  return fetch(`${config.baseUrl}/cards/likes/${card.id}`, {
    method: 'DELETE',
    headers: config.headers
  }).then(checkResponse);
}

export function patchAvatar(link) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: link
    })
  }).then(checkResponse);
}
