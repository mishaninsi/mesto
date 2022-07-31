export const settings = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inputErrorClass: 'input__error_type',
    errorClass: 'input__error_type_active',
    inactiveButtonClass: 'popup__submit-btn_invalid'
}

export class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
        this._button = this._formElement.querySelector(this._settings.submitButtonSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    }

    _showInputError(formElement, inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._settings.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._settings.errorClass);

    };

    _hideInputError(formElement, inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._settings.inputErrorClass);
        errorElement.classList.remove(this._settings.errorClass);
        errorElement.textContent = '';
    };

    _isValid(formElement, inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(this._formElement, inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(this._formElement, inputElement);
        }
    };

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };

    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._settings.inactiveButtonClass);
            buttonElement.setAttribute('disabled', true);
        } else {
            buttonElement.classList.remove(this._settings.inactiveButtonClass);
            buttonElement.removeAttribute('disabled');
        }
    };

    _setEventListeners() {
        this._toggleButtonState(this._inputList, this._button);
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(this._formElement, inputElement);
                this._toggleButtonState(this._inputList, this._button);
            });
        });
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault()
        });
    };

    enableValidation() {
        this._setEventListeners()

    }
}



