//функция выделения ошибок
function showInputError(formElement, inputElement, errorMessage, elements) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(elements.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(elements.errorClass);
};

//функция скрытия ошибок
function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(elements.inputErrorClass);
  errorElement.classList.remove(elements.errorClass);
  errorElement.textContent = '';
};

//функция проверки формы на валидность
function checkInputValidity(formElement, inputElement, elements) {
  if (!inputElement.validity.valid) {
    showInputError(formElement. inputElement, inputElement.validationMessage, elements);
  } else {
    hideInputError(formElement, inputElement, elements);
  };
};

//добавления слушателя событий для input
function setEventListeners(formElement, elements) {
  const inputList = Array.from(formElement.querySelectorAll(elements.inputSelector));
  const buttonElement = formElement.querySelector(elements.submitButtonSelector);
  toggleSubmitButton(inputList, buttonElement, elements);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, elements);
      toggleSubmitButton(inputList, buttonElement, elements);
    });
  });
};

//функция валидации
const enableValidation = (elements = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}) => {
  const formList = Array.from(document.querySelectorAll(elements.formSelector));
  formList.forEach(function(formElement){
      setEventListeners(formElement, elements);
  });
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleSubmitButton = (inputList, buttonElement, elements) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(elements.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(elements.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  };
};

enableValidation();
