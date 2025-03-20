import { memo } from 'react';
import { useRadialBarOptions } from './useRadialBarOptions';
import { Stack } from '@mui/material';
import Chart from 'react-apexcharts';
import { ISerie } from '../SummaryStoreBox';

type RadialBarChartProps = {
  values: ISerie[];
  colors?: string[];
  total: string;
};

const RadialBarChart = ({ values, colors, total }: RadialBarChartProps) => {
  const { options, series } = useRadialBarOptions(values, total, colors);
  return (
    <Stack
      id='chart'
      justifyContent={'center'}
      sx={{
        height: 180,
        maxWidth: 180,
        margin: {
          xs: 'auto',
        },
      }}
    >
      <Chart options={options} series={series} type='radialBar' height={'100%'} />
    </Stack>
  );
};

export default memo(RadialBarChart);
