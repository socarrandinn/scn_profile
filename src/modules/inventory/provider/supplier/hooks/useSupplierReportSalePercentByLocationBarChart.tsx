import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { findMunicipalityByStateAndMunicipality, findProvinceByStateCode } from '@dfl/location';
import { useSearchParamsChange } from '@dfl/react-security';
import isEmpty from 'lodash/isEmpty';
import { useSupplierReportSalePercentByLocation } from './useSupplierReportSaleServices';
import { SUPPLIER_ANALYTIC_REPORT_SALE_PROVINCE_KEY } from '../constants';
import { DATA_LABELS } from 'components/libs/analytic/constants/bar.chart.constants';
import { _percentParser } from 'components/libs/analytic/services/format.utils';
import { PERCENT_LOCATION_VALUE_DEFAULT } from '../components/SupplierReportSalePercentByLocation/mockup';
import { getName } from 'components/libs/analytic/hooks/useFilterMapper';

type IGraphParams = { series: any[]; categories: string[] };

const useSupplierReportSalePercentByLocationBarChart = () => {
  const { t } = useTranslation('providerAnalytic');
  const { update, value } = useSearchParamsChange(SUPPLIER_ANALYTIC_REPORT_SALE_PROVINCE_KEY, true);
  const { data, isLoading } = useSupplierReportSalePercentByLocation();
  // const mdata = useMemo(() => getMapperData(data), [data]);
  const mdata = useMemo(() => PERCENT_LOCATION_VALUE_DEFAULT, [PERCENT_LOCATION_VALUE_DEFAULT]);
  const name = useMemo(() => getName(value, t('supplierReportSaleByLocationBar.title')), [value, t])

  const updateByProvinces = useCallback(() => {
    return {
      categories:
        mdata?.map((province: any) => findProvinceByStateCode(province?.state)?.name || province?.state) || [],
      series: [
        {
          name: t('supplierReportSalePercentByLocationBar.label_2'),
          data:
            mdata?.map((province: any) => ({
              x: findProvinceByStateCode(province?.state)?.name || province?.state,
              y: Number(province.statePercentage).toFixed(2),
            })) || [],
        },
      ],
    };
  }, [mdata, t]);

  const updateByMunicipalities = useCallback(
    (state: string): IGraphParams => {
      const municipalities = mdata?.find((e: any) => e?.state === state)?.municipalities;
      // update graph
      return {
        categories:
          municipalities?.map(
            (point: any) =>
              findMunicipalityByStateAndMunicipality(state, point.municipality)?.name || point.municipality,
          ) || [],
        series: [
          {
            name: t('supplierReportSalePercentByLocationBar.label_2'),
            data:
              municipalities?.map((point: any) => ({
                x: findMunicipalityByStateAndMunicipality(state, point.municipality)?.name || point.municipality,
                y: Number(point.municipalityPercentage).toFixed(2),
              })) || [],
          },
        ],
      };
    },
    [mdata, t],
  );

  const handleClick = useCallback(
    (chart: any, w: any, e: any) => {
      if (e.dataPointIndex !== -1) {
        const state = data?.[e.dataPointIndex]?.state;
        // update the query param
        update({ [SUPPLIER_ANALYTIC_REPORT_SALE_PROVINCE_KEY]: state, page: 0 });
        // update graph
        updateByMunicipalities(state);
      }
    },
    [data, update, updateByMunicipalities],
  );

  const { categories, series } = useMemo(() => {
    if (!isEmpty(value) && value?.length === 1) {
      return updateByMunicipalities(value[0]);
    } else {
      return updateByProvinces();
    }
  }, [updateByMunicipalities, updateByProvinces, value]);

  const options = useMemo(
    () => ({
      title: {
        text: t('supplierReportSalePercentByLocationBar.title'),
        align: 'left',
      },
      chart: {
        id: 'supplier-report-sale-percent-by-location-bar-chart',
        events: {
          click: isEmpty(value) ? handleClick : () => {},
        },
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      dataLabels: {
        ...DATA_LABELS.dataLabels,
        formatter: function (val: any, opt: any) {
          return _percentParser(val);
        },
      },
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
      tooltip: {
        y: {
          formatter: function (val: any, opt: any) {
            return _percentParser(val);
          },
        },
      },
      legend: {
        position: 'top',
        offsetY: -10,
        maxWidth: 600,
      },
    }),
    [name, t, value, handleClick, categories],
  );

  return {
    options,
    series,
    isLoading,
  };
};

export default useSupplierReportSalePercentByLocationBarChart;
