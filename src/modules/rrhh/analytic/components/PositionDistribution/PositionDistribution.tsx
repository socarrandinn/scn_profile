import { memo, useRef } from 'react';
import { BarChart } from 'components/libs/analytic/BarChart';
import { ChartBox } from 'components/libs/analytic/ChartBox';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material';
import { useFindPositionDistribution } from 'modules/rrhh/analytic/hooks/useFindPositionDistribution';

const PositionDistribution = () => {
  const { isLoading, data } = useFindPositionDistribution()
  const theme = useTheme();
  const colors = useRef([theme.palette.primary.main])
  const { t } = useTranslation('analytic');
  return (
        <ChartBox title={t('position')}>
            <BarChart data={data} isLoading={isLoading} labelField={'name'} valueField={'count'}
                      colors={colors.current} horizontal/>
        </ChartBox>
  );
};

export default memo(PositionDistribution);
