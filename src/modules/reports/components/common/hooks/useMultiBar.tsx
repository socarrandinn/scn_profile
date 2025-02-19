import { DATA_LABELS } from 'components/libs/analytic/constants/bar.chart.constants';
import { getBarChartHeight } from 'modules/reports/components/common/ApexChart/utils/bar-chart';
import { useMemo } from 'react';
type Props = {
  categories: string[];
  data: number[];
  serieName?: string;
};
const useMultiBar = ({ categories, data, serieName = 'Cantidad' }: Props) => {
  // Datos para el gráfico principal (primeros 10 elementos)
  const mainData = {
    series: data.slice(0, 10),
    categories: categories.slice(0, 10),
  };

  // Datos para el modal (elementos restantes)
  const modalData = {
    series: data,
    categories,
  };

  const baseOptions = useMemo(
    () => ({
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
      },
    }),
    [],
  );

  return {
    options: {
      ...baseOptions,
      xaxis: { categories: mainData.categories },
      chart: { ...baseOptions.chart },
    },
    series: [{ name: serieName, data: mainData?.series }],

    /* modal */
    modal: {
      options: {
        ...baseOptions,
        xaxis: { categories: modalData.categories },
        chart: { ...baseOptions.chart },
      },
      series: [{ name: serieName, data: modalData?.series }],
      height: getBarChartHeight(modalData?.series?.length),
    },
  };
};
export default useMultiBar;
