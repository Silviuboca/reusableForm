import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

export const useForm = (initialFieldValues) => {
  const [values, setValues] = useState(initialFieldValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    setValues,
    handleChange,
  };
};

const useStyle = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

export const Form = (props) => {
  const formStyles = useStyle();

  return (
    <form className={formStyles.root} autoComplete='off'>
      {props.children}
    </form>
  );
};
