import { memo, useMemo } from 'react';
import Chart from 'react-apexcharts';
import { ConditionContainer } from '@dfl/mui-react-common';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import { ChartResponsive } from 'components/libs/analytic/constants/bar.chart.constants';
import { ChartSkeleton } from 'components/libs/analytic/ChartSkeleton';
import useSupplierReportSalePercentByLocationBarChart from '../../hooks/useSupplierReportSalePercentByLocationBarChart';
import { FormPaper } from 'modules/common/components/FormPaper';

const SupplierReportSalePercentByLocation = () => {
  const { series, isLoading, options } = useSupplierReportSalePercentByLocationBarChart();

  const content = useMemo(() => {
    // @ts-ignore
    return <Chart options={options} series={series} type='bar' width='100%' height='100%' />;
  }, [options, series]);

  return (
    <FormPaper nm>
      <ConditionContainer active={!isLoading} alternative={<ChartSkeleton icon={<StackedLineChartOutlinedIcon />} />}>
        <ChartResponsive>{content}</ChartResponsive>
      </ConditionContainer>
    </FormPaper>
  );
};

export default memo(SupplierReportSalePercentByLocation);
