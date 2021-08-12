class Card {
  constructor({ card, handlePreviewImg, handleDeleteIcon }, cardSelector) {
    this._name = card.name;
    this._link = card.link;
    this._handlePreviewImg = handlePreviewImg;
    this._handleDeleteIcon = handleDeleteIcon;
    this._ownerId = card.owner._id;

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

    this._deleteButton = this._element.querySelector(".card__delete-button");
    if (this._ownerId === "3aaa3ba0eaedbec067155932") {
      this._deleteButton.addEventListener("click", (evt) =>
        this._handleDeleteIcon(evt)
      );
    } else {
      this._deleteButton.remove();
    }

    this._likeButton = this._element.querySelector(".card__like-button");
    this._likeButton.addEventListener("click", () => this._handleLikeIcon());
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  // _handleDeleteIcon() {
  //   this._element.remove();
  //   this._card = null;
  // }

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