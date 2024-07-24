import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { COUNTRY_ISO_CODE } from '@dfl/location';
import { useSupplierReportSaleByCountry } from './useSupplierReportSaleServices';
import { SUPPLIER_COUNTRY_DATA_DEFAULT } from '../components/SupplierReportSaleByCountryBarChart/mockup';
import { DATA_LABELS } from 'components/libs/analytic/constants/bar.chart.constants';

const useSupplierReportSaleByCountryBarChart = () => {
  const { t } = useTranslation('providerAnalytic');
  const { isLoading } = useSupplierReportSaleByCountry();
  // const mdata = useMemo(() => getMapperData(data), [data]);
  const mdata = useMemo(() => SUPPLIER_COUNTRY_DATA_DEFAULT, []);

  const name = useMemo(() => t('supplierReportSalePercentByCountry.title'), [t]);

  const { series, categories } = useMemo(() => getOrderCountryBarSeries(mdata, 9), [mdata]);

  const options = useMemo(
    () => ({
      title: {
        text: name,
        align: 'left',
      },
      chart: {
        id: 'supplier-report-sale-by-country-bar-chart',
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
        name: t('supplierReportSalePercentByCountry.label'),
        data: series,
      },
    ],
    isLoading,
  };
};

export default useSupplierReportSaleByCountryBarChart;

const findCountryByCode = (code: string) => {
  return COUNTRY_ISO_CODE[code] || code;
};

const getOrderCountryBarSeries = (data: any[], cant: number) => {
  const series = data
    ?.map((country: any) => ({
      x: findCountryByCode(country?._id) || country?._id,
      y: country?.quantity,
    }))
    ?.sort((a: any, b: any) => b.y - a.y);

  const xSeries = series?.slice(0, cant);
  const sum = series?.slice(cant - 2, series?.length - 1)?.reduce(
    (accumulator: any, element: any) => {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      return { y: accumulator.y + element.y };
    },
    { y: 0 },
  );
  const others = { x: 'Otros', ...sum };
  const result = sum?.y === 0 ? xSeries : [...(xSeries || []), others];

  return {
    series: result,
    categories: result?.map((country: any) => country.x) || [],
  };
};
