import "./index.css";

import initialCards from "../utils/InitialCards.js";
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

const createCard = (card) => {
  const cardInstance = new Card(
    {
      card,
      handlePreviewImg: () => {
        imageModal.open(card);
      },
    },
    cardConstants.cardSelector
  );

  return cardInstance;
};

const cardList = new Section(
  {
    renderer: (card) => {
      const newCard = createCard(card);
      const cardElement = newCard.getView();
      cardList.addItem(cardElement);
    },
  },
  cardConstants.placeSelector
);

const userInfo = new UserInfo({
  userNameSelector: editConstants.profileNameEl,
  userAboutSelector: editConstants.profileAboutEl,
});

const addImagePopup = new PopupWithForms({
  modalSelector: addConstants.addModalSelector,
  handleFormSubmit: (card) => {
    const newCard = createCard(card);
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
  addFormValidator.resetValidation();
  addImagePopup.open();
});

editConstants.profileEditButtonEl.addEventListener("click", () => {
  const profileData = userInfo.getUserInfo();
  editConstants.editProfileNameInput.value = profileData.name;
  editConstants.editProfileAboutInput.value = profileData.about;

  editFormValidator.resetValidation();
  userInfoPopup.open();
});
