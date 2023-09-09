"use strict";

const userForm = new UserForm();

function loginFormAction(data) {
  ApiConnector.login(data, (response) => {
    if (response.success) {
      location.reload();
    } else {
      alert(response.error);
    }
  });
}

function registerFormAction(data) {
  ApiConnector.register(data, (response) => {
    if (response.success) {
      location.reload();
    } else {
      alert(response.error);
    }
  });
}

userForm.loginFormCallback = loginFormAction;
userForm.registerFormCallback = registerFormAction;
