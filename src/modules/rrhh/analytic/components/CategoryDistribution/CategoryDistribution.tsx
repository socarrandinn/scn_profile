import { memo, useRef } from 'react';
import { useFindCategoryDistribution } from 'modules/rrhh/analytic/hooks/useFindCategoryDistribution';
import { BarChart } from 'components/libs/analytic/BarChart';
import { ChartBox } from 'components/libs/analytic/ChartBox';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material';

const CategoryDistribution = () => {
  const { isLoading, data } = useFindCategoryDistribution()
  const theme = useTheme();
  const colors = useRef([theme.palette.primary.main])
  const { t } = useTranslation('analytic');
  return (
        <ChartBox title={t('category')}>
            <BarChart data={data} isLoading={isLoading} labelField={'name'} valueField={'count'}
                      colors={colors.current}/>
        </ChartBox>
  );
};

export default memo(CategoryDistribution);
