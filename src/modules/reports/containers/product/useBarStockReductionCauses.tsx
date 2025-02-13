import { DATA_LABELS } from 'components/libs/analytic/constants/bar.chart.constants';
import { getBarChartHeight } from 'modules/reports/components/common/ApexChart/utils/bar-chart';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const useBarStockReductionCauses = () => {
  const { t } = useTranslation('report');
  const categories = [
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
  ];

  const data = [
    400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380, 400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380, 400, 430,
    448, 470, 540, 580, 690, 1100, 1200, 1380, 400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380, 400, 430, 448, 470,
    540, 580, 690, 1100, 1200, 1380, 400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380, 400, 430, 448, 470, 540, 580,
    690, 1100, 1200, 1380, 400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380,
  ];

  // Datos para el gráfico principal (primeros 10 elementos)
  const mainData = {
    series: data.slice(0, 10),
    categories: categories.slice(0, 10),
  };

  // Datos para el modal (elementos restantes)
  const modalData = {
    series: data.slice(10),
    categories: categories.slice(10),
  };

  const baseOptions = useMemo(
    () => ({
      chart: {
        type: 'bar',
        id: 'orders-interval-by-clients',
        toolbar: {
          show: true,
          autoSelected: 'zoom',
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          // distributed: true, // distributed colors
          horizontal: true,
          dataLabels: {
            position: 'bottom',
          },
        },
      },
      // dataLabels: DATA_LABELS.dataLabels,
      dataLabels: {
        ...DATA_LABELS.dataLabels,
        textAnchor: 'start',
        style: {
          ...DATA_LABELS.dataLabels?.style,
          fontSize: '16',
        },
        formatter: function (val: string, opt: any) {
          const label = opt.w.globals.labels[opt.dataPointIndex] as string;
          return `${label}: ${val}`;
        },
        offsetX: 0,
      },

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
        y: {
          title: {
            formatter: function () {
              return t('report.inventory.activity.quantity');
            },
          },
        },
      },
    }),
    [t],
  );

  return {
    options: {
      ...baseOptions,
      xaxis: { categories: mainData.categories },
      chart: { ...baseOptions.chart },
    },
    series: [{ data: mainData?.series }],

    /* modal */
    modal: {
      options: {
        ...baseOptions,
        xaxis: { categories: modalData.categories },
        chart: { ...baseOptions.chart },
      },
      series: [{ data: modalData?.series }],
      height: getBarChartHeight(modalData?.series?.length),
    },
  };
};
export default useBarStockReductionCauses;
