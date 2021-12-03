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
            const result = this._handleSubmitForm(this._getInputValues());
            const button = this._form.querySelector('.popup__button');
            const text =  button.innerText
            button.innerText = 'Сохранение...';
            result.then(() => {
                this.close();
            })
            .finally(() => {
                button.innerText = text;
            })
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
}
