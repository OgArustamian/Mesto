const wrapper = document.querySelector('.wrapper');
const profileEditButton = wrapper.querySelector('.profile__edit-button');
const profileAddButton = wrapper.querySelector('.profile__add-button');
const popupCloseButton = wrapper.querySelectorAll('.popup__close-button');
const editProfilePopup = wrapper.querySelector('.popup__edit-profile');
const addImagePopup = wrapper.querySelector('.popup__add-image');
const username = wrapper.querySelector('.profile__user-name');
const userJob = wrapper.querySelector('.profile__user-job');
const form = document.querySelector('.popup__form');
const nameInput = form.querySelector('.popup__info_type_username');
const jobInput = form.querySelector('.popup__info_type_job');


//открытие попапа со вставкой данных из profile в форму
function openEditProfilePopup() {
  nameInput.value = username.textContent;
  jobInput.value = userJob.textContent;
  editProfilePopup.classList.add('popup__edit-profile_opened');
}

//открытие попапа добавления картинок
function openAddCardPopup() {
  addImagePopup.classList.add('popup__add-image_opened');
}

//закрытие попапа
function closePopup() {
  addImagePopup.classList.remove('popup__add-image_opened');
  editProfilePopup.classList.remove('popup__edit-profile_opened');
}

//изменение данных при отправке формы
function formSubmitHandler(evt) {
  evt.preventDefault();
  username.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup();
}

profileEditButton.addEventListener('click', openEditProfilePopup);
profileAddButton.addEventListener('click', openAddCardPopup);
popupCloseButton.forEach((item) => {
  item.addEventListener('click', closePopup);
});
form.addEventListener('submit', formSubmitHandler);


