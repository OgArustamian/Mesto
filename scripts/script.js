//переменные для кнопок
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupCloseButtons = document.querySelectorAll('.popup__close-button');
//переменные для попапа
const editProfilePopup = document.querySelector('.popup_edit-profile');
const addImagePopup = document.querySelector('.popup_add-image');
const zoomImagePopup = document.querySelector('.popup_zoom');
const username = document.querySelector('.profile__user-name');
const userJob = document.querySelector('.profile__user-job');
const popupImageTitle = document.querySelector('.popup__image-title');
const popupImage = document.querySelector('.popup__image');
//переменные формы изменения данных профиля
const editProfileForm = document.querySelector('#popup-edit-profile');
const nameInput = editProfileForm.querySelector('.popup__input_type_username');
const jobInput = editProfileForm.querySelector('.popup__input_type_job');
//переменные секции с карточками
const addImageForm = document.querySelector('#popup-add-image')
const titleInput = addImageForm.querySelector('.popup__input_type_image-title');
const sourceInput = addImageForm.querySelector('.popup__input_type_image-source');
const elementsList = document.querySelector('.elements__cards-list');
const elementsTemplate = document.querySelector("#elements__template");
const cardsArray = [];

initialCards.forEach((initialCard) => {
  const newCard = createCard(initialCard);
  addCard(newCard);
});

//создание шаблона карточек
function createCard(card) {
  const newCard = elementsTemplate.content.firstElementChild.cloneNode(true);
  newCard.querySelector('.elements__title').textContent = card.title;
  newCard.querySelector('.elements__image').src = card.source;
  newCard.querySelector('.elements__image').alt = card.title;
  //удаление карточек
  newCard.querySelector('.elements__delete-button').addEventListener('click', (evt) => {
    evt.target.closest('.elements__card').remove();
  });
  //закрашивание лайка
  newCard.querySelector('.elements__like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__like-button_active');
  });
  //зум для карточек
  newCard.querySelector('.elements__image').addEventListener('click', () => {
    openPopup(zoomImagePopup);
    popupImageTitle.textContent = card.title;
    popupImage.src = card.source;
    popupImage.alt = card.title;
  });
  return newCard;
}

//добавление карточек в начало списка
function addCard(card) {
  elementsList.prepend(card);
}

//добавление новых карточек через попап
addImageForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  cardsArray.title = titleInput.value;
  cardsArray.source = sourceInput.value;
  elementsList.prepend(createCard(cardsArray));
  addImageForm.reset();
  closePopup(addImagePopup);
});

//открытие попапа со вставкой данных из profile в форму
function editProfile() {
  openPopup(editProfilePopup);
  nameInput.value = username.textContent;
  jobInput.value = userJob.textContent;
}

//изменение данных при отправке формы
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  username.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup(editProfilePopup);
}

//отправка формы редактирования профиля
editProfileForm.addEventListener('submit', handleProfileFormSubmit);

//открытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

//закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//открытие/закрытие попапа по клику
profileEditButton.addEventListener('click', editProfile);
profileAddButton.addEventListener('click', () => {
  openPopup(addImagePopup);
});
popupCloseButtons.forEach((button) => {
  button.addEventListener('click', (evt) => {
    const closeButton = evt.target.closest('.popup');
    closePopup(closeButton);
  });
});


const openedPopup = document.querySelectorAll('.popup_opened');
openedPopup.forEach((overlay) => {
  overlay.addEventListener('click', (evt) => {
    const popup = evt.target.closest('.popup');
    closePopup(popup);
  });
});
