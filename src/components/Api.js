export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _Response(res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      }
    

    // загрузка информации о пользователе сервера
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
          })
        .then(res => this._Response(res));           
    }

    // загрузка карточек с сервера
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then(res => this._Response(res));
    }

    // Редактирование профиля
    editUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            name: data.username,
            about: data.job
          })
        })
        .then(res => this._Response(res));
    }

    // добавление новой карточки
    addCards(data) {
        return fetch(`${this._baseUrl}/cards`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({
            name: data.name,
            link: data.link
          })
    })
    .then(res => this._Response(res));
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
          method: 'DELETE',
          headers: this._headers
        })
      .then(res => this._Response(res));
    }

    setLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
          method: 'PUT',
          headers: this._headers
    })
    .then(res => this._Response(res));
    }

    deleteLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
          method: 'DELETE',
          headers: this._headers
        })
        .then(res => this._Response(res));
    }

    // Редактирование аватара пользователя через попап
    editAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
    .then(res => this._Response(res));
    }
        
}