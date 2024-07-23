import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { findMunicipalityByStateAndMunicipality, findProvinceByStateCode } from '@dfl/location';
import { useSearchParamsChange } from '@dfl/react-security';
import isEmpty from 'lodash/isEmpty';
import { useSupplierReportSaleByLocation } from 'modules/inventory/provider/supplier/hooks/useSupplierReportSaleServices';
import { DATA_LABELS } from 'components/libs/analytic/constants/bar.chart.constants';
import { SUPPLIER_ANALYTIC_REPORT_SALE_PROVINCE_KEY } from 'modules/inventory/provider/supplier/constants';
import { DATA_DEFAULT } from '../components/SupplierReportSaleByLocationBarChart/mockup';
import { getName } from 'components/libs/analytic/hooks/useFilterMapper';

type IGraphParams = { series: any[]; categories: string[] };

const useSupplierReportSaleByLocationBarChart = () => {
  const { t } = useTranslation('providerAnalytic');
  const { update, value } = useSearchParamsChange(SUPPLIER_ANALYTIC_REPORT_SALE_PROVINCE_KEY, true);
  const { data, isLoading } = useSupplierReportSaleByLocation();
  // const mdata = useMemo(() => getMapperData(data), [data]);
  const mdata = useMemo(() => DATA_DEFAULT, []);

  const name = useMemo(() => getName(value, t('supplierReportSaleByLocationBar.title')), [value, t]);

  const updateByProvinces = useCallback(() => {
    return {
      categories:
        mdata?.map((province: any) => findProvinceByStateCode(province?._id?.state)?.name || province?._id?.state) ||
        [],
      series: [
        {
          name: t('supplierReportSaleByLocationBar.label'),
          data:
            mdata?.map((province: any) => ({
              x: findProvinceByStateCode(province?._id?.state)?.name || province?._id?.state,
              y: province.quantity,
            })) || [],
        },
      ],
    };
  }, [mdata, t]);

  const updateByMunicipalities = useCallback(
    (state: string): IGraphParams => {
      const municipalities = mdata?.find((e: any) => e?._id?.state === state)?.municipalities;
      // update graph
      return {
        categories:
          municipalities?.map(
            (point: any) =>
              findMunicipalityByStateAndMunicipality(state, point.municipality)?.name || point.municipality,
          ) || [],
        series: [
          {
            name: name || t('supplierReportSaleByLocationBar.label'),
            data:
              municipalities?.map((point: any) => ({
                x: findMunicipalityByStateAndMunicipality(state, point.municipality)?.name || point.municipality,
                y: point.quantity,
              })) || [],
          },
        ],
      };
    },
    [mdata, name, t],
  );

  const handleClick = useCallback(
    (chart: any, w: any, e: any) => {
      if (e.dataPointIndex !== -1) {
        const state = data?.[e.dataPointIndex]?._id?.state;
        // update the query param
        update({ [SUPPLIER_ANALYTIC_REPORT_SALE_PROVINCE_KEY]: state, page: 0 });
        // update graph
        updateByMunicipalities(state);
      }
    },
    [data, update, updateByMunicipalities],
  );

  const { series } = useMemo(() => {
    if (!isEmpty(value) && value?.length === 1) {
      return updateByMunicipalities(value[0]);
    } else {
      return updateByProvinces();
    }
  }, [updateByMunicipalities, updateByProvinces, value]);

  const options = useMemo(
    () => ({
      title: {
        text: t('supplierReportSaleByLocationBar.title'),
        align: 'left',
      },
      chart: {
        id: 'supplier-report-sale-location-bar-chart',
        events: {
          click: isEmpty(value) ? handleClick : () => {},
        },
        type: 'bar',
        height: 350,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      dataLabels: DATA_LABELS.dataLabels,
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            ...DATA_LABELS.dataLabels,
            hideOverflowingLabels: false,
          },
        },
      },
      xaxis: {
        show: true,
      },
      legend: {
        show: false,
      },
    }),
    [t, value, handleClick],
  );

  return {
    options,
    series,
    isLoading,
  };
};

export default useSupplierReportSaleByLocationBarChart;
