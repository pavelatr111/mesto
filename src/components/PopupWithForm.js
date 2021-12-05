import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(selectorPopup, handleSubmitForm) {
    super(selectorPopup);
    this._handleSubmitForm = handleSubmitForm;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__form-input");
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => (formValues[input.name] = input.value));

    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const button = this._form.querySelector(".popup__button");
      const originalText = button.innerText;
      button.innerText = "Сохранение...";
      button.disabled = true;
      this._handleSubmitForm(this._getInputValues())
        .then(() => this.close())
        .finally(() => {
            button.innerText = originalText;
            button.disabled = false;
        });
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
