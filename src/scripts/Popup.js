export default class Popup {
  constructor(selectorPopup) {
    this._selectorPopup = selectorPopup;
    this._popup = document.querySelector(this._selectorPopup);
    this._popupClose = this._popup.querySelector(".popup__close");
    
    this._closeByEscape = (evt) => {
      if (evt.key === "Escape") {
        if (this._popup.classList.contains("popup_visible")) {
          this.close();
        }
      }
    };
  }

  open() {
    this._popup.classList.add("popup_visible");
    document.addEventListener("keydown", this._closeByEscape);
  }

  close() {
    this._popup.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._closeByEscape);
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
