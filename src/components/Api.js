export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }
    // загрузка информации о пользователе сервера
    getUserInfo() {
        fetch(`${this._baseUrl}/users/me`, {
          headers: this._headers
        })        
    }

    // загрузка карточек с сервера
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                console.log('ok');
                return res.json()
            }
        });
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
    }
        
}