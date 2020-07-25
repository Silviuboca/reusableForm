import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
} from '@material-ui/core';

export default function SelectDropdown(props) {
  const { name, label, options } = props;

  const [selectReason, setSelectReason] = useState('');

  const handleChange = (e) => {
    setSelectReason(e.target.value);
  };

  return (
    <FormControl variant='outlined'>
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        label={label}
        name={name}
        value={selectReason}
        onChange={handleChange}>
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        {options.map((item) => {
          return (
            <MenuItem key={item.id} value={item.id}>
              {item.title}
            </MenuItem>
          );
        })}
      </MuiSelect>
    </FormControl>
  );
}
