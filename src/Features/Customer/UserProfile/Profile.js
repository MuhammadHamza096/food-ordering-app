import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import CommonGridBasedForm from '../../../components/CommonGridBasedForm';
import { TEXT_FIELD } from '../../../components/CommonGridBasedForm/FieldTypes';
import { emailRegex } from '../../../redux/ActionTypes';
import { contactRegex } from '../../../scripts/constants';
import { fieldChangeHandler, validateOnSubmit } from '../../../util/CommonGridBasedFormUtils';
import { editUser } from '../actions';

const AddUser = () => {
  const { id, email, name, isLoading } = useSelector((state) => {
    const {
      authReducer: { id, email, name },
      loaderReducer: { isLoading },
    } = state;
    return {
      id,
      email,
      name,
      isLoading,
    };
  });

  const dispatch = useDispatch();

  const [onSaveSuccess, setOnSaveSuccess] = useState(false);
  const [fields, setFields] = useState([
    {
      type: TEXT_FIELD,
      textFieldType: 'text',
      label: 'Name',
      variant: 'standard',
      value: name,
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
      getValidation: (value) => {
        if (value.length < 3) {
          return 'Name must be of length 3 atleast';
        }
        return '';
      },
    },
    {
      type: TEXT_FIELD,
      textFieldType: 'email',
      label: 'Email',
      variant: 'standard',
      value: email,
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
      getValidation: (value) => {
        if (!emailRegex.test(value)) {
          return 'Email type is not valid';
        }
        return '';
      },
    },
    {
      type: TEXT_FIELD,
      textFieldType: 'password',
      label: 'Password',
      variant: 'standard',
      value: '',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
      getValidation: (value) => {
        if (value.length < 8) {
          return 'Password must be 8 characters long';
        }
        return '';
      },
    },
    {
      type: TEXT_FIELD,
      textFieldType: 'text',
      label: 'Contact',
      variant: 'standard',
      value: '',
      errorMessage: '',
      onChange: ({ target: { value } }, index) => {
        const updatedFields = fieldChangeHandler(fields, value, index);
        setFields(updatedFields);
      },
      getValidation: (value) => {
        if (!contactRegex.test(value)) {
          return 'Contact length or Type is not valid';
        }
        return '';
      },
    },
  ]);

  const saveHandler = () => {
    const { validateArray, isValid } = validateOnSubmit(fields);
    setFields(validateArray);
    const [{ value: name }, { value: email }, { value: password }] = fields;

    isValid && dispatch(editUser({ id, name, email, password, setOnSaveSuccess }));
  };

  const buttons = {
    button: [
      {
        type: 'button',
        name: 'save',
        minWidth: '100%',
        color: 'primary',
        clickHandler: saveHandler,
        isLoading,
      },
    ],
  };

  return <CommonGridBasedForm buttons={buttons} fields={fields} heading="Profile" onSaveSuccess={onSaveSuccess} />;
};

export default AddUser;
