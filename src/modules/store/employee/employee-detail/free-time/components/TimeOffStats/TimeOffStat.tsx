import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { IEmployeeTimeOffStat } from 'modules/store/employee/common/interfaces/IEmployeeTimeOff';
import { useTranslation } from 'react-i18next';
import { ITimeOffPolicies } from 'modules/store/employee/settings/time-off-policies/interfaces';

type Props = {
  value: IEmployeeTimeOffStat;
  className?: string;
};

const TimeOffStat = ({ value, className }: Props) => {
  const { t } = useTranslation('timeOff');

  const consumption = Math.floor(value?.consumption / 24);
  const remaining = Math.floor((value?.accumulated - value?.consumption) / 24);
  const accumulated = Math.floor(value?.accumulated / 24);
  const color = !consumption ? 'success.main' : !remaining ? 'error' : 'info.main';

  const policy = value?.policy as ITimeOffPolicies;

  return (
        <FlexBox alignItems={'center'} justifyContent={'center'} className={className}>
            <Stack alignItems={'center'}>
                <Typography variant="caption" display="block">
                    {policy?.name}
                </Typography>
                <Typography variant="h4" display="block" color={'primary'} sx={{ fontWeight: 'bold' }}>
                    {`${accumulated} ${t('common:days')}`}
                </Typography>
                <Typography variant="overline" display="block" color={ color } mt={-1}>
                    {t('consumption', { count: consumption })}
                </Typography>
            </Stack>
        </FlexBox>
  );
};

export default memo(TimeOffStat);
