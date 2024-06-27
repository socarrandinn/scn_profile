import { ConditionContainer } from '@dfl/mui-react-common';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import { ChartCard } from 'components/ChartCard';
import { ChartSkeleton } from 'components/libs/analytic/ChartSkeleton';
import { format, parseISO } from 'date-fns';
import React, { memo, useCallback, useMemo } from 'react';
import Chart from 'react-apexcharts';
import { useTranslation } from 'react-i18next';

interface ChartHistogramClientProps {
  data: { _id: string; count: number }[];
}

const ChartHistogramClient: React.FC<ChartHistogramClientProps> = ({ data }) => {
  const { t } = useTranslation('report');

  // Group data by month
  const groupDataByMonth = useCallback((data: { _id: string; count: number }[]) => {
    const groupedData: { [key: string]: number } = {};

    data?.forEach((item) => {
      const month = format(parseISO(item._id), 'yyyy-MM');
      if (!groupedData[month]) {
        groupedData[month] = 0;
      }
      groupedData[month] += item.count;
    });

    return Object.entries(groupedData).map(([month, count]) => ({
      _id: month,
      count,
    }));
  }, []);

  // Group data by year
  const groupDataByYear = useCallback((data: { _id: string; count: number }[]) => {
    const groupedData: { [key: string]: number } = {};

    data?.forEach((item) => {
      const year = format(parseISO(item._id), 'yyyy');
      if (!groupedData[year]) {
        groupedData[year] = 0;
      }
      groupedData[year] += item.count;
    });

    return Object.entries(groupedData).map(([year, count]) => ({
      _id: year,
      count,
    }));
  }, []);

  // const groupedData = useMemo(() => groupDataByYear(data), [data, groupDataByYear]);
  const groupedData = useMemo(() => groupDataByMonth(data), [data, groupDataByMonth]);

  const series = useMemo(
    () => [
      {
        name: t('report.client.histogram.count'),
        data: groupedData.map((item) => ({ x: item._id, y: item.count })),
      },
    ],
    [data, t],
  );

  const options = useMemo(
    () => ({
      chart: {
        type: 'bar',
        height: 350,
      },
      xaxis: {
        type: 'category',
        categories: groupedData.map((item) => item._id),
        labels: {
          // group by month
          //formatter: (value: string) => format(parseISO(`${value}-01`), 'yyyy-MM'),
          labels: {
            formatter: (value: string) => value,
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          endingShape: 'flat',
        },
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: t('report.client.histogram.title'),
        align: 'center',
      },
    }),
    [groupedData, t],
  );

  const content = useMemo(
    () => (
      // @ts-ignore
      <Chart options={options} series={series} type='bar' width='100%' height={350} />
    ),
    [options, series],
  );

  return (
    <ChartCard title={''}>
      <ConditionContainer active={true} alternative={<ChartSkeleton icon={<SignalCellularAltOutlinedIcon />} />}>
        {content}
      </ConditionContainer>
    </ChartCard>
  );
};

export default memo(ChartHistogramClient);
