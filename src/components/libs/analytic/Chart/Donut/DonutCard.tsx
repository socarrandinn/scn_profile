import { memo, useMemo } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { FlexBox } from '@dfl/mui-react-common';
import { isEmpty } from 'lodash';

export const emptySeriesPie = {
  labels: [],
  colors: ['#f0f0f0'],
  legend: { show: false },
  tooltip: { enabled: false },
};

export type DonutCardProps = {
  colors?: string[];
  value: number[];
  size?: number;
  plotSize?: number;
  legend?: boolean;
  label: string[];
};

export const optionsDefault: ApexOptions = {
  colors: ['#e4e6e9', '#7AD15B'],
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  grid: {
    padding: {
      left: 1,
      right: 1,
    },
  },
  states: {
    active: {
      filter: {
        type: '',
      },
    },
    hover: {
      filter: {
        type: 'none',
      },
    },
  },
};

const margin = {
  xs: '-10px 0px',
  xl: '-10px 0px',
};
const DonutCard = ({ value, colors, size = 325, plotSize = 0.6, legend = false, label }: DonutCardProps) => {
  const { options } = useMemo<{ options: ApexOptions }>(() => {
    return {
      options: {
        ...optionsDefault,
        legend: {
          show: legend,
          position: 'bottom',
        },
        plotOptions: {
          pie: {
            // customScale: 0.85,
            donut: {
              size: `${plotSize * 100}%`,
            },
          },
        },
        labels: label,
        responsive: [
          {
            breakpoint: 640,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
        chart: {
          type: 'donut',
          height: `${size}px`,
          width: `${size}px`,
        },
        // @ts-ignore
        colors,
      },
    };
  }, [legend, plotSize, label, size, colors]);

  return (
    <FlexBox position={'relative'} alignItems={'center'} justifyContent={'center'} margin={margin}>
      <Chart
        options={isEmpty(value) ? { ...optionsDefault, ...emptySeriesPie } : options}
        series={isEmpty(value) ? [1] : value}
        type='pie'
        width={size}
      />
    </FlexBox>
  );
};

export default memo(DonutCard);
