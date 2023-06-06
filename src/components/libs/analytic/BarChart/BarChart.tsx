import { memo, useMemo } from 'react'
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { useTheme } from '@mui/material';

type BarChartProps = {
  name?: string,
  data: any[] | undefined
  colors?: string[]
  labelField: string
  valueField: string
  isLoading?: boolean
  horizontal?: boolean
  distributed?: boolean
}

const BarChart = ({
  name,
  data,
  colors,
  labelField = 'name',
  valueField = 'value',
  isLoading,
  horizontal,
  distributed
}: BarChartProps) => {
  const theme = useTheme()
  const { options, series } = useMemo<{ options: ApexOptions, series: Array<{ name: string, data: any[] }> }>(
    () => {
      const options: ApexOptions = {
        // title: {
        //   text: name,
        //   align: 'left',
        // },
        chart: {
          toolbar: {
            show: false,
            autoSelected: 'pan',
          },
        },
        plotOptions: {
          bar: {
            distributed,
            horizontal,
          },
        },
        xaxis: {
          categories: data?.map((x: any) => x[labelField]) || [],
        },
        tooltip: { shared: false },
        dataLabels: {
          enabled: true,
        },
        colors: colors || [theme.palette.primary.main, theme.palette.success.main, theme.palette.info.main, theme.palette.warning.main, theme.palette.error.main],
      };

      const series = [{
        name: 'PEPE',
        data: data?.map((x: any) => x[valueField]) || []
      }]
      return {
        options,
        series
      }
    },
    [name, data, colors, theme],
  );
  if (isLoading || !data) {
    return <></>
  }

  return (
        <>
            <Chart options={options} series={series as any} type='bar' width='100%' height={350}/>
        </>
  );
}

export default memo(BarChart);
