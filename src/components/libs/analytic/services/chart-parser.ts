import { formatDate } from 'components/libs/analytic/services/date.utils';
import get from 'lodash/get';
import { ApexOptions } from 'apexcharts';

export type Serie = { name: string; data: Array<{ x: any; y: any }>; originalName?: string };

export type SerieData = {
  options: ApexOptions;
  labels: string[];
  series: Serie[] | Serie;
};

const xaxisConfig: Record<string, any> = {
  Monthly: {
    type: 'datetime',
    labels: {
      format: 'yyyy/MM',
    },
  },
};

type OptionsSettings = {
  name: string;
  interval?: string;
  options?: Partial<ApexOptions>;
};
const defaultOptions = ({ name, interval = '', options }: OptionsSettings): ApexOptions => {
  const defaultValues: ApexOptions = {
    title: {
      text: name,
      align: 'left',
    },
    chart: {
      id: `${name}-chart`,
      toolbar: {
        show: false,
        autoSelected: 'pan',
      },
    },
    yaxis: {
      min: 0,
      forceNiceScale: true,
      floating: false,
      decimalsInFloat: 0,
    },
    xaxis: xaxisConfig[interval] || {
      type: 'datetime',
    },
    markers: { size: 0 },
    stroke: {
      curve: 'straight',
    },
    tooltip: { shared: false },
    dataLabels: {
      enabled: true,
    },
  };

  return Object.assign({}, defaultValues, options || {});
};

export const histogram = (
  data: any,
  dateField: string = '_id.date',
  series: string[],
  opt: OptionsSettings,
  t: (value: string) => string = (x) => x,
): SerieData => {
  const labels = data?.map((n: any) => formatDate(get(n, dateField)) || '-');
  const seriesData: Serie[] = [];
  data.forEach((item: any) => {
    const x = get(item, dateField) || 0;
    series.forEach((field, index) => {
      const y = get(item, field);
      if (!seriesData[index]) {
        seriesData[index] = {
          originalName: field,
          name: t(field),
          data: [],
        };
      }
      seriesData[index].data.push({
        x,
        y,
      });
    });
  });

  return {
    options: defaultOptions(opt),
    labels,
    series: seriesData,
  };
};

export const histogramWithDate = (
  data: any = [],
  field: string = '_id.date',
  series: string[],
  opt: OptionsSettings,
  t: (value: string) => string = (x) => x,
): SerieData => {
  const seriesData: Serie[] = [];
  const labels = data?.map((n: any) => formatDate(n?._id?.date));
  data.forEach((item: any) => {
    const x = get(item, field);
    const date = get(item, '_id.date');
    series.forEach((field) => {
      const y = get(item, field);
      if (!seriesData[x]) {
        seriesData[x] = {
          name: t(x || field),
          originalName: x || field,
          data: [],
        };
      }
      seriesData[x].data.push({
        x: formatDate(date || Date.now()),
        y,
      });
    });
  });

  return {
    options: defaultOptions(opt),
    labels,
    series: seriesData,
  };
};
