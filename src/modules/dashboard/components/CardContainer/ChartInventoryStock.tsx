import { ConditionContainer } from '@dfl/mui-react-common';
import { ChartCard } from 'components/ChartCard';
import { ChartSkeleton } from 'components/libs/analytic/ChartSkeleton';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import useBarCardExampleStock from 'modules/dashboard/hooks/useBarCardExampleStock';

const ChartInventoryStock = () => {
  const { series, options } = useBarCardExampleStock();
  const { t } = useTranslation('report');

  const content = useMemo(() => {
    // @ts-ignore
    return <Chart options={options} series={series} type='bar' width='100%' height={350} />;
  }, [options, series]);

  return (
    <ChartCard title={t('report.inventory.chartTitle')}>
      <ConditionContainer active={true} alternative={<ChartSkeleton icon={<SignalCellularAltOutlinedIcon />} />}>
        {content}
      </ConditionContainer>
    </ChartCard>
  );
};

export default memo(ChartInventoryStock);
