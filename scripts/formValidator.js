
class FormValidator {
  constructor(config, form) {
      this._config = config;
      this._form = form;
      this._inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector));
      this._buttonElement = this._form.querySelector(this._config.submitButtonSelector);
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

  resetValidation() {
    this._toggleButtonState(); 

    this._inputs.forEach((input) => {
      this._hideInputError(input) 
    });

  }

  //блокировка кнопки
  _toggleButtonState () {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true)
    } else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled', true)
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
    this._toggleButtonState();
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      })
    })
  }

}



