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
          //  inverseOrder: true,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined,
            position: 'front',
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              fontSize: '12px',
              offsetY: 0,
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
        fontSize: '6px',
        position: 'right',
        offsetX: -30,
        offsetY: -6,
        labels: {
          useSeriesColors: true,
          colors,
        },
        formatter: function (seriesName: string, opts: any) {
          return seriesName; // + ':  ' + opts.w.globals.series[opts.seriesIndex];
        },
        markers: {
          // width: 6,
          // height: 6,
        },
        itemMargin: {
          vertical: -1,
        },
      },
      responsive: [
        {
          breakpoint: 1190,
          options: {
            legend: {
              show: true,
              floating: true,
              fontSize: '6px',
              position: 'right',
              offsetX: -5,
              offsetY: -6,
            },
          },
        },
        {
          breakpoint: 480,
          options: {
            legend: {
              show: true,
              fontSize: '6px',
              offsetX: -6,
              offsetY: -6,
            },
          },
        },
        {
          breakpoint: 400,
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
      series: values?.map((serie) => getValue(serie)),
    };
  }, [colors, total, values]);

  return {
    options,
    series,
  };
};

const getValue = (serie: ISerie) => {
  if (serie.of) return Number((serie?.serie / serie?.of) * 100)?.toFixed();
  return Number(serie?.serie)?.toFixed();
};
