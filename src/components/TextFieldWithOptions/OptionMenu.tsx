import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button, ButtonProps, Menu, MenuItem, MenuProps } from '@mui/material';
import { MouseEvent, memo, useCallback, useState } from 'react';

type OptionMenuProps = {
  initialOption: string;
  optionFieldValue: string;
  buttonProps?: ButtonProps;
  menuProps?: MenuProps;
  onChange?: any;
  options: string[];
};

const OptionMenu = ({
  initialOption,
  optionFieldValue,
  buttonProps,
  menuProps,
  onChange,
  options,
}: OptionMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback((event: any, option: string) => {
    if (event.target.id === 'menu-item') {
      onChange?.({ target: { name: optionFieldValue, value: option } });
    }

    setAnchorEl(null);
  }, []);

  return (
    <>
      <Button endIcon={<ArrowDropDownIcon />} onClick={handleClick} {...buttonProps}>
        {initialOption}
      </Button>
      <Menu
        id='options-menu'
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        {...menuProps}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            id='menu-item'
            onClick={(event) => {
              handleClose(event, option);
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default memo(OptionMenu);
