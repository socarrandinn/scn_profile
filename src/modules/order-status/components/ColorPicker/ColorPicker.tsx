import { FlexBox } from '@dfl/mui-react-common';
import useColorPicker from 'modules/order-status/hooks/useColorPicker';
import { useMemo, useState } from 'react';
import { Box } from '@mui/material';
import { colors } from 'modules/order-status/constants/colors';
import AddColor from './AddColor';
interface IColorPicker {
  customColors?: boolean;
  colorsList?: string[];
  onChangeAction?: (color: string) => void;
}

const ColorPicker = ({ customColors = false, colorsList, onChangeAction = (color) => {} }: IColorPicker) => {
  const [update, setUpdate] = useState(false);
  const colorsToDisplay = useMemo(() => {
    return !!customColors && !!colorsList ? colorsList : colors;
  }, [customColors, colors, colorsList]);

  const { selectedColor, selectColor } = useColorPicker(colorsToDisplay[0]);

  const handleClick = (color: string) => {
    selectColor(color);
    onChangeAction(color);
  };

  const outterSx = (color: string) => {
    return {
      minWidth: '2.5rem',
      minHeight: '2.5rem',
      backgroundColor: 'transparent  #dddddd75',
      borderRadius: '50%',
      margin: '.3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      transition: '.2s',
      border: selectedColor === color ? `solid 2px ${color}` : 'none',
      WebkitBoxShadow: selectedColor === color ? `0px 0px 0px 3px ${color + '80'}` : '',
      boxShadow: selectedColor === color ? `0px 0px 0px 3px ${color + '80'}` : '',
    };
  };

  const innerSx = (color: string) => {
    return {
      backgroundColor: color,
      minWidth: '2rem',
      minHeight: '2rem',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: '.2s',
      '&:hover': {
        transform: 'scale(1.1)',
      },
      '&:active': {
        transform: 'scale(1)',
      },
    };
  };

  return (
    <FlexBox flexDirection={'row'} flexWrap={'wrap'}>
      {colorsToDisplay.map((color) => {
        return (
          <Box key={color} component={'div'} sx={outterSx(color)}>
            <Box
              component={'div'}
              onClick={() => {
                handleClick(color);
              }}
              sx={innerSx(color)}
            />
          </Box>
        );
      })}
      <AddColor
        onColorSelect={(color) => {
          colors.push(color.hex);
          setUpdate(!update);
        }}
      />
    </FlexBox>
  );
};

export default ColorPicker;
