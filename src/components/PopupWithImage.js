import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  open({ link, name }) {
    this._modalElement.querySelector(".modal__preview-caption").textContent =
      name;
    const image = this._modalElement.querySelector(".modal__preview-image");
    image.src = link;
    image.alt = name;
    super.open();
  }
}
