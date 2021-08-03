//переменные для кнопок
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupCloseButton = document.querySelectorAll('.popup__close-button');
//переменные для попапа
const editProfilePopup = document.querySelector('.popup__edit-profile');
const addImagePopup = document.querySelector('.popup__add-image');
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

//6 карточек "из коробки"
function addCards(card) {
  const newElements = elementsTemplate.content.firstElementChild.cloneNode(true);
  newElements.querySelector('.elements__title').textContent = card.title;
  newElements.querySelector('.elements__image').src = card.source;
  elementsList.insertBefore(newElements, elementsList.firstChild);
  //удаление карточек
  newElements.querySelector('.elements__delete-button').addEventListener('click', (evt) => {
    evt.target.closest('.elements__card').remove();
  });
  //закрашивание лайка
  newElements.querySelector('.elements__like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__like-button_active');
  });
}

//добавление новых карточек
addImageForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  cardsArray.title = titleInput.value;
  cardsArray.source = sourceInput.value;
  addCards(cardsArray);
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

//открытие/закрытие попапа по клику
profileEditButton.addEventListener('click', openEditProfilePopup);
profileAddButton.addEventListener('click', openAddCardPopup);
popupCloseButton.forEach((item) => {
  item.addEventListener('click', closePopup);
});

initialCards.forEach(addCards);
editProfileForm.addEventListener('submit', formSubmitHandler);

