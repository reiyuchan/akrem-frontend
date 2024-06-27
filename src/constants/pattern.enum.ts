export enum Pattern {
  EMAIL_PATTERN = '[^.!#$%&*+-\\/=?\\^_`\\{\\|\\}~][a-zA-Z0-9!#$%&*+-\\/=?\\^_`\\{\\|\\}~]{2,}@[a-z]+\\.[a-z]{2,}',
  PASSWORD_PATTERN = '.{8,20}',
  FIRST_NAME_PATTERN = '[a-zA-Z][a-zA-Z ]+[a-zA-Z]',
  LAST_NAME_PATTERN = '[a-zA-Z][a-zA-Z ]+[a-zA-Z]',
  PHONE_PATTERN = '01+[0-9]{9,9}',
}
