const previewModalEl = document.querySelector(".modal_type_preview");
const previewImageEl = previewModalEl.querySelector(".modal__preview-image");
const previewCaptionEl = previewModalEl.querySelector(
  ".modal__preview-caption"
);

function openForm(modalEl) {
  modalEl.classList.add("modal_open");
  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
      closeModal(modalEl);
    }
  });
}

function closeModal(modalEl) {
  modalEl.classList.remove("modal_open");
  document.removeEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
      closeModal(modalEl);
    }
  });
}

class Card {
  constructor(card, cardSelector) {
    this._name = card.name;
    this._link = card.link;

    this._cardTemplate = cardSelector;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__img")
      .addEventListener("click", () => this._handlePreviewImg());

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => this._handleDeleteIcon());

    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._handleLikeIcon());
  }

  _handleLikeIcon() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteIcon() {
    this._element.remove();
    this._card = null;
  }

  _handlePreviewImg() {
    openForm(previewModalEl);
    previewImageEl.src = this._link;
    previewImageEl.alt = this._name;
    previewCaptionEl.textContent = this._name;
  }

  _getTemplate() {
    const template = document
      .querySelector(this._cardTemplate)
      .content.querySelector(".card")
      .cloneNode(true);

    this._element = template;
  }

  getView() {
    this._getTemplate();
    this._setEventListeners();

    const cardImg = this._element.querySelector(".card__img");

    this._element.querySelector(".card__text").textContent = this._name;
    cardImg.src = this._link;
    cardImg.alt = this._name;

    return this._element;
  }
}

export default Card;
