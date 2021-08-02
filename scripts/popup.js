const elementsTemplate = wrapper.querySelector('#elements__template');
const imageTitleInput = wrapper.querySelector('.popup__info_type_image-title');
const imageSource = wrapper.querySelector('.popup__info_type_image-source');

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

function removeCard() {
  evt.target.closest('.elements__card').remove();
}

function addCard(title, source) {
  const newElementsTemplate = elementsTemplate.content.firstElementChild.cloneNode(true);
  newElementsTemplate.querySelector('.elements__title').innerText = title.value;
  newElementsTemplate.querySelector('.elements__image').src = source.value;
  newElementsTemplate.querySelector('.elements__delete-button').addEventListener('click', removeCard);
  elements.append(newElementsTemplate);
};


popupSubmit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addCard(imageTitleInput, imageSource);
  closePopup();
});

initialCards.forEach(addCard);
