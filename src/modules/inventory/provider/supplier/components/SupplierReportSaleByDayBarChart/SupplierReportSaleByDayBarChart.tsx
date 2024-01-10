import { memo, useMemo } from 'react';
import Chart from 'react-apexcharts';
import { ConditionContainer } from '@dfl/mui-react-common';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import { ChartResponsive } from 'components/libs/analytic/constants/bar.chart.constants';
import { ChartSkeleton } from 'components/libs/analytic/ChartSkeleton';
import useSupplierReportSaleByDayBarChart from '../../hooks/useSupplierReportSaleByDayBarChart';
import { FormPaper } from 'modules/common/components/FormPaper';

const InventorySellByDayBarChart = () => {
  const { series, isLoading, options } = useSupplierReportSaleByDayBarChart();

  const content = useMemo(() => {
    // @ts-ignore
    return <Chart options={options} series={series} type='bar' width='100%' height={'100%'} />;
  }, [options, series]);

  return (
    <FormPaper nm>
      <ConditionContainer active={!isLoading} alternative={<ChartSkeleton icon={<SignalCellularAltOutlinedIcon />} />}>
        <ChartResponsive>{content}</ChartResponsive>
      </ConditionContainer>
    </FormPaper>
  );
};

export default memo(InventorySellByDayBarChart);
