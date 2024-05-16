import { useMemo } from 'react';

const useBarCardReviewReport = (data: any[]) => {
  const { categories, series } = useMemo(() => {
    const categories = data?.slice(0, 14)?.map((d) => d?.type);
    const series = data?.slice(0, 14)?.map((d) => d?.count ?? 10);

    return {
      categories,
      series,
    };
  }, [data]);

  const options = useMemo(
    () => ({
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories,
      },
      yaxis: {
        reversed: false,
        axisTicks: {
          show: true,
        },
      },
    }),
    [categories],
  );

  return {
    options,
    series: [
      {
        name: 'Reportes',
        data: series ?? [],
      },
    ],
  };
};
export default useBarCardReviewReport;
