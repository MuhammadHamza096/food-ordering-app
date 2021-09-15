import React, { useState } from 'react';

import CommonGridBasedForm from '../../../../components/CommonGridBasedForm';
import { SELECT, TEXT_FIELD } from '../../../../components/CommonGridBasedForm/FieldTypes';
import { emailRegex } from '../../../../redux/ActionTypes';
import { contactRegex } from '../../../../scripts/constants';
import { validateOnSubmit } from '../../../../util/FieldsValidCheckOnForm';

const EditVendor = () => {
  const [onSaveSuccess, setOnSaveSuccess] = useState(false);

  const [role, setRole] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [timing, setTiming] = useState('');
  const [building, setBuilding] = useState('');
  const [fields, setFields] = useState([
    {
      type: SELECT,
      label: 'Role',
      values: ['User', 'Vendor'],
      value: role,
      isValid: true,
      errorMessage: '',

      onChange: (event, index) => {
        setRole(event.target.value);
        fields[index].value = event.target.value;
      },
    },
    {
      type: TEXT_FIELD,
      textFieldType: 'email',
      label: 'Email',
      variant: 'standard',
      value: email,
      isValid: true,
      errorMessage: '',
      onChange: (event, index) => {
        setEmail(event.target.value);
        fields[index].value = event.target.value;
        fields[index].getValidation(event.target.value, index);
      },
      getValidation: (value, index) => {
        if (!emailRegex.test(value)) {
          fields[index].errorMessage = 'Email type is not valid';
          fields[index].isValid = false;
        } else {
          fields[index].errorMessage = '';
          fields[index].isValid = true;
        }
      },
    },
    {
      type: TEXT_FIELD,
      textFieldType: 'password',
      label: 'Password',
      variant: 'standard',
      value: password,
      isValid: true,
      errorMessage: '',
      onChange: (event, index) => {
        setPassword(event.target.value);
        fields[index].value = event.target.value;
        fields[index].getValidation(event.target.value, index);
      },
      getValidation: (value, index) => {
        if (value.length < 8) {
          fields[index].errorMessage = 'Password must be 8 characters long';
          fields[index].isValid = false;
        } else {
          fields[index].errorMessage = '';
          fields[index].isValid = true;
        }
      },
    },
    {
      type: TEXT_FIELD,
      textFieldType: 'text',
      label: 'Contact',
      variant: 'standard',
      value: contact,
      isValid: true,
      errorMessage: '',
      onChange: (event, index) => {
        setContact(event.target.value);
        fields[index].value = event.target.value;
        fields[index].getValidation(event.target.value, index);
      },
      getValidation: (value, index) => {
        if (!contactRegex.test(value)) {
          fields[index].errorMessage = 'Contact length or Type is not valid';
          fields[index].isValid = false;
        } else {
          fields[index].errorMessage = '';
          fields[index].isValid = true;
        }
      },
    },
    {
      type: TEXT_FIELD,
      textFieldType: 'text',
      label: 'Timing',
      variant: 'standard',
      value: timing,
      isValid: true,
      errorMessage: '',
      onChange: (event, index) => {
        setTiming(event.target.value);
        fields[index].value = event.target.value;
      },
    },
    {
      type: TEXT_FIELD,
      textFieldType: 'text',
      label: 'Building',
      variant: 'standard',
      value: building,
      isValid: true,
      errorMessage: '',
      onChange: (event, index) => {
        setBuilding(event.target.value);
        fields[index].value = event.target.value;
      },
    },
  ]);

  const saveHandler = () => {
    validateOnSubmit(fields, setFields) ? setOnSaveSuccess(true) : setOnSaveSuccess(false);
  };

  const buttons = {
    button: [
      {
        type: 'button',
        name: 'save',
        minWidth: '100%',
        clickHandler: saveHandler,
      },
    ],
  };

  return <CommonGridBasedForm buttons={buttons} fields={fields} heading="Edit Vendor" onSaveSuccess={onSaveSuccess} />;
};

export default EditVendor;
