import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button, ButtonProps, Menu, MenuItem, MenuProps } from '@mui/material';
import { MouseEvent, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

type OptionMenuProps = {
  initialOption: string;
  optionFieldValue: string;
  menuButtonProps?: ButtonProps;
  menuProps?: MenuProps;
  onChange?: any;
  options: string[];
  readOnly?: boolean;
};

const OptionMenu = ({
  initialOption,
  optionFieldValue,
  menuButtonProps,
  menuProps,
  onChange,
  readOnly,
  options,
}: OptionMenuProps) => {
  const { t } = useTranslation('common');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentOption, setCurrentOption] = useState(initialOption);
  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(
    (event: any, option: string) => {
      if (event.target.id === 'menu-item') {
        setCurrentOption(option);
        onChange?.({ target: { name: optionFieldValue, value: option } });
      }
      setAnchorEl(null);
    },
    [onChange, optionFieldValue],
  );

  return (
    <>
      <Button
        disabled={readOnly}
        endIcon={<ArrowDropDownIcon />}
        sx={{
          '& .MuiButton-endIcon': { marginLeft: '2px' },
        }}
        onClick={handleClick}
        color={'inherit'}
        {...menuButtonProps}
      >
        {t(currentOption)}
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
            {t(option)}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default memo(OptionMenu);
