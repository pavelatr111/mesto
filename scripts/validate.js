const enableValidation = (config) => {

  //показать ошибку
  const showInputError = (formElement, input, errorMessage) => {
    const errorElement = formElement.querySelector(`.${input.id}-error`);
    input.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass)
  };
  //скрыть ошибку
  const hideInputError = (formElement, input, errorMessage) => {
    const errorElement = formElement.querySelector(`.${input.id}-error`);
    input.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(config.errorClass);
  };

  //искать в инпутах не валидный инпут
  const hasInvalidInput = (inputs) => {
    return inputs.some((input) => {
      return !input.validity.valid;
    });
  }

  //блокировка кнопки
  const toggleButtonState = (inputs, buttonElement) => {
    if (hasInvalidInput(inputs)) {
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.setAttribute('disabled', true)
    } else {
      buttonElement.classList.remove(config.inactiveButtonClass);
      buttonElement.removeAttribute('disabled', true)
    }
  }

  //проверка инпутов
  const checkInputValidity = (formElement, input) => {
    if (!input.validity.valid) {
      showInputError(formElement, input, input.validationMessage);
    } else {
      hideInputError(formElement, input);
    }
  };



  //находим инпуты и вешаем слушатели input, submit
  const enableValidationInput = (formElement) => {
    const inputs = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(inputs, buttonElement);
    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        checkInputValidity(formElement, input);
        toggleButtonState(inputs, buttonElement);
      })
    })
  }


  const forms = Array.from(document.querySelectorAll(config.formSelector))
  forms.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    enableValidationInput(formElement)
  });

}



