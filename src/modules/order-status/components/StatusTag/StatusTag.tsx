import { Chip } from '@mui/material';

interface IStatusTag {
  status: string;
}

const StatusTag = ({ status }: IStatusTag) => {
  return <Chip label={status} variant='outlined' sx={{ margin: '0 auto' }} />;
};

export default StatusTag;
