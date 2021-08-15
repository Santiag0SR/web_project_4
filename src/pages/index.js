import "./index.css";

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

function loadingHandler(loading, modalSelector, text) {
  const modal = document.querySelector(`.${modalSelector}`);
  if (loading) {
    modal.querySelector(".modal__save-button").textContent = text;
  } else {
    modal.querySelector(".modal__save-button").textContent = text;
  }
}

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-13",
  headers: {
    authorization: "0f98077f-1b08-4829-ae57-6f81ab47380c",
    "Content-Type": "application/json",
  },
});

api
  .getInitialProfile()
  .then((res) => {
    userInfo.setUserInfo(res);
  })
  .catch((err) => {
    console.log(`Error:${err}`);
  });

api
  .getInitialCards()
  .then((res) => {
    cardList.renderItems(res.reverse());
  })
  .catch((err) => {
    console.log(`Error:${err}`);
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
      handleLikeButton: (buttonLiked) => {
        return buttonLiked ? api.likeCard(card._id) : api.removeLike(card._id);
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

const addImagePopup = new PopupWithForms({
  modalSelector: addConstants.addModalSelector,
  handleFormSubmit: (card) => {
    loadingHandler(true, addConstants.addModalSelector, "Creating...");
    api
      .fetchCard(card)
      .then((cardData) => {
        const newCard = createCard(cardData);
        cardList.addItem(newCard.getView());
        addImagePopup.close();
      })
      .catch((err) => {
        console.log(`Error:${err}`);
      })
      .finally(() => {
        loadingHandler(false, addConstants.addModalSelector, "Create");
      });
  },
});

const changeProfileAvatarPopup = new PopupWithForms({
  modalSelector: editConstants.avatarModalSelector,
  handleFormSubmit: (avatar) => {
    loadingHandler(true, editConstants.avatarModalSelector, "Changing...");

    api
      .changeProfileAvatar(avatar)
      .then((avatarData) => {
        userInfo.setAvatarImg(avatarData);
        changeProfileAvatarPopup.close();
      })
      .catch((err) => {
        console.log(`Error:${err}`);
      })
      .finally(() => {
        loadingHandler(false, editConstants.avatarModalSelector, "Change");
      });
  },
});

const deleteCard = new PopupDeleteCard({
  modalSelector: addConstants.deleteCardsEl,
  handleFormSubmit: (cardElement, cardId) => {
    loadingHandler(true, addConstants.deleteCardsEl, "Deleting...");
    api
      .deleteCard(cardId)
      .then(() => {
        cardElement.remove();
        deleteCard.close();
      })
      .catch((err) => {
        console.log(`Error:${err}`);
      })
      .finally(() => {
        loadingHandler(false, addConstants.deleteCardsEl, "Yes");
      });
  },
});

const userInfoPopup = new PopupWithForms({
  modalSelector: editConstants.editModalSelector,
  handleFormSubmit: (profile) => {
    loadingHandler(true, editConstants.editModalSelector, "Updating...");
    api
      .fetchProfileInfo(profile)
      .then((profileData) => {
        userInfo.setUserInfo(profileData);
        userInfoPopup.close();
      })
      .catch((err) => {
        console.log(`Error:${err}`);
      })
      .finally(() => {
        loadingHandler(false, editConstants.editModalSelector, "Update");
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

const avatarFormValidator = new FormValidator(
  validationSettings,
  editConstants.profileAvatarForm
);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
avatarFormValidator.enableValidation();

addImagePopup.setEventListeners();
imageModal.setEventListeners();
userInfoPopup.setEventListeners();
deleteCard.setEventListeners();
changeProfileAvatarPopup.setEventListeners();

/////POPUP BUTTONS/////

addConstants.addCardButtonEl.addEventListener("click", () => {
  addFormValidator.resetValidation();
  addImagePopup.open();
});

editConstants.profileAvatarButtonEl.addEventListener("click", () => {
  avatarFormValidator.resetValidation();
  changeProfileAvatarPopup.open();
});

editConstants.profileEditButtonEl.addEventListener("click", () => {
  const profileData = userInfo.getUserInfo();
  editConstants.editProfileNameInput.value = profileData.name;
  editConstants.editProfileAboutInput.value = profileData.about;

  editFormValidator.resetValidation();
  userInfoPopup.open();
});
