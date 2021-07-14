import FormValidator from "./FormValidator.js";
import Card from "./Card.js";

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

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

const cardSelector = "#card-template";

//======
//Helper functions
//======

function renderCard(cardElement, container) {
  const newCard = new Card(cardElement, container);
  const newCardElement = newCard.getView();
  placesElements.prepend(newCardElement);
}

initialCards.forEach((card) => {
  renderCard(card, cardSelector);
});

// function generateCard(card) {
//   //clone template
//   const cardElement = cardTemplate.cloneNode(true);
//   //query name element
//   cardElement.querySelector(".card__text").textContent = card.name;
//   //query image element
//   const imageEl = cardElement.querySelector(".card__img");
//   imageEl.src = card.link;
//   //query alt element
//   cardElement.querySelector(".card__img").alt = card.name;
//   //add event listener(s)
//   imageEl.addEventListener("click", () => {
//     openForm(previewModalEl);
//     previewImageEl.src = card.link;
//     previewImageEl.alt = card.name;
//     previewCaptionEl.textContent = card.name;
//   });
//   cardElement
//     .querySelector(".card__delete-button")
//     .addEventListener("click", (event) => {
//       const target = event.target;
//       const removeCard = target.parentElement;
//       removeCard.remove();
//     });
//   cardElement
//     .querySelector(".card__like-button")
//     .addEventListener("click", (evt) => {
//       evt.target.classList.toggle("card__like-button_active");
//     });
//   return cardElement;
// }

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
    if (e.keycode === 27) {
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

function submitAddForm(event) {
  event.preventDefault();
  const newCard = {
    name: addCardTitleInput.value,
    link: addCardImageLinkInput.value,
  };
  renderCard(newCard, cardSelector);
  closeModal(addModalEl);
  addCardsEl.reset();
}

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
addCardButtonEl.addEventListener("click", () => {
  openForm(addModalEl);
});

addCloseButtonEl.addEventListener("click", () => {
  closeModal(addModalEl);
  addCardsEl.reset();
});

addCardsEl.addEventListener("submit", submitAddForm);

addModalEl.addEventListener("click", () => {
  closeModal(addModalEl);
});

addCardsEl.addEventListener("click", modalClickOutside);

//Preview modal
previewCloseButtonEl.addEventListener("click", () => {
  closeModal(previewModalEl);
});

previewModalEl.addEventListener("click", () => {
  closeModal(previewModalEl);
});

previewContainerEl.addEventListener("click", modalClickOutside);

//======
//CARD GENERATOR
//======

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
