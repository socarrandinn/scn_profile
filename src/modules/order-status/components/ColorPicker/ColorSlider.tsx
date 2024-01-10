import { Slider } from '@mui/material';

interface IColorSlider {
  color: string,
  value: number,
  onchange: (value: number) => any
}

const ColorSlider = ({ color, onchange, value }: IColorSlider) => {
  return (
    <Slider
      max={255}
      sx={{ color }}
      value={value}
      onChange={(_, value) => onchange(value as number)}
    />
  );
}

export default ColorSlider
