import React, { useState } from 'react';

import { dispatch } from 'rxjs/internal/observable/pairs';

import FormComponent from '../../../components/FormComponent';
import { login } from '../actions';

function LoginForm() {
  const [loginForm, setLoginForm] = useState({});

  const loginClickHandler = () => {
    dispatch(login({ email: 'asdas@asd.com', password: 'asdasd' }));
  };

  const textFiledChangeHandler = (e) => {
    const { value, name } = e.target;

    setLoginForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const loginInputs = {
    fields: [
      {
        required: true,
        label: 'UserName',
        name: 'username',
        type: 'text',
        value: loginForm?.username || '',
        changeHandler: textFiledChangeHandler,
      },
      {
        required: true,
        label: 'Password',
        name: 'password',
        type: 'password',
        minlength: '6',
        value: loginForm?.password || '',
        changeHandler: textFiledChangeHandler,
      },
    ],
  };
  const loginButtons = {
    button: [
      {
        type: 'submit',
        name: 'login',
        minWidth: '100%',
        clickHandler: loginClickHandler,
      },
    ],
  };

  return (
    <div>
      <FormComponent
        basicButtons={loginButtons}
        forgotPassword="Forgot Password?"
        formTitle="Login"
        inputFields={loginInputs}
        label="Create New Account?"
        navigationPath="/signup"
      />
    </div>
  );
}

export default LoginForm;