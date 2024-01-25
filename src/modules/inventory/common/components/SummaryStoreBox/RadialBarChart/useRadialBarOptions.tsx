import { ApexOptions } from 'apexcharts';
import { useMemo } from 'react';
import { ISerie } from '../SummaryStoreBox';

export const dColors = ['#344f86', '#ff4081', '#40c4ff', '#ff9800'];

export const useRadialBarOptions = (values: ISerie[], total: string, colors: string[] | undefined = dColors) => {
  const { options, series } = useMemo<{ options: ApexOptions; series: any }>(() => {
    const options: ApexOptions = {
      chart: {
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 90,
          endAngle: 360,
          inverseOrder: true,
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              fontSize: '14px',
            },
            total: {
              show: true,
              label: 'Total',
              fontWeight: 800,
              formatter: () => {
                return `${total}`;
              },
            },
          },
        },
      },
      colors,
      labels: values?.map((serie) => serie?.label),
      legend: {
        show: true,
        floating: true,
        fontSize: '10px',
        position: 'right',
        labels: {
          useSeriesColors: true,
        },
        formatter: function (seriesName: string, opts: any) {
          return seriesName; // + ':  ' + opts.w.globals.series[opts.seriesIndex];
        },
        markers: {
          width: 8,
          height: 8,
        },
        itemMargin: {
          vertical: 1,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    };
    return {
      options,
      series: values?.map((serie) => (serie?.of ? (serie?.serie / serie?.of) * 100 : serie?.serie)),
    };
  }, [colors, values]);

  return {
    options,
    series,
  };
};
