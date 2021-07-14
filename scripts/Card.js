// const previewModalEl = document.querySelector(".modal_type_preview");
// const previewImageEl = previewModalEl.querySelector(".modal__preview-image");
// const previewCaptionEl = previewModalEl.querySelector(
//   ".modal__preview-caption"
// );

class Card {
  constructor(card, cardSelector) {
    this._name = card.name;
    this._link = card.link;

    this._cardTemplate = cardSelector;
  }

  _setEventListeners() {
    this._element.querySelector(".card__img").addEventListener("click", () => {
      openForm(previewModalEl);
      previewImageEl.src = this._link;
      previewImageEl.alt = this._name;
      previewCaptionEl.textContent = this._name;
    });

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", (event) => {
        const target = event.target;
        const removeCard = target.parentElement;
        removeCard.remove();
      });

    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", (evt) => {
        evt.target.classList.toggle("card__like-button_active");
      });
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

    this._element.querySelector(".card__text").textContent = this._name;
    this._element.querySelector(".card__img").src = this._link;
    this._element.querySelector(".card__img").alt = this._name;

    return this._element;
  }
}

export default Card;
