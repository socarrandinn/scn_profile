import { memo, useMemo } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { ChildrenProps, FlexBox } from '@dfl/mui-react-common';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';

export type DonutProps = {
  color?: string;
  value: number;
  rest: number;
  size?: number;
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
  plotOptions: {
    pie: {
      // customScale: 0.85,
      donut: {
        size: '70%',
      },
    },
  },
};

const margin = {
  xs: '-10px 0px',
  md: '-10px -20px',
  xl: '-10px 0px',
};
const Donut = ({ value, rest, children, color = 'primary', size = 200 }: DonutProps) => {
  const { palette } = useTheme();
  const { series, options } = useMemo<{ options: ApexOptions, series: any[] }>(() => {
    const series = [rest || 0, value || 0];
    // @ts-ignore
    const colorP = color ? palette[color]?.main || palette.primary.main : optionsDefault.colors[1];

    return {
      series,
      options: {
        ...optionsDefault,
        chart: {
          type: 'donut',
          height: `${size}px`,
          width: `${size}px`,
        },
        // @ts-ignore
        colors: [optionsDefault.colors[0], colorP],
      },
    };
  }, [value, rest, color, palette]);

  return (
        <FlexBox position={'relative'} alignItems={'center'} justifyContent={'center'} margin={margin}>
            <Chart options={options} series={series} type='donut' width={size}/>
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
