import { memo, useMemo } from 'react';
import { Stack, Typography, useTheme } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { IEmployeeTimeOffStat } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';
import { useTranslation } from 'react-i18next';
import { ITimeOffPolicies } from 'modules/rrhh/settings/time-off-policies/interfaces';

type Props = {
  value: IEmployeeTimeOffStat;
  className?: string;
};

const TimeOffStat = ({ value, className }: Props) => {
  const { t } = useTranslation('common');
  const theme = useTheme();

  const remaining = useMemo(() => value?.accumulated - value?.consumption, [value?.accumulated, value?.consumption]);

  const remainingText = useMemo(() => {
    if (remaining > 0) {
      return `${remaining} ${t('availableDays')}`;
    } else if (value?.accumulated > 0) {
      return t('consumed');
    }
    return t('noDays');
  }, [remaining]);
  const remainingClasses = useMemo(() => (remaining > 0 ? 'text-green-600' : 'text-red-600'), [remaining]);
  const policy = value?.policy as ITimeOffPolicies;

  return (
    <FlexBox alignItems={'center'} justifyContent={'center'} className={className}>
      <Stack alignItems={'center'}>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontSize: '13px',
          }}
        >
          {policy?.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontSize: '28px',
            color: theme.palette.primary.main,
            fontWeight: 'bold',
          }}
        >{`${value?.consumption} ${t('days')}`}</Typography>
        <Typography
          className={remainingClasses}
          sx={{
            fontFamily: 'Poppins',
            fontSize: '14px',
          }}
        >
          {remainingText}
        </Typography>
      </Stack>
    </FlexBox>
  );
};

export default memo(TimeOffStat);
