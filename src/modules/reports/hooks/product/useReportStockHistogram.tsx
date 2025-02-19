import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { useInventoryStockHistogram } from './useInventoryStock';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { IStockActivityHistogram } from 'modules/reports/interfaces/IReportStockActivity';
import { AllSame, formatDate, formatObjectDate } from 'components/libs/analytic/services/date.utils';
import { useHeaderFilterContext } from 'modules/security/audit-logs/context/HeaderFilterContext';

const xaxisConfig: Record<string, any> = {
  Monthly: {
    type: 'datetime',
    labels: {
      format: 'yyyy/MM',
    },
  },
};

const useReportStockHistogram = () => {
  const { t } = useTranslation('report');
  const { interval } = useHeaderFilterContext();
  const { product } = useProductDetail();
  const { data, isLoading } = useInventoryStockHistogram(product?._id as string);

  const finalSeries = [];

  const { countAdded, countDiscounted, cumulativeAdded, cumulativeDiscounted } = useMemo(() => {
    const countAdded: number[] = [];
    const countDiscounted: number[] = [];
    const cumulativeAdded: number[] = [];
    const cumulativeDiscounted: number[] = [];
    data?.forEach((n: IStockActivityHistogram) => {
      countAdded.push(n?.countAdded);
      countDiscounted.push(n?.countDiscounted);
      cumulativeAdded.push(n?.cumulativeAdded);
      cumulativeDiscounted.push(n?.cumulativeDiscounted);
    });

    return {
      countAdded,
      countDiscounted,
      cumulativeAdded,
      cumulativeDiscounted,
    };
  }, [data]);

  // Include other
  if (!AllSame(countAdded)) {
    finalSeries.push({
      name: t('report.inventory.histogram.countAdded'),
      data: countAdded || [],
    });
  }
  if (!AllSame(countDiscounted)) {
    finalSeries.push({
      name: t('report.inventory.histogram.countDiscounted'),
      data: countDiscounted || [],
    });
  }
  if (!AllSame(cumulativeAdded)) {
    finalSeries.push({
      name: t('report.inventory.histogram.cumulativeAdded'),
      data: cumulativeAdded || [],
    });
  }
  if (!AllSame(cumulativeDiscounted)) {
    finalSeries.push({
      name: t('report.inventory.histogram.cumulativeDiscounted'),
      data: cumulativeDiscounted || [],
    });
  }

  const labels = useMemo(() => {
    return (
      data?.map((n: IStockActivityHistogram) => {
        const d = n?._id;
        const date = formatObjectDate(d?.year, d?.month, d?.day);
        return formatDate(date);
      }) || []
    );
  }, [data]);

  const options = useMemo(
    () => ({
      title: {
        text: t('report.inventory.histogram.inventoryChange'),
        align: 'left',
        style: {
          fontSize: 20,
        },
      },
      chart: {
        id: 'histogram-inventory-changes',
        toolbar: {
          show: true,
          autoSelected: 'zoom',
        },
      },
      yaxis: {
        min: 0,
        forceNiceScale: true,
        labels: {
          formatter: (value: number) => value,
        },
      },
      labels,
      xaxis: xaxisConfig[interval as string] || {
        type: 'datetime',
      },
      markers: { size: 0 },
      stroke: {
        curve: 'straight',
      },
      tooltip: { shared: false },
      dataLabels: {
        enabled: true,
        formatter: (value: number) => value,
      },
    }),
    [t, labels, interval],
  );

  return {
    options,
    series: finalSeries,
    isLoading,
  };
};
export default useReportStockHistogram;
