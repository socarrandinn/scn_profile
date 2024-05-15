import { ConditionContainer } from '@dfl/mui-react-common';
import { ChartSkeleton } from 'components/libs/analytic/ChartSkeleton';
import { memo, useMemo } from 'react';
import Chart from 'react-apexcharts';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import useBarCardReviewReport from '../../hooks/charts/useBarCardReviewReport';
import { Box } from '@mui/material';

const ReviewReportChart = ({ data, isLoading }: any) => {
  const { series, options } = useBarCardReviewReport(data);

  const content = useMemo(() => {
    // @ts-ignore
    return <Chart options={options} series={series} type='bar' width='100%' height={350} />;
  }, [options, series]);

  return (
    <Box mt={2}>
      <ConditionContainer active={!isLoading} alternative={<ChartSkeleton icon={<SignalCellularAltOutlinedIcon />} />}>
        {content}
      </ConditionContainer>
    </Box>
  );
};

export default memo(ReviewReportChart);
