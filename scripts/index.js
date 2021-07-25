import initialCards from "./InitialCards.js";
import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForms from "./PopupWithForms.js";
import UserInfo from "./UserInfo.js";

//EDIT
const editProfileEl = document.querySelector(".modal__form_type_edit");
const profileEditButtonEl = document.querySelector(".profile__edit-button");
const profileNameEl = document.querySelector(".profile__name");
const profileAboutEl = document.querySelector(".profile__about");
const editProfileNameInput = document.querySelector(
  ".modal__form-item_type_name"
);
const editProfileAboutInput = document.querySelector(
  ".modal__form-item_type_about"
);
const editModalSelector = "modal_type_edit";

//ADD
const addCardsEl = document.querySelector(".modal__form_type_add");
const addCardButtonEl = document.querySelector(".profile__add-button");
const addModalSelector = "modal_type_add";

//PREVIEW
const previewModalSelector = "modal_type_preview";

//CARD
const cardSelector = "#card-template";

//VALIDATION SETTINGS
const validationSettings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-item",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__form-item_type_error",
  errorClass: "modal__error_visible",
};

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
        cardSelector
      );
      const cardElement = newCard.getView();
      cardList.addItem(cardElement);
    },
  },
  "elements"
);

const userInfo = new UserInfo({
  userNameSelector: profileNameEl,
  userAboutSelector: profileAboutEl,
});

const addImagePopup = new PopupWithForms({
  modalSelector: addModalSelector,
  handleFormSubmit: (card) => {
    const newCard = new Card(
      {
        card,
        handlePreviewImg: () => {
          imageModal.open(card);
        },
      },
      cardSelector
    );
    cardList.addItem(newCard.getView());
  },
});

const userInfoPopup = new PopupWithForms({
  modalSelector: editModalSelector,
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
  },
});

const imageModal = new PopupWithImage(previewModalSelector);

const editFormValidator = new FormValidator(validationSettings, editProfileEl);
const addFormValidator = new FormValidator(validationSettings, addCardsEl);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

cardList.renderItems(initialCards);
addImagePopup.setEventListeners();
imageModal.setEventListeners();
userInfoPopup.setEventListeners();

/////POPUP BUTTONS/////

addCardButtonEl.addEventListener("click", () => {
  addImagePopup.open();
});

profileEditButtonEl.addEventListener("click", () => {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileAboutInput.value = profileAboutEl.textContent;
  userInfoPopup.open();
});
