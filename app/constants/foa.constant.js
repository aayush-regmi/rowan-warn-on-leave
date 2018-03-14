(function () {
    'use strict';

    var VALUES = {
        INCORRECT_USER_PASSWORD: 'Incorrect Username Or Password.',
        FIRST_NAME_REQ: 'First name is required.',
        FIRST_NAME_TOO_SHORT: 'First name is too short.',
        FIRST_NAME_TOO_LONG: 'First name is too long.',
        MIDDLE_NAME_TOO_SHORT: 'Middle name is too short.',
        MIDDLE_NAME_TOO_LONG: 'Middle name is too long.',
        LAST_NAME_REQ: 'Last name is required.',
        LAST_NAME_TOO_SHORT: 'Last name is too short.',
        LAST_NAME_TOO_LONG: 'Last name is too long.',
        INVALID_EMAIL: 'Invalid email address.',
        EMAIL_ADD_REQ: 'Email address is required.',
        EMAIL_ADD_TOO_LONG: 'Email address is too long.',
        EMAIL_ADD_TOO_SHORT: 'Email address is too short',
        CONTACT_NO_REQ: 'Contact number is required.',
        CONTACT_NO_SIZE: 'Size should be 7 to 10 numbers only.',
        ADDRESS_REQ: 'Address is required',
        ADDRESS_TOO_SHORT: 'Address is too short',
        ADDRESS_TOO_LONG: 'Address is too long',
        INVALID_ADDRESS: 'Invalid address.',
        PASSWORD_REQ: 'Password is required.',
        PASSWORD_TOO_SHORT: 'Password is too short',
        PASSWORD_TOO_LONG: 'Password is too long',
        PASSWORD_NOT_MATCH: 'Password and Confirm Password did not match! Try Again.',
        USERNAME_NOT_EXIST: 'Username or password does not exist.',
        USER_ALREADY_EXIST: 'User email Id already exists.',

        ALPHABETS_AND_NUMBERS_ONLY: 'Accepts alphabets and numbers only.',
        ALPHABETS_ONLY: 'Accepts alphabets only.',
        NUMBERS_ONLY: 'Accepts numbers only.',
    };
    angular.module('FoodOrderingApp')
        .constant('APP_CONSTANT', VALUES);
})();