"use strict";

const userForm = new UserForm();

function setLoginErrorMessage(message) {
  const loginErrorElement = document.querySelector('.login-error');
  loginErrorElement.textContent = message;
  loginErrorElement.style.display = 'block';
}

function setRegisterErrorMessage(message) {
  const registerErrorElement = document.querySelector('.register-error');
  registerErrorElement.textContent = message;
  registerErrorElement.style.display = 'block';
}

function loginFormAction(data) {
  ApiConnector.login(data, (response) => {
    if (response.success) {
      location.reload();
    } else {
      setLoginErrorMessage(response.error);
    }
  });
}

function registerFormAction(data) {
  ApiConnector.register(data, (response) => {
    if (response.success) {
      location.reload();
    } else {
      setRegisterErrorMessage(response.error);
    }
  });
}

userForm.loginFormCallback = loginFormAction;
userForm.registerFormCallback = registerFormAction;
