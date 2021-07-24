let wrapper = document.querySelector('.wrapper');
let profileEditButton = wrapper.querySelector('.profile__edit-button');
let popupCloseButton = wrapper.querySelector('.popup__close-button');
let submitButton = wrapper.querySelector('.popup__submit-button');
let popup = wrapper.querySelector('.popup');

//открытие и закрытие попапа
function popupToggle() {
  popup.classList.toggle('popup_opened');
}

profileEditButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
submitButton.addEventListener('click', popupToggle);

//изменение данных при отправке формы
let form = document.querySelector('.popup__form');
let nameInput = form.querySelector('.popup__form-username');
let jobInput = form.querySelector('.popup__form-user-job');

function formSubmitHandler(evt) {
  evt.preventDefault();
  let username = wrapper.querySelector('.profile__user-name');
  let userJob = wrapper.querySelector('.profile__user-job');
  username.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
}

form.addEventListener('submit', formSubmitHandler);
