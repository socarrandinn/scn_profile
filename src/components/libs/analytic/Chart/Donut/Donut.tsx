import { memo, useMemo } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { CurrencyValue, FlexBox, NumberValue } from '@dfl/mui-react-common';
import { Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';

type DonutProps = {
  label: string;
  color?: string;
  value: number;
  rest: number;
  currency?: boolean;
};

const optionsDefault: ApexOptions = {
  chart: {
    type: 'donut',
    height: '200px',
    width: '200px',
  },

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
        size: '78%',
      },
    },
  },
  responsive: [
    {
      breakpoint: 700,
      options: {
        pie: {
          customScale: 1,
        },
      },
    },
  ],
};

const margin = {
  xs: '-10px 0px',
  md: '-10px -20px',
  xl: '-10px 0px',
};
const Donut = ({ value, rest, label, currency, color = 'primary' }: DonutProps) => {
  const NumberCom = currency ? CurrencyValue : NumberValue;
  const { palette } = useTheme();
  const { series, options } = useMemo(() => {
    const series = [rest, value];
    // @ts-ignore
    const colorP = color ? palette[color]?.main || palette.primary.main : optionsDefault.colors[1];

    return {
      series,
      options: {
        ...optionsDefault,
        // @ts-ignore
        colors: [optionsDefault.colors[0], colorP],
      },
    };
  }, [value, rest, color, palette]);

  return (
    <FlexBox position={'relative'} alignItems={'center'} justifyContent={'center'} margin={margin}>
      <Chart options={options} series={series} type='donut' width={180} />
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
          <NumberCom
            value={value}
            fontSize={18}
            fontWeight={500}
            minWidth={100}
            color={color}
            textAlign={'center'}
            bgcolor={'white'}
          />

          <Typography
            fontSize={11}
            textAlign={'center'}
            position={'absolute'}
            mt={'-5px'}
            color={'text.primary'}
            lineHeight={1.1}
            width={'100%'}
          >
            {label}
          </Typography>
        </Box>
      </FlexBox>
    </FlexBox>
  );
};

export default memo(Donut);
