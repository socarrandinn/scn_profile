import { Circle } from '@mui/icons-material';
import { Chip } from '@mui/material';

type Props = { value: string };
const ColorChip = ({ value }: Props) => {
  return <Chip label={value} icon={<Circle sx={{ fill: value, stroke: '#fff' }} />} />;
};

export default ColorChip;
