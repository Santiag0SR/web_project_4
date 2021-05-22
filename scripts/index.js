
//open and close modal
const profileEditButtonEl = document.querySelector(".profile__edit-button");
const profileCloseButtonEl = document.querySelector(".modal__close-button")
const modalEl = document.querySelector(".modal");

function closeModal(){
    modalEl.classList.remove("modal_open");

}

profileEditButtonEl.addEventListener("click", function(){
    modalEl.classList.add("modal_open");
})

profileCloseButtonEl.addEventListener("click", function(){
    closeModal();
})

//form edition 
const editProfileEl = document.querySelector(".modal__form");

const editProfileNameInput = document.querySelector(".modal__form-item_type_name");
const profileNameEl = document.querySelector(".profile__name");


const editProfileAboutInput = document.querySelector(".modal__form-item_type_about");
const profileAboutEl = document.querySelector(".profile__about");


editProfileNameInput.value = profileNameEl.textContent;
editProfileAboutInput.value = profileAboutEl.textContent;


function submitForm (event){
    event.preventDefault();
    profileNameEl.textContent = editProfileNameInput.value;
    profileAboutEl.textContent = editProfileAboutInput.value;
    closeModal();
}

editProfileEl.addEventListener("submit", submitForm);