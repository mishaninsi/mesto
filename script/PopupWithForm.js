import Popup from "./Popup";

export default class PopupWithForm extends Popup {
    constructor ({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this.popupSelector.querySelector('.popup__form');
        this._inputList = this.popupForm.querySelectorAll('.popup__input');
    }

    _getInputValues() {
        this._formValue= {};
        this._inputList.forEach (input => {
            this._formValue[input.name] = input.value
        })
        return this._formValue;
    }

    setEventListeners() {
        this.popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        })
    }
    close (){
        super.close();
        this.popupForm.reset();
    }
}