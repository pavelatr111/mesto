import Popup from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(selectorPopup, handleConfirm, loadingText) {
    super(selectorPopup);
    this._handleConfirm = handleConfirm;
    this._confirm = this._popup.querySelector(".popup__button");
    this._loadingText = loadingText;
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirm.addEventListener("click", (evt) => {
      evt.preventDefault();
      const text = this._confirm.innerText;
      this._confirm.innerText = this._loadingText;
      this._confirm.disabled = true;

      this._handleConfirm(this._card)
        .then(() => this.close())
        .finally(() => {
            this._confirm.innerText = text;
            this._confirm.disabled = false;
        });
    });
  }

  open(card) {
    super.open();
    this._card = card;
  }
}
