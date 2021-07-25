class Card {
  constructor({ card, handlePreviewImg }, cardSelector) {
    this._name = card.name;
    this._link = card.link;
    this._handlePreviewImg = handlePreviewImg;

    this._cardTemplate = cardSelector;
  }

  _getTemplate() {
    const template = document
      .querySelector(this._cardTemplate)
      .content.querySelector(".card")
      .cloneNode(true);

    this._element = template;
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
