import React from 'react';
import ReusableForm from './ReusableForm';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useForm, Form } from './useForm';
import { Paper, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const CustomInputForForm = () => {
  const formStyles = useStyle();

  useForm();

  return (
    <div>
      <header style={{ textAlign: 'center' }}>
        <AccountCircleIcon style={{ color: 'lightblue', fontSize: '40px' }} />
        <br />
        Register
      </header>
      <Paper className={formStyles.pageContent}>
        <Form />
        <ReusableForm />
      </Paper>
    </div>
  );
};

export default CustomInputForForm;
