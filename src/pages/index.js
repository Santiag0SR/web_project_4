import "./index.css";

import initialCards from "../utils/InitialCards.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForms from "../components/PopupWithForms.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupDeleteCard from "../components/PopupDeleteCard";

import {
  validationSettings,
  cardConstants,
  previewConstants,
  editConstants,
  addConstants,
} from "../utils/constants.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-13",
  headers: {
    authorization: "0f98077f-1b08-4829-ae57-6f81ab47380c",
    "Content-Type": "application/json",
  },
});

const deleteCard = new PopupDeleteCard({
  modalSelector: addConstants.deleteCardsEl,
  handleFormSubmit: (cardElement, cardId) => {
    api.deleteCard(cardId).then(() => {
      cardElement.remove();
      deleteCard.close();
    });
  },
});

deleteCard.setEventListeners();

api.getInitialProfile().then((res) => {
  userInfo.setUserInfo(res);
});

api.getInitialCards().then((res) => {
  cardList.renderItems(res);
});

const createCard = (card) => {
  const cardInstance = new Card(
    {
      card,
      handlePreviewImg: () => {
        imageModal.open(card);
      },
      handleDeleteIcon: (evt) => {
        deleteCard.open(evt, card._id);
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
  userAvatarSelector: editConstants.profileAvatarEl,
});

// const deleteCardPopup = new PopupWithForms({
//   modalSelector: addConstants.addModalSelector,
//   handleFormSubmit: (card) => {
//     api.fetchCard(card).then((cardData) => {
//       const newCard = createCard(cardData);
//       cardList.addItem(newCard.getView());
//     });
//   },
// });

const addImagePopup = new PopupWithForms({
  modalSelector: addConstants.addModalSelector,
  handleFormSubmit: (card) => {
    api.fetchCard(card).then((cardData) => {
      const newCard = createCard(cardData);
      cardList.addItem(newCard.getView());
    });
  },
});

const userInfoPopup = new PopupWithForms({
  modalSelector: editConstants.editModalSelector,
  handleFormSubmit: (profile) => {
    api.fetchProfileInfo(profile).then((profileData) => {
      userInfo.setUserInfo(profileData);
    });
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
