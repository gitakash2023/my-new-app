// ThirdPage.jsx

import * as React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const ThirdPage = () => {
  const selectedOption = useSelector((state) => state.option);

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="refId" variant="outlined" value={selectedOption} />
      <TextField id="outlined-basic" label="target" variant="outlined" />
    </Box>
  );
};

export default ThirdPage;
