import { Circle } from '@mui/icons-material';
import { Chip, ChipProps } from '@mui/material';

type Props = { value: string };
const ColorChip = ({ value, ...props }: Props & Omit<ChipProps, 'label'>) => {
  return <Chip {...props} label={value} icon={<Circle sx={{ fill: value, stroke: '#fff' }} />} />;
};

export default ColorChip;
