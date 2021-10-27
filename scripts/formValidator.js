
class FormValidator {
  constructor(config, form) {
      this._config = config;
      this._form = form;
      this._inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector));
  }

  enableValidation() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    this._enableValidationInput()
  }

  //показать ошибку
  _showInputError (input, errorMessage) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    input.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass)
  }
  //скрыть ошибку
  _hideInputError (input) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    input.classList.remove(this._config.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._config.errorClass);
  }

  //искать в инпутах не валидный инпут
  _hasInvalidInput () {
    return this._inputs.some((input) => {
      return !input.validity.valid;
    });
  }

  //блокировка кнопки
  _toggleButtonState (buttonElement) {
    if (this._hasInvalidInput()) {
      buttonElement.classList.add(this._config.inactiveButtonClass);
      buttonElement.setAttribute('disabled', true)
    } else {
      buttonElement.classList.remove(this._config.inactiveButtonClass);
      buttonElement.removeAttribute('disabled', true)
    }
  }

  //проверка инпутов
  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }



  //находим инпуты и вешаем слушатели input, submit
  _enableValidationInput() {
    const buttonElement = this._form.querySelector(this._config.submitButtonSelector);
    this._toggleButtonState(buttonElement);
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState(buttonElement);
      })
    })
  }

}



