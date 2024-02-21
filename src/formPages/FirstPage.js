import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { setOption, selectOption } from '../redux/slices/optionSlice';
hello
const options = ['CWSMOBILEIDPADAPTER', 'CWSWEBIDPADAPTER'];

export default function FirstPage() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const dispatch = useDispatch();
  const selectedIndex = useSelector(selectOption);
  console.log(selectedIndex)

  const handleClick = () => {
    dispatch(setOption(options[selectedIndex]));
  };

  const handleMenuItemClick = (index) => {
    dispatch(setOption(options[index]));
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup
  variant="contained"
  ref={anchorRef}
  aria-label="Button group with a nested menu"
  sx={{ width: '200px' }} 
>
  <Button onClick={handleClick} sx={{ width: '100%' }}>{options[selectedIndex]}</Button>
  <Button
    aria-controls={open ? 'split-button-menu' : undefined}
    aria-expanded={open ? 'true' : undefined}
    aria-label="select merge strategy"
    aria-haspopup="menu"
    onClick={handleToggle}
    sx={{ minWidth: 'auto' }} // Adjust width as needed
  >
    <ArrowDropDownIcon />
  </Button>
</ButtonGroup>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
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
    </React.Fragment>
  );
}


