import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const useBarCardExampleStock = () => {
  const { t } = useTranslation();

  // const values = useMemo(() => [1, 2, 6, 8], []);
  // const labels = useMemo(() => ['data1', 'data2', 'data3', 'data4'], []);

  const options = useMemo(
    () => ({
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          // horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          'South Korea',
          'Canada',
          'United Kingdom',
          'Netherlands',
          'Italy',
          'France',
          'Japan',
          'United States',
          'China',
          'Germany',
        ],
      },
      yaxis: {
        reversed: true,
        axisTicks: {
          show: true,
        },
      },
    }),
    [],
  );

  return {
    options,
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
  };
};
export default useBarCardExampleStock;
