/* eslint-disable indent */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Select, MenuItem } from '@material-ui/core';

const SelectTag = (props) => {
  const { values, width, onChange, index, value } = props;

  return (
    <Select {...props} fullWidth onChange={(e) => onChange(e, index)} value={value}>
      {values
        ? values.map((value, index) => (
            <MenuItem key={index} value={value}>
              {value}
            </MenuItem>
          ))
        : null}
    </Select>
  );
};

export default SelectTag;
