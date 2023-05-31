import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { IEmployeeTimeOffStat } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';
import { useTranslation } from 'react-i18next';
import { ITimeOffPolicies } from 'modules/rrhh/settings/time-off-policies/interfaces';

type Props = {
  value: IEmployeeTimeOffStat;
  className?: string;
};

const TimeOffStat = ({ value, className }: Props) => {
  const { t } = useTranslation('timeOff');

  const remaining = Math.floor((value?.accumulated - value?.consumption) / 24);

  const policy = value?.policy as ITimeOffPolicies;

  return (
        <FlexBox alignItems={'center'} justifyContent={'center'} className={className}>
            <Stack alignItems={'center'}>
                <Typography variant="caption" display="block">
                    {policy?.name}
                </Typography>
                <Typography variant="h4" display="block" color={'primary'} sx={{ fontWeight: 'bold' }}>
                    {`${value?.consumption} ${t('common:days')}`}
                </Typography>
                <Typography variant="overline" display="block" color={remaining ? 'success.main' : 'error'} mt={-1}>
                    {t('remain', { count: remaining })}
                </Typography>
            </Stack>
        </FlexBox>
  );
};

export default memo(TimeOffStat);
