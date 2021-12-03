import Popup from "./Popup.js";

export class PopupWithConfirmation extends Popup {
    constructor(selectorPopup, handleConfirm) {
        super(selectorPopup);
        this._handleConfirm = handleConfirm;
        this._confirm = this._popup.querySelector(".popup__button");
    }

    setEventListeners() {
        super.setEventListeners();
        this._confirm.addEventListener("click", (evt) => {
            evt.preventDefault();
            this._handleConfirm(this._card);
            this.close();
        });
    }


    close() {
        super.close();
    }

    open(card) {
        super.open();
        this._card = card;
    }
}

