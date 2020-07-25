import React from 'react';
import {
  FormControlLabel,
  FormControl,
  Checkbox as MuiCheckbox,
} from '@material-ui/core';

const Checkbox = (props) => {
  const { name, label, value, onChange } = props;

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color='primary'
            checked={value}
            onChange={onChange}
          />
        }
        label={label}
      />
    </FormControl>
  );
};

export default Checkbox;
