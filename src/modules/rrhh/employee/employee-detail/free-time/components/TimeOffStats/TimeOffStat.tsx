import { memo, useMemo } from 'react';
import { Stack, Typography, useTheme } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { IEmployeeTimeOffStat } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';
import { useTranslation } from 'react-i18next';

const TimeOffStat = ({ policy, accumulated, consumption }: IEmployeeTimeOffStat) => {
  const { t } = useTranslation('common');
  const theme = useTheme();

  const remaining = useMemo(() => accumulated - consumption, [accumulated, consumption]);

  const remainingText = useMemo(
    () => (remaining > 0 ? `${remaining} ${t('availableDays')}` : `${t('consumed')}`),
    [remaining],
  );
  const remainingClasses = useMemo(() => (remaining > 0 ? 'text-green-600' : 'text-red-600'), [remaining]);

  return (
    <FlexBox alignItems={'center'}>
      <Stack alignItems={'center'}>
        <Typography
          sx={{
            fontSize: '12px',
          }}
        >
          {policy.name}
        </Typography>
        <Typography
          sx={{
            fontSize: '28px',
            color: theme.palette.primary.main,
            fontWeight: 'bold',
          }}
        >{`${consumption} ${t('days')}`}</Typography>
        <Typography className={remainingClasses}>{remainingText}</Typography>
      </Stack>
    </FlexBox>
  );
};

export default memo(TimeOffStat);
