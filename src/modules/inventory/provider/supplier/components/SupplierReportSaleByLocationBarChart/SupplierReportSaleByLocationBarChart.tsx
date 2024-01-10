import { memo, useMemo } from 'react';
import Chart from 'react-apexcharts';
import { ConditionContainer } from '@dfl/mui-react-common';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import { Box, styled } from '@mui/material';
import useSupplierReportSaleByLocationBarChart from '../../hooks/useSupplierReportSaleByLocationBarChart';
import { ChartSkeleton } from 'components/libs/analytic/ChartSkeleton';
import { FormPaper } from 'modules/common/components/FormPaper';

const ChartResponsive = styled(Box)(({ theme }) => ({
  height: 350,
  [theme.breakpoints.down('md')]: {
    height: 400,
  },
}));

const SupplierReportSaleByLocationBarChart = () => {
  const { options, series, isLoading } = useSupplierReportSaleByLocationBarChart();

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

export default memo(SupplierReportSaleByLocationBarChart);
