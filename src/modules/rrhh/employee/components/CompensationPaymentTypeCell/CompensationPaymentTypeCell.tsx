import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';

type CompensationPaymentTypCellProps = {
  type?: string;
};

const CompensationPaymentTypeCell = ({ type }: CompensationPaymentTypCellProps) => {
  const { t } = useTranslation('employee');

  return (
    <FlexBox alignItems={'center'}>
      <Stack>
        <Typography>{type ? t(`fields.compensation.${type}`) : ''}</Typography>
      </Stack>
    </FlexBox>
  );
};

export default memo(CompensationPaymentTypeCell);
