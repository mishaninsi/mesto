import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
constructor (popupSelector) {
super(popupSelector);
this._popupImage = this._popupSelector.querySelector('.popup__image');
this._popupPlaceName = this._popupSelector.querySelector('.popup__place-name');
}

open(link,name) {
    this._popupImage.src = link;
    this._popupPlaceName.textcontent = name;
    this._popupImage.alt = name;
    super.open();
    }
}