import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button, ButtonProps, Menu, MenuItem, MenuProps } from '@mui/material';
import { MouseEvent, memo, useCallback, useState } from 'react';

type OptionMenuProps = {
  initialOption: string;
  optionFieldValue: string;
  menuButtonProps?: ButtonProps;
  menuProps?: MenuProps;
  onChange?: any;
  options: string[];
};

const OptionMenu = ({
  initialOption,
  optionFieldValue,
  menuButtonProps,
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
      <Button
        endIcon={<ArrowDropDownIcon />}
        sx={{
          '& .MuiButton-endIcon': { marginLeft: '2px' },
        }}
        onClick={handleClick}
        color={'inherit'}
        {...menuButtonProps}
      >
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
