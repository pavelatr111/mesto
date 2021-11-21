import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._popupImage = this._popup.querySelector(".popup-image__place");
    this._popupText = this._popup.querySelector(".popup-image__title");
  }
  open(textContent, src) {
    super.open();
    this._popupImage.src = src;
    this._popupImage.alt = textContent;
    this._popupText.textContent = textContent;
  }
  
}
