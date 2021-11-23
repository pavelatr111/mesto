export default class Popup {
  constructor(selectorPopup) {
    this._selectorPopup = selectorPopup;
    this._popup = document.querySelector(this._selectorPopup);
    this._popupClose = this._popup.querySelector(".popup__close");
    
    this._escHandler = this._handleEscClose.bind(this);
  }
  open() {
    this._popup.classList.add("popup_visible");
    document.addEventListener("keydown", this._escHandler);
  }

  close() {
    this._popup.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._escHandler);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      if (this._popup.classList.contains("popup_visible")) {
        this.close();
      }
    }
  }

  setEventListeners() {
    this._popupClose.addEventListener("click", () => {
      this.close();
    });
    this._popup.addEventListener("click", (evt) => {
      if (evt.target === this._popup) {
        this.close();
      }
    });
  }
}
