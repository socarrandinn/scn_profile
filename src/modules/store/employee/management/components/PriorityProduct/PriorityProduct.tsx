import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 200,
    label: '200',
  },
  {
    value: 400,
    label: '400',
  },
  {
    value: 600,
    label: '600',
  },
  {
    value: 800,
    label: '800',
  },
  {
    value: 1000,
    label: '1000',
  },
];

function valuetext(value: number) {
  return String(value);
}

export default function PriorityProduct() {
  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        aria-label="Always visible"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}