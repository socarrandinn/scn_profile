import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { IStockActivityHistogram } from 'modules/reports/interfaces/IReportStockActivity';
import { AllSame, formatDate, formatObjectDate } from 'components/libs/analytic/services/date.utils';
import { useHeaderFilterContext } from 'modules/security/audit-logs/context/HeaderFilterContext';
import { useSaleOfferHistogramData } from './useSaleOffer';
import { useOfferContext } from 'modules/sales-offer/offer/contexts/OfferContext';

const xaxisConfig: Record<string, any> = {
  Monthly: {
    type: 'datetime',
    labels: {
      format: 'yyyy/MM',
    },
  },
};

const useHistogramSaleOffer = () => {
  const { t } = useTranslation('report');
  const { interval } = useHeaderFilterContext();
  const { offer } = useOfferContext();
  const { data, isLoading } = useSaleOfferHistogramData(offer?._id as string);

  const finalSeries = [];

  const { orders, offers } = useMemo(() => {
    const orders: number[] = [];
    const offers: number[] = [];
    data?.forEach((n: any) => {
      orders.push(n?.orders);
      offers.push(n?.offers);
    });

    return {
      orders,
      offers,
    };
  }, [data]);

  // Include other
  if (!AllSame(orders)) {
    finalSeries.push({
      name: t('report.offer.histogram.orders'),
      data: orders || [],
    });
  }
  if (!AllSame(offers)) {
    finalSeries.push({
      name: t('report.offer.histogram.offers'),
      data: offers || [],
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
        text: t('report.offer.histogram.orderRegister'),
        align: 'left',
        style: {
          fontSize: 20,
          fontWeight: 600,
        },
      },
      chart: {
        id: 'histogram-product-discount',
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
      colors: ['#65BE46', '#FDA20A'],
    }),
    [t, labels, interval],
  );

  return {
    options,
    series: finalSeries,
    isLoading,
  };
};
export default useHistogramSaleOffer;
