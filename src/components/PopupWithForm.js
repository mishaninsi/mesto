import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor ({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputList = this._popupForm.querySelectorAll('.popup__input');
        this._submitBtn = this._popupForm.querySelector('.popup__submit-btn');
        this._submitBtnText = this._submitBtn.textContent;
    }

    _getInputValues() {
        this._formValues= {};
        this._inputList.forEach (input => {
            this._formValues[input.name] = input.value
        })
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            
        })
    }
    close (){
        super.close();
        this._popupForm.reset();
    }
    loading(isLoading) {
        if (isLoading) {
          this._submitBtn.textContent = 'Сохранение...'
        } else {
          this._submitBtn.textContent = this._submitBtnText;
        }
      }
}