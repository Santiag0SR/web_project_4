import "./index.css";

import initialCards from "../components/InitialCards.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForms from "../components/PopupWithForms.js";
import UserInfo from "../components/UserInfo.js";

import {
  validationSettings,
  cardConstants,
  previewConstants,
  editConstants,
  addConstants,
} from "../utils/constants.js";

const cardList = new Section(
  {
    renderer: (card) => {
      const newCard = new Card(
        {
          card,
          handlePreviewImg: () => {
            imageModal.open(card);
          },
        },
        cardConstants.cardSelector
      );
      const cardElement = newCard.getView();
      cardList.addItem(cardElement);
    },
  },
  "elements"
);

const userInfo = new UserInfo({
  userNameSelector: editConstants.profileNameEl,
  userAboutSelector: editConstants.profileAboutEl,
});

const addImagePopup = new PopupWithForms({
  modalSelector: addConstants.addModalSelector,
  handleFormSubmit: (card) => {
    const newCard = new Card(
      {
        card,
        handlePreviewImg: () => {
          imageModal.open(card);
        },
      },
      cardConstants.cardSelector
    );
    cardList.addItem(newCard.getView());
  },
});

const userInfoPopup = new PopupWithForms({
  modalSelector: editConstants.editModalSelector,
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
  },
});

const imageModal = new PopupWithImage(previewConstants.previewModalSelector);

const editFormValidator = new FormValidator(
  validationSettings,
  editConstants.editProfileEl
);
const addFormValidator = new FormValidator(
  validationSettings,
  addConstants.addCardsEl
);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

cardList.renderItems(initialCards);

addImagePopup.setEventListeners();
imageModal.setEventListeners();
userInfoPopup.setEventListeners();

/////POPUP BUTTONS/////

addConstants.addCardButtonEl.addEventListener("click", () => {
  addImagePopup.open();
});

editConstants.profileEditButtonEl.addEventListener("click", () => {
  editConstants.editProfileNameInput.value =
    editConstants.profileNameEl.textContent;
  editConstants.editProfileAboutInput.value =
    editConstants.profileAboutEl.textContent;
  userInfoPopup.open();
});
