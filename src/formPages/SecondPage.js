import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { setInputData } from '../redux/slices/inputDataSlice';

export default function SecondPage() {
  const dispatch = useDispatch();
  const subject = useSelector(state => state.inputData.subject);

  const handleChange = (field) => (event) => {
    const { value } = event.target;
    dispatch(setInputData({ [field]: value }));
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="subject" label="Subject" variant="outlined" value={subject} onChange={handleChange('subject')} />
      <TextField id="customerId" label="Customer ID" variant="outlined" onChange={handleChange('customerId')} />
      <TextField id="accountId" label="Account ID" variant="outlined" onChange={handleChange('accountId')} />
      <TextField id="journeyContext" label="Journey Context" variant="outlined" onChange={handleChange('journeyContext')} />
      <TextField id="targetSystem" label="Target System" variant="outlined" onChange={handleChange('targetSystem')} />
      <TextField id="ssoCorelationId" label="SSO Corelation ID" variant="outlined" onChange={handleChange('ssoCorelationId')} />
    </Box>
  );
}
