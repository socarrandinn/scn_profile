import { useMemo } from 'react';

const useBarCardReviewReport = (data: any[]) => {
  const { categories, series } = useMemo(() => {
    const categories = data?.map((d) => d?.type);
    const series = data?.map((d) => d?.count ?? 10);

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
          // horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories,
      },
      yaxis: {
        reversed: true,
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
        data: series ?? [],
      },
    ],
  };
};
export default useBarCardReviewReport;
