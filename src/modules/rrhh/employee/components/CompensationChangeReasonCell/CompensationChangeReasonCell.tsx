import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';

type CompensationChangeReasonCellProps = {
  reason?: string;
};

const CompensationChangeReasonCell = ({ reason }: CompensationChangeReasonCellProps) => {
  const { t } = useTranslation('employee');

  return (
    <FlexBox alignItems={'center'}>
      <Stack>
        <Typography>{reason ? t(`fields.compensation.${reason}`) : ''}</Typography>
      </Stack>
    </FlexBox>
  );
};

export default memo(CompensationChangeReasonCell);
