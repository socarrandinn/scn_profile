import { memo, useMemo } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { ChildrenProps, FlexBox } from '@dfl/mui-react-common';
import Box from '@mui/material/Box';

export type DonutProps = {
  colors?: string[];
  value: number[];
  size?: number;
  plotSize?: number;
} & ChildrenProps;

export const optionsDefault: ApexOptions = {
  colors: ['#e4e6e9', '#7AD15B'],
  legend: {
    show: false,
  },
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
        type: 'none',
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
  md: '-10px -20px',
  xl: '-10px 0px',
};
const Donut = ({ value, children, colors, size = 200, plotSize = 0.7 }: DonutProps) => {
  const { options } = useMemo<{ options: ApexOptions }>(() => {
    return {
      options: {
        ...optionsDefault,
        plotOptions: {
          pie: {
            // customScale: 0.85,
            donut: {
              size: `${plotSize * 100}%`,
            },
          },
        },
        chart: {
          type: 'donut',
          height: `${size}px`,
          width: `${size}px`,
        },
        // @ts-ignore
        colors,
      },
    };
  }, [value, colors]);

  return (
        <FlexBox position={'relative'} alignItems={'center'} justifyContent={'center'} margin={margin}>
            <Chart options={options} series={value} type='donut' width={size}/>
            <FlexBox
                position={'absolute'}
                top={0}
                left={0}
                right={0}
                bottom={0}
                alignItems={'center'}
                justifyContent={'center'}
                flexDirection={'column'}
            >
                <Box position={'relative'}>
                    {children}
                </Box>
            </FlexBox>
        </FlexBox>
  );
};

export default memo(Donut);
