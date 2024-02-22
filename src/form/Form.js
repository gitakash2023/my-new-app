import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Typography from '@mui/material/Typography';
 
export default function Form() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [data, setData] = useState([]);
  const options = ['CWSMOBILEIDPADAPTER', 'CWSWEBIDPADAPTER'];
 
  const fetchApiData = async (apiKey) => {
    try {
      const response = await fetch(`https://localhost:8443/get/idpConnection?apiKey=${apiKey}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      alert('API call error:', error);
    }
  };
 
  const handleMenuItemClick = (index) => {
    setSelectedIndex(index);
    setOpen(false);
    const apiKey = index === 0 ? 'IXJYevGCWe3Y0iEVQCvaaCda6gS' : 'IXJYevGCWe3Y0iEfjhvjvfCda6gS';
    fetchApiData(apiKey);
  };
 
  const handleClick = () => {
   
  };
 
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
 
  const handleClose = (event) => {
    setOpen(false);
  };
 
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Select your IDP
      </Typography>
      <ButtonGroup
        variant="contained"
        aria-label="Button group with a nested menu"
        sx={{ width: '300px' }}
      >
        <Button
          onClick={handleClick}
          sx={{ width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          {options[selectedIndex]}
        </Button>
        <Button
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
          sx={{ minWidth: 'auto' }}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
 
      <Popper
        open={open}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={() => handleMenuItemClick(index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <Typography variant="h6" gutterBottom>
       vsid
      </Typography>
      <select>
        {data.map((item) => (
          <option key={item.id} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
}
 