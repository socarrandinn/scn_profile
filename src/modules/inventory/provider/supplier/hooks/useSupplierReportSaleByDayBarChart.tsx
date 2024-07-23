import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { dayWeekend } from 'components/libs/analytic/services/date.utils';
import { SUPPLIER_DAYS_DATA_DEFAULT } from '../components/SupplierReportSaleByDayBarChart/mockup';
import { DATA_LABELS } from 'components/libs/analytic/constants/bar.chart.constants';
import { useSupplierReportSaleByDays } from './useSupplierReportSaleServices';

const useSupplierReportSaleByDayBarChart = () => {
  const { t } = useTranslation('providerAnalytic');
  const { isLoading } = useSupplierReportSaleByDays();

  // const mdata = useMemo(() => getMapperData(data), [data]);
  const mdata = useMemo(() => SUPPLIER_DAYS_DATA_DEFAULT, []);

  const name = useMemo(() => t('supplierReportSalePercentByDayBar.title'), [t]);

  const getNameDay = useCallback(
    (dayId: number) => {
      const name = dayWeekend?.find((day) => day.id === dayId)?.name || dayId;
      return t(`days.${name}`);
    },
    [t],
  );

  const { series, categories } = useMemo(() => {
    const series = mdata
      ?.sort((a: any, b: any) => a._id?.date - b._id?.date)
      ?.map((day: any) => ({
        x: getNameDay(day?._id?.date),
        y: day?.quantity,
      }));

    const categories = mdata?.map((day: any) => getNameDay(day?._id?.date)) || [];

    return {
      series,
      categories,
    };
  }, [getNameDay, mdata]);

  const options = useMemo(
    () => ({
      title: {
        text: name,
        align: 'left',
      },
      chart: {
        id: 'supplier-report-sale-by-days-bar-chart',
        toolbar: {
          show: false,
          autoSelected: 'pan',
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          distributed: false,
          horizontal: true,
        },
      },
      dataLabels: DATA_LABELS.dataLabels,
      xaxis: {
        categories,
      },
      tooltip: { shared: false },
    }),
    [name, categories],
  );

  return {
    options,
    series: [
      {
        name: t('supplierReportSalePercentByDayBar.label'),
        data: series,
      },
    ],
    isLoading,
  };
};

export default useSupplierReportSaleByDayBarChart;
