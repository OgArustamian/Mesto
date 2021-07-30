let wrapper = document.querySelector('.wrapper');
let profileEditButton = wrapper.querySelector('.profile__edit-button');
let popupCloseButton = wrapper.querySelector('.popup__close-button');
let popup = wrapper.querySelector('.popup');
let username = wrapper.querySelector('.profile__user-name');
let userJob = wrapper.querySelector('.profile__user-job');
let form = document.querySelector('.popup__form');
let nameInput = form.querySelector('.popup__info_type_username');
let jobInput = form.querySelector('.popup__info_type_job');

//открытие попапа со вставкой данных из profile в форму
function openPopup() {
  nameInput.value = username.textContent;
  jobInput.value = userJob.textContent;
  popup.classList.add('popup_opened');
}

//закрытие попапа
function closePopup() {
  popup.classList.remove('popup_opened');
}

//изменение данных при отправке формы
function formSubmitHandler(evt) {
  evt.preventDefault();
  username.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup();
}

profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
form.addEventListener('submit', formSubmitHandler);
