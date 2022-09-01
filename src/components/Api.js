export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headres = options.headers;
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headres
        })
        .then(res => {
            if (res.ok) {
                console.log('ok');
                return res.json()
            }
        });
    }
}