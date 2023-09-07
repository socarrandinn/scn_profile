import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button, ButtonProps, Menu, MenuItem, MenuProps } from '@mui/material';
import { MouseEvent, memo, useCallback, useState } from 'react';

type OptionMenuProps = {
  option: string;
  buttonProps?: ButtonProps;
  menuProps?: MenuProps;
  onChange?: any;
  options: string[];
};

const OptionMenu = ({ option, buttonProps, menuProps, onChange, options }: OptionMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(({ target }: any) => {
    onChange?.({ target: { id: target.id, value: target.innerText } });

    setAnchorEl(null);
  }, []);

  return (
    <>
      <Button endIcon={<ArrowDropDownIcon />} onClick={handleClick} {...buttonProps} sx={{ paddingRight: '0px' }}>
        {option}
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        {...menuProps}
      >
        {options.map((option) => (
          <MenuItem key={option} id='option' onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default memo(OptionMenu);
