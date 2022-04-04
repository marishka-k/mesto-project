const config = {
  url: "https://nomoreparties.co/v1/plus-cohort-8",
  headers: {
    Authorization: "f6f0e19f-3261-436f-8b67-2b9918fd933f",
    "Content-type": "application/json",
  },
};

const onRes = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

export function getCardsArray() {
  return fetch(`${config.url}/cards`, {
    headers: config.headers,
  }).then(onRes);
}

export function addCardToServer(data) {
  return fetch(`${config.url}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(data),
  }).then(onRes);
}

export function removeCardToServer(cardId) {
  return fetch(`${config.url}/cards/${cardId}`, {
    headers: config.headers,
    method: "DELETE",
  }).then(onRes);
}

export function getProfileInfotmation() {
  return fetch(`${config.url}/users/me`, {
    headers: config.headers,
  }).then(onRes);
}

export function editProfileInformation(profileInformation) {
  return fetch(`${config.url}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify(profileInformation),
  }).then(onRes);
}

export function editProfileAvatar(profileAvatar) {
  return fetch(`${config.url}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify(profileAvatar),
  }).then(onRes);
}

export function addLike(cardId) {
  return fetch(`${config.url}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then(onRes);
}

export function removeLike(cardId) {
  return fetch(`${config.url}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(onRes);
}
