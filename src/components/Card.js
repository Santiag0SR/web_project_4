class Card {
  constructor(
    { card, handlePreviewImg, handleDeleteIcon, handleLikeButton, userId },
    cardSelector
  ) {
    this._userId = userId;
    this._name = card.name;
    this._link = card.link;
    this._likedCard = card.likes;
    this._numberLikes = card.likes.length;
    this._handlePreviewImg = handlePreviewImg;
    this._handleDeleteIcon = handleDeleteIcon;
    this._handleLikeButton = handleLikeButton;
    this._ownerId = card.owner._id;
    this._cardId = card._id;

    this._cardTemplate = cardSelector;
  }

  _getTemplate() {
    const template = document
      .querySelector(this._cardTemplate)
      .content.querySelector(".card")
      .cloneNode(true);

    this._element = template;
  }

  _checkLikes(card) {
    this._element.querySelector(".card__text_likes-number").textContent =
      card.likes.length;
  }

  _liked(e) {
    this._handleLikeButton(
      !e.target.classList.contains("card__like-button_active")
    )
      .then((card) => {
        e.target.classList.toggle("card__like-button_active");
        this._checkLikes(card);
      })
      .catch((err) => {
        console.log(`Error:${err}`);
      });
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__img")
      .addEventListener("click", () => this._handlePreviewImg());

    this._deleteButton = this._element.querySelector(".card__delete-button");
    if (this._ownerId === this._userId) {
      this._deleteButton.addEventListener("click", (evt) => {
        this._handleDeleteIcon(evt);
      });
    } else {
      this._deleteButton.remove();
    }

    this._likeButton = this._element.querySelector(".card__like-button");
    this._likeButton.addEventListener("click", (e) => {
      this._liked(e);
    });
  }

  _getInitalLikes() {
    const userLikeCard = this._likedCard.some(
      (item) => item._id === this._userId
    );
    if (userLikeCard) {
      this._likeButton.classList.add("card__like-button_active");
    }

    this._element.querySelector(".card__text_likes-number").textContent =
      this._numberLikes;
  }

  getView() {
    this._getTemplate();
    this._setEventListeners();

    const cardImg = this._element.querySelector(".card__img");

    this._element.querySelector(".card__text").textContent = this._name;
    cardImg.src = this._link;
    cardImg.alt = this._name;
    this._getInitalLikes(cardImg);

    return this._element;
  }
}

export default Card;
