const initialCards = [
  {
    name: "Yosemite Valley",
    link: "Images/Yosemite.jpeg",
  },
  {
    name: "Lake Louise",
    link: "Images/Lake_Louise.jpeg",
  },
  {
    name: "Bald Mountains",
    link: "Images/Bald_Mountains.jpeg",
  },
  {
    name: "Latemar",
    link: "Images/Latemar.jpeg",
  },
  {
    name: "Vanoise National Park",
    link: "Images/Vanoise_National_Park.jpeg",
  },
  {
    name: "Lago di Braies",
    link: "Images/Lago_di_Braies.jpeg",
  },
];

//======
//Wrappers
//======
const editModalEl = document.querySelector(".modal_type_edit");
const addModalEl = document.querySelector(".modal_type_add");
const editProfileEl = document.querySelector(".modal__form_type_edit");
const addCardsEl = document.querySelector(".modal__form_type_add");

const placesElements = document.querySelector(".elements");

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

//======
//Helper functions
//======

function renderCard(cardElement, container) {
  container.append(cardElement);
}

function generateCard(card) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".card__text").textContent = card.name;
  cardElement.querySelector(".card__img").src = card.link;
  cardElement.querySelector(".card__img").alt = card.name;
  return cardElement;
}

//======
//Handlers
//======

function openForm(modalEl) {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileAboutInput.value = profileAboutEl.textContent;
  modalEl.classList.add("modal_open");
}

function closeModal(modalEl) {
  modalEl.classList.remove("modal_open");
}

function submitForm(event) {
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
  renderCard(generateCard(newCard), placesElements);
  closeModal(addModalEl);
}

//======
//Event Listeners
//=====

//Edit Modal
profileEditButtonEl.addEventListener("click", () => {
  openForm(editModalEl);
});

profileCloseButtonEl.addEventListener("click", () => {
  closeModal(editModalEl);
});

editProfileEl.addEventListener("submit", submitForm);

//Add Modal
addCardButtonEl.addEventListener("click", () => {
  openForm(addModalEl);
});

addCloseButtonEl.addEventListener("click", () => {
  closeModal(addModalEl);
});

addCardsEl.addEventListener("submit", submitAddForm);

initialCards.forEach((card) => {
  renderCard(generateCard(card), placesElements);
});
