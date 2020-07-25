import React, { useState } from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const DatePicker = (props) => {
  const { name, label } = props;
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant='inline'
        margin='normal'
        inputVariant='outlined'
        label={label}
        format='MM/dd/yyyy'
        name={name}
        value={selectedDate}
        onChange={handleChange}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
