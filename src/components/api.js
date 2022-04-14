class Api {
  constructor(object) {
    this.url = object.url;
    this.headers = object.headers;
  }

  checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  }

  getProfileInfotmation() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers,
    }).then(this.checkResponse)
  }

  editProfileInformation(profileInformation) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(profileInformation),
    }).then(this.checkResponse)
  }

  editProfileAvatar(profileAvatar) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(profileAvatar),
    }).then(this.checkResponse)
  }

  getCardsArray() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers,
    }).then(this.checkResponse)
  }

  addCardToServer(data) {
    return fetch(`${this.url}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    }).then(this.checkResponse)
  }

  removeCardToServer(cardId) {
    return fetch(`${this.url}/cards/${cardId}`, {
      headers: this.headers,
      method: "DELETE",
    }).then(this.checkResponse)
  }

  addLike(cardId) {
    return fetch(`${this.url}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this.headers,
    }).then(this.checkResponse)
  }

  removeLike(cardId) {
    return fetch(`${this.url}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(this.checkResponse)
  }
}

export const api = new Api({
  url: 'https://nomoreparties.co/v1/plus-cohort-8',
  headers: {
    authorization: 'f6f0e19f-3261-436f-8b67-2b9918fd933f',
    'Content-Type': 'application/json'
  }
});


/*
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
*/
