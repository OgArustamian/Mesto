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
const nameInput = editProfileForm.querySelector('.popup__info_type_username');
const jobInput = editProfileForm.querySelector('.popup__info_type_job');
//переменные секции с карточками
const addImageForm = document.querySelector('#popup-add-image')
const titleInput = addImageForm.querySelector('.popup__info_type_image-title');
const sourceInput = addImageForm.querySelector('.popup__info_type_image-source');
const elementsList = document.querySelector('.elements__cards-list');
const elementsTemplate = document.querySelector("#elements__template");
const cardsArray = [];

function initCards(card) {
  //6 карт из коробки
  const newElement = elementsTemplate.content.firstElementChild.cloneNode(true);
  newElement.querySelector('.elements__title').textContent = card.title;
  newElement.querySelector('.elements__image').src = card.source;
  newElement.querySelector('.elements__image').alt = card.title;
  elementsList.prepend(newElement);

   //удаление карточек
   newElement.querySelector('.elements__delete-button').addEventListener('click', (evt) => {
    evt.target.closest('.elements__card').remove();
  });

  //закрашивание лайка
  newElement.querySelector('.elements__like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__like-button_active');
  });

  //зум для карточек
  const elementImage = newElement.querySelector('.elements__image');
  const elementTitle = newElement.querySelector('.elements__title');
  elementImage.addEventListener('click', () => {
    openPopup(zoomImagePopup);
    popupImageTitle.textContent = elementTitle.textContent;
    popupImage.src = elementImage.src;
    popupImage.alt = elementImage.alt;
  });
}

//добавление новых карточек
addImageForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  cardsArray.title = titleInput.value;
  cardsArray.source = sourceInput.value;
  initCards(cardsArray);
  addImageForm.reset();
  closePopup();
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
  closePopup();
}

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
  button.addEventListener('click', () => {
    closePopup(addImagePopup);
    closePopup(editProfilePopup);
    closePopup(zoomImagePopup);
  });
});

initialCards.forEach(initCards);
editProfileForm.addEventListener('submit', handleProfileFormSubmit);

