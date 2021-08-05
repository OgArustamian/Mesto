//переменные для кнопок
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupCloseButton = document.querySelectorAll('.popup__close-button');
//переменные для попапа
const editProfilePopup = document.querySelector('.popup_edit-profile');
const addImagePopup = document.querySelector('.popup_add-image');
const zoomImagePopup = document.querySelector('.popup_zoom');
const username = document.querySelector('.profile__user-name');
const userJob = document.querySelector('.profile__user-job');
//переменные формы изменения данных профиля
const editProfileForm = document.querySelector('#popup-edit-profile');
const nameInput = editProfileForm.querySelector('.popup__info_type_username');
const jobInput = editProfileForm.querySelector('.popup__info_type_job');
//переменные секции с карточками
const addImageForm = document.querySelector('#popup-add-image')
const titleInput = addImageForm.querySelector('.popup__info_type_image-title');
const sourceInput = addImageForm.querySelector('.popup__info_type_image-source');
const elementsList = document.querySelector('.elements__cards-list');
const elementsTemplate = document.querySelector("#elements__template");
const cardsArray = [];
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

function initCards(card) {
  //6 карт из коробки
  const newElements = elementsTemplate.content.firstElementChild.cloneNode(true);
  newElements.querySelector('.elements__title').textContent = card.title;
  newElements.querySelector('.elements__image').src = card.source;
  newElements.querySelector('.elements__image').alt = card.title;
  elementsList.insertBefore(newElements, elementsList.firstChild);
  //удаление карточек
  newElements.querySelector('.elements__delete-button').addEventListener('click', (evt) => {
    evt.target.closest('.elements__card').remove();
  });
  //закрашивание лайка
  newElements.querySelector('.elements__like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__like-button_active');
  });
  //зум для карточек
  const popupImage = document.querySelector('.elements__image');
  popupImage.addEventListener('click', (evt) => {
    evt.preventDefault();
    zoomImagePopup.classList.add('popup_zoom_opened');
    document.querySelector('.popup__image-title').textContent = newElements.querySelector('.elements__title').textContent;
    document.querySelector('.popup__image').src = newElements.querySelector('.elements__image').src;
    document.querySelector('.popup__image').alt = newElements.querySelector('.elements__image').alt;
  });
}

//добавление новых карточек
addImageForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  cardsArray.title = titleInput.value;
  cardsArray.source = sourceInput.value;
  initCards(cardsArray);
  titleInput.value = '';
  sourceInput.value = '';
  closePopup();
});

//открытие попапа со вставкой данных из profile в форму
function editProfile() {
  editProfilePopup.classList.add('popup_edit-profile_opened');
  nameInput.value = username.textContent;
  jobInput.value = userJob.textContent;
}

//открытие попапа добавления карточек
function openImagePopup() {
  addImagePopup.classList.add('popup_add-image_opened');
}

//закрытие попапа
function closePopup() {
  addImagePopup.classList.remove('popup_add-image_opened');
  editProfilePopup.classList.remove('popup_edit-profile_opened');
  zoomImagePopup.classList.remove('popup_zoom_opened');
}

//изменение данных при отправке формы
function formSubmitHandler(evt) {
  evt.preventDefault();
  username.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup();
}

//открытие/закрытие попапа по клику
profileEditButton.addEventListener('click', editProfile);
profileAddButton.addEventListener('click', openImagePopup);
popupCloseButton.forEach((button) => {
  button.addEventListener('click', closePopup);
});

initialCards.forEach(initCards);
editProfileForm.addEventListener('submit', formSubmitHandler);
