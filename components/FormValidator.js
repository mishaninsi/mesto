export class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
        this._button = this._formElement.querySelector(this._settings.submitButtonSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._settings.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._settings.errorClass);

    };

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._settings.inputErrorClass);
        errorElement.classList.remove(this._settings.errorClass);
        errorElement.textContent = '';
    };

    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };

    toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._button.classList.add(this._settings.inactiveButtonClass);
            this._button.setAttribute('disabled', true);
        } else {
            this._button.classList.remove(this._settings.inactiveButtonClass);
            this._button.removeAttribute('disabled');
        }
    };

    _setEventListeners() {
        this.toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this.toggleButtonState();
                
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



