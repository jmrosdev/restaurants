import { isEmpty } from 'lodash'
import { messageError } from '../constants';

export const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export const formRegisterValidate = (form) => {
    const { email, password, repeatPassword} = form
    if (isEmpty(email) || isEmpty(password) || isEmpty(repeatPassword)) {
        return {
            isValidForm: false,
            errorType: messageError.EMPTY_FIELD
        }
    } else if (!validateEmail(email)){
        return {
            isValidForm: false,
            errorType: messageError.INVALID_MAIL
        }
    } else if (password !== repeatPassword) {
        return {
            isValidForm: false,
            errorType: messageError.INVALID_EQUAL_PASSWORDS
        }
    } else if (password.length < 6 || repeatPassword.length < 6) {
        return {
            isValidForm: false,
            errorType: messageError.INVALID_PASSWORD
        }
    }
    return {
        isValidForm: true
    }
}