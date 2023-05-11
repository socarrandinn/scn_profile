import React, { memo, useCallback, useState } from 'react';
import Popover from '@mui/material/Popover';
import { Box, styled, Tooltip } from '@mui/material';
import { Color, ColorResult, SketchPicker } from 'react-color';
import { InputProps as StandardInputProps } from '@mui/material/Input/Input';
import { useTranslation } from 'react-i18next';

const CustomCirclePicker = styled(Box)<any>(({ bg }: { bg: string }) => ({
  position: 'relative',
  height: '28px !important',
  width: '28px !important',
  cursor: 'pointer',
  outline: 'none',
  // borderRadius: '50%',
  background: `${bg ? 'transparent' : bg}`,
  boxShadow: `${bg || '#E5EAF2'} 0px 0px 0px ${!bg ? '15px' : '3px'} ${!bg ? 'inset' : `inset, ${bg} 0px 0px 5px`}`,
  transition: 'all 100ms ease 0s',
  '&:hover': {
    transform: 'scale(1.2)',
    transition: 'transform 100ms ease 0s',
  },
}));

interface CustomColorPickerProps {
  value?: Color;
  onChange?: StandardInputProps['onChange'];
}

const CustomColorPicker = ({ value, onChange }: CustomColorPickerProps) => {
  const { t } = useTranslation('common');

  const handleChange = useCallback(
    (color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
      // @ts-ignore
      onChange && onChange({ target: { value: color?.hex } });
    },
    [onChange],
  );

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Tooltip title={t('addNewColor')}>
        <CustomCirclePicker onClick={handleClick} bg={value}>
          {/* <EditIndicator>
            <EditIcon sx={{ fontSize: '14px' }} />
          </EditIndicator> */}
        </CustomCirclePicker>
      </Tooltip>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <SketchPicker color={value} onChange={handleChange} />
      </Popover>
    </div>
  );
};

export default memo(CustomColorPicker);
