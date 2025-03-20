import { memo, useMemo } from 'react';
import { ApexOptions } from 'apexcharts';
import { useTheme } from '@mui/material';
import Donut, { DonutProps } from 'components/libs/analytic/Donut/Donut';

export type BinaryDonutProps = {
  color?: string;
  value: number;
  rest: number;
} & Omit<DonutProps, 'colors' | 'value'>;

export const optionsDefault: ApexOptions = {
  colors: ['#e4e6e9', '#7AD15B'],
};

const BinaryDonut = ({ value, rest, color = 'primary', ...props }: BinaryDonutProps) => {
  const { palette } = useTheme();
  const { series, colors } = useMemo<{ colors: string[]; series: any[] }>(() => {
    const series = [rest || 0, value || 0];
    // @ts-ignore
    const colorP = color ? palette[color]?.main || palette.primary.main : optionsDefault.colors[1];

    return {
      series,
      // @ts-ignore
      colors: [optionsDefault.colors[0], colorP],
    };
  }, [value, rest, color, palette]);

  return <Donut value={series} colors={colors} {...props} />;
};

export default memo(BinaryDonut);
