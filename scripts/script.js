const wrapper = document.querySelector('.wrapper');
//переменные для кнопок
const profileEditButton = wrapper.querySelector('.profile__edit-button');
const profileAddButton = wrapper.querySelector('.profile__add-button');
const popupCloseButton = wrapper.querySelectorAll('.popup__close-button');
//переменные для попапа
const editProfilePopup = wrapper.querySelector('.popup__edit-profile');
const addImagePopup = wrapper.querySelector('.popup__add-image');
const username = wrapper.querySelector('.profile__user-name');
const userJob = wrapper.querySelector('.profile__user-job');
//переменные формы
const editProfileForm = document.querySelector('#popup-edit-profile');
const nameInput = editProfileForm.querySelector('.popup__info_type_username');
const jobInput = editProfileForm.querySelector('.popup__info_type_job');
const addImageForm = document.querySelector('#popup-add-image')
const titleInput = addImageForm.querySelector('.popup__info_type_image-title');
const sourceInput = addImageForm.querySelector('.popup__info_type_image-source');
const elementsList = document.querySelector('.elements__cards-list');
const elementsTemplate = document.querySelector("#elements__template");

const initialCards = [
  {
    title: 'Архыз',
    source: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    source: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    source: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    source: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    source: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    source: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//функционал добавления новых карточек на страницу
addImageForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const newElements = elementsTemplate.content.firstElementChild.cloneNode(true);
  newElements.querySelector('.elements__title').textContent = titleInput.value;
  newElements.querySelector('.elements__image').src = sourceInput.value;
  elementsList.insertBefore(newElements, elementsList.firstChild);
  titleInput.value = '';
  sourceInput.value = '';
  closePopup();
});

//открытие попапа со вставкой данных из profile в форму
function openEditProfilePopup() {
  nameInput.value = username.textContent;
  jobInput.value = userJob.textContent;
  editProfilePopup.classList.add('popup__edit-profile_opened');
}

//открытие попапа добавления карточек
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
editProfileForm.addEventListener('submit', formSubmitHandler);

