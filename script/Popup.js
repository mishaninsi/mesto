export default class Popup {
    constructor (popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
        this._closeButtons = this._popupSelector.querySelector('.popup__close-btn');
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
        //this._handleEscClose();
    }

    close() {
        this._popupSelector.classList.remove('popup_opened');
        //this._handleEscClose();
    }

    /*_handleEscClose (evt) {
        evt.preventDefault();
        if (evt.key === 'Escape') {
            const popupActive = document.querySelector('.popup_opened');
            this.close(popupActive);
        }
    }
*/
    setEventListeners() {
        this._closeButtons.addEventListener('click', () => {
            this.close();
        })
    }
}