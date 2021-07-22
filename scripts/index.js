import initialCards from "./InitialCards.js";
import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForms from "./PopupWithForms.js";

//======
//Wrappers
//======
const editModalEl = document.querySelector(".modal_type_edit");
const addModalEl = document.querySelector(".modal_type_add");
const previewModalEl = document.querySelector(".modal_type_preview");

const editProfileEl = document.querySelector(".modal__form_type_edit");
const addCardsEl = document.querySelector(".modal__form_type_add");
const placesElements = document.querySelector(".elements");
const previewContainerEl = previewModalEl.querySelector(
  ".modal__preview-figure"
);
const previewImageEl = previewModalEl.querySelector(".modal__preview-image");
const previewCaptionEl = previewModalEl.querySelector(
  ".modal__preview-caption"
);

//======
//Buttons and other DOM elements
//======
const profileEditButtonEl = document.querySelector(".profile__edit-button");
const profileCloseButtonEl = document.querySelector(
  ".modal__close-button_type_edit"
);
const profileNameEl = document.querySelector(".profile__name");
const profileAboutEl = document.querySelector(".profile__about");
const addCardButtonEl = document.querySelector(".profile__add-button");
const addCloseButtonEl = document.querySelector(
  ".modal__close-button_type_add"
);
const previewCloseButtonEl = document.querySelector(
  ".modal__close-button_type_preview"
);

//======
//Form elemnts
//======

//Edit Modal
const editProfileNameInput = document.querySelector(
  ".modal__form-item_type_name"
);
const editProfileAboutInput = document.querySelector(
  ".modal__form-item_type_about"
);

//Add Modal
const addCardTitleInput = document.querySelector(
  ".modal__form-item_type_title"
);
const addCardImageLinkInput = document.querySelector(
  ".modal__form-item_type_image-link"
);

//======
//Templates
//======
const cardSelector = "#card-template";

//======
//CARD GENERATOR
//======

// NEW CODE
const cardList = new Section(
  {
    renderer: (data) => {
      const newCard = new Card(data, cardSelector);
      const cardElement = newCard.getView();
      cardList.addItem(cardElement);
    },
  },
  "elements"
);

cardList.renderItems(initialCards);

/////ADD IMAGE POPUP/////

const addImagePopup = new PopupWithForms({
  modalSelector: "modal_type_add",
  handleFormSubmit: (data) => {
    const card = new Card(data, cardSelector);
    cardList.addItem(card.getView());
  },
});

addImagePopup.setEventListeners();

// const imagePopup = new PopupWithImage("modal_type_preview");

// NEW CODE

// function renderCard(cardElement, container) {
//   const newCard = new Card(cardElement, container);
//   const newCardElement = newCard.getView();
//   placesElements.prepend(newCardElement);
// }

// initialCards.forEach((card) => {
//   renderCard(card, cardSelector);
// });

//======
//Handlers
//======

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

function submitEditProfileForm(event) {
  event.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileAboutEl.textContent = editProfileAboutInput.value;
  closeModal(editModalEl);
}

// function submitAddForm(event) {
//   event.preventDefault();
//   const newCard = {
//     name: addCardTitleInput.value,
//     link: addCardImageLinkInput.value,
//   };
//   renderCard(newCard, cardSelector);
//   close(addModalEl);
//   addCardsEl.reset();
// }

function modalClickOutside(event) {
  event.stopPropagation();
}

//======
//Event Listeners
//=====

//Edit Modal

profileEditButtonEl.addEventListener("click", () => {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileAboutInput.value = profileAboutEl.textContent;
  openForm(editModalEl);
});

profileCloseButtonEl.addEventListener("click", closeModal(editModalEl));

editProfileEl.addEventListener("submit", submitEditProfileForm);

editModalEl.addEventListener("click", () => {
  closeModal(editModalEl);
});

editProfileEl.addEventListener("click", modalClickOutside);

//Add Modal
// addCardButtonEl.addEventListener("click", () => {
//   openForm(addModalEl);
// });

// addCloseButtonEl.addEventListener("click", () => {
//   closeModal(addModalEl);
//   addCardsEl.reset();
// });

// addCardsEl.addEventListener("submit", submitAddForm);

// addModalEl.addEventListener("click", () => {
//   closeModal(addModalEl);
// });

// addCardsEl.addEventListener("click", modalClickOutside);

//Preview modal
previewCloseButtonEl.addEventListener("click", () => {
  closeModal(previewModalEl);
});

previewModalEl.addEventListener("click", () => {
  closeModal(previewModalEl);
});

previewContainerEl.addEventListener("click", modalClickOutside);

//======
//VALIDATION
//======

const validationSettings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-item",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__form-item_type_error",
  errorClass: "modal__error_visible",
};

const editFormValidator = new FormValidator(validationSettings, editProfileEl);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(validationSettings, addCardsEl);
addFormValidator.enableValidation();
