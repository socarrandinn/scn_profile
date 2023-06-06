import { memo, useRef } from 'react';
import { BarChart } from 'components/libs/analytic/BarChart';
import { ChartBox } from 'components/libs/analytic/ChartBox';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material';
import { useFindTeamDistribution } from 'modules/rrhh/analytic/hooks/useFindTeamDistribution';

const TeamDistribution = () => {
  const { isLoading, data } = useFindTeamDistribution()
  const theme = useTheme();
  const colors = useRef([theme.palette.primary.main])
  const { t } = useTranslation('analytic');
  return (
        <ChartBox title={t('team')}>
            <BarChart data={data} isLoading={isLoading} labelField={'name'} valueField={'count'}
                      colors={colors.current} horizontal/>
        </ChartBox>
  );
};

export default memo(TeamDistribution);
