import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
constructor (popupSelector) {
super(popupSelector);
this._popupImage = this._popup.querySelector('.popup__image');
this._popupPlaceName = this._popup.querySelector('.popup__place-name');
}

open(name, link) {
    this._popupImage.src = link;
    this._popupPlaceName.textContent = name;
    this._popupImage.alt = name;
    super.open();
    }
}