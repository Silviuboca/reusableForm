import React from 'react';
import { TextField } from '@material-ui/core';

export default function Input(props) {
  const { name, label, value, onChange } = props;
  return (
    <TextField label={label} value={value} name={name} onChange={onChange} />
  );
}
