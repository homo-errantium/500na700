const EMAIL_REGEX = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const DATA_PROCESSING_TEXT = 'Я даю согласие на обработку данных';
const PHONE_REGEX = /^\+?[1-9][0-9]{7,14}$/;
const DATE_REGEX = /[0-9]{2}.[0-9]{2}.[0-9]{4}/;
const NAME_REGEX = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
const TIME_REGEX = /[0-9]{4}/;

export {
  EMAIL_REGEX,
  DATA_PROCESSING_TEXT,
  PHONE_REGEX,
  NAME_REGEX,
  DATE_REGEX,
  TIME_REGEX,
};
