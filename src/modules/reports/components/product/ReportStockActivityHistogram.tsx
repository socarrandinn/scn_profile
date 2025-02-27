import { memo, useMemo } from 'react';
import Chart from 'react-apexcharts';
import { ConditionContainer } from '@dfl/mui-react-common';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';

import { PaperChart } from 'components/PaperChart';
import { ChartSkeleton } from 'components/libs/analytic/ChartSkeleton';
import useReportStockHistogram from 'modules/reports/hooks/product/useReportStockHistogram';
import EmptyChart from '../common/EmptyChart/EmptyChart';

const ReportStockActivityHistogram = () => {
  const { series, isLoading, options } = useReportStockHistogram();

  const isEmpty = useMemo(() => series?.every((s) => s.data.length === 0), [series]);

  const emptyData = <EmptyChart variant='bar' />;

  const content = useMemo(() => {
    return (
      // @ts-ignore
      <Chart options={options} series={series} type='area' width='100%' height={300} />
    );
  }, [options, series]);

  return (
    <PaperChart>
      <ConditionContainer active={!isLoading} alternative={<ChartSkeleton icon={<StackedLineChartOutlinedIcon />} />}>
        {isEmpty ? emptyData : content}
      </ConditionContainer>
    </PaperChart>
  );
};

export default memo(ReportStockActivityHistogram);
