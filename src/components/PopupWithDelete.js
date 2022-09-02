import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, handleTrashButton }) {
    super(popupSelector);
    this._handleTrashButton = handleTrashButton;
    this._popupForm = this._popup.querySelector('.popup__form');
  }

  open(card, cardId) {
    this._card = card;
    this._cardId = cardId;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('click', (event) => {
      event.preventDefault();
      this._handleTrashButton(this._card, this._cardId);
    })
  }
}