import { DATA_LABELS } from 'components/libs/analytic/constants/bar.chart.constants';
import { useMemo } from 'react';
type Props = {
  categories: string[];
  data: number[];
  serieName?: string;
  isHorizontal?: boolean;
  colors?: string[];
};
const useSimpleBar = ({ categories, data: series, serieName = 'count', isHorizontal = true, colors }: Props) => {
  const baseOptions = useMemo(
    () => ({
      colors,
      chart: {
        type: 'bar',
        toolbar: {
          show: true,
          autoSelected: 'zoom',
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: isHorizontal,
          dataLabels: {
            position: 'bottom',
          },
        },
      },

      dataLabels: DATA_LABELS.dataLabels,

      yaxis: {
        axisTicks: {
          show: true,
        },
        labels: {
          show: false,
        },
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: true,
        },
      },
    }),
    [colors, isHorizontal],
  );

  return {
    options: {
      ...baseOptions,
      xaxis: { categories },
      chart: { ...baseOptions.chart },
    },
    series: [{ name: serieName, data: series }],
  };
};
export default useSimpleBar;
