import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { format } from 'date-fns';

type JobInformationDateCellProps = {
  dateActivated?: Date;
};

const JobInformationDateCell = ({ dateActivated }: JobInformationDateCellProps) => {
  return (
    <FlexBox alignItems={'center'}>
      <Stack>
        <Typography>{dateActivated ? format(new Date(dateActivated), 'dd/MM/yyyy') : null}</Typography>
      </Stack>
    </FlexBox>
  );
};

export default memo(JobInformationDateCell);
