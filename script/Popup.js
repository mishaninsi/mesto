export default class Popup {
    constructor (popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
        this._closeButtons = this._popupSelector.querySelector('.popup__close-btn');
        this._escClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._escClose);
    }

    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._escClose);
    }

    _handleEscClose (evt) {
        evt.preventDefault();
        if (evt.key === 'Escape') {
            const popupActive = document.querySelector('.popup_opened');
            this.close(popupActive);
        }
    }

    setEventListeners() {
        this._closeButtons.addEventListener('click', () => {
            this.close();
        });
        this._popupSelector.addEventListener('mousedown', (event) => {
            if (event.target.classList.contains('popup')) {
                this.close();
            }
        });
      }
}