import React from 'react';
import { Grid } from '@material-ui/core';
import Controls from '../controls/Controls';
import { useForm, Form } from './useForm';
import getReasonsCollection from '../../services/CustomInputService';

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' },
];

const initialFieldValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  location: '',
  gender: 'male',
  reasonId: '',
  startDate: new Date(),
  isReady: false,
};
export default function ReusableForm() {
  const { values, handleChange } = useForm(initialFieldValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name='fullName'
            label='Full Name'
            value={values.fullName}
            onChange={handleChange}
          />
          <Controls.Input
            label='Email'
            name='email'
            value={values.email}
            onChange={handleChange}
          />
          <Controls.Input
            label='Mobile'
            name='mobile'
            value={values.mobile}
            onChange={handleChange}
          />
          <Controls.Input
            label='Location'
            name='location'
            value={values.location}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            label='Gender'
            name='gender'
            value={values.gender}
            items={genderItems}
            onChange={handleChange}
          />
          <Controls.SelectDropdown
            name='reasonId'
            label='What is your reason?'
            value={values.reasonId}
            onchange={handleChange}
            options={getReasonsCollection()}
          />
          <Controls.DatePicker
            name='startDate'
            label='Start Date'
            values={values.startDate}
            onchange={handleChange}
          />
          <Controls.Checkbox
            name='isReady'
            label='I agree with holding myself accountable'
            values={values.isReady}
            onchange={handleChange}
          />
          <div>
            <Controls.Button type='submit' text='Submit' />
            <Controls.Button text='Reset' color='default' />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
