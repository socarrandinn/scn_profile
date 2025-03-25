import { memo } from 'react';
import { AccessTime } from '@mui/icons-material';
import { DateValue } from '@dfl/mui-react-common';
import { Chip, Stack } from '@mui/material';

type Props = { fromDate: Date | null; toDate: Date | null };

const ProgramerDateCell = ({ fromDate, toDate }: Props) => {
  if (!fromDate) return <>-</>;

  return (
    <Chip
      icon={<AccessTime fontSize='small' />}
      variant='outlined'
      size='small'
      sx={{ borderRadius: '4px' }}
      label={
        <Stack alignItems={'center'} divider={<> - </>} sx={{ lineHeight: 1.2 }}>
          <DateValue value={fromDate} />
          {toDate && <DateValue value={toDate} />}
        </Stack>
      }
    />
  );
};

export default memo(ProgramerDateCell);
