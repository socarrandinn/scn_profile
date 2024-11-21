import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import ProductDetailPriceUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailPriceUpdateContainer';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { BasicTableDoubleColumnHeadless } from 'modules/common/components/BasicTableHeadless';
import { simpleColumns } from 'modules/common/constants/simple.columns';
import { IProduct } from '../../interfaces/IProduct';
import PriceDetailContent, { CommissionLogisticPrice, CommissionPrice } from './PriceDetailContent';
import OtherCostTable from './OtherCostTable';
import { usePriceCommission } from '../../hooks/usePriceCommission';
import { initValueProductPriceDetails } from '../../constants/product-initValues';
import { merge } from 'lodash';

const ProductPrice = () => {
  const { t } = useTranslation('product');
  const { isLoading, error, product, onOneClose, onOneToggle, state } = useProductDetail();
  const open = useMemo(() => state?.form_9 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_9'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_9'), [onOneClose]);
  const price = useMemo(() => merge(initValueProductPriceDetails, product?.priceDetails), [product]);
  const { commissionError } = usePriceCommission();

  if (open) {
    return (
      <FormPaper
        nm
        title={t('section.prices.information')}
        actions={<FormPaperAction onToggle={handleToggle} open={open} />}
      >
        <ProductDetailPriceUpdateContainer
          initValue={{
            _id: product?._id,
            priceDetails: price,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={handleClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper
      nm
      title={t('section.prices.information')}
      actions={<FormPaperAction onToggle={handleToggle} open={open} />}
    >
      <PriceDetailContent product={product}>
        <BasicTableDoubleColumnHeadless
          columns={simpleColumns}
          doubleColumnData={getDoubleArray(product as IProduct, commissionError(product as IProduct)) || []}
          responsiveData={getArray(product as IProduct, commissionError(product as IProduct)) || []}
          isLoading={isLoading}
          error={error}
          minWidth={400}
        />
        <OtherCostTable otherPrices={product?.priceDetails?.distribution?.otherCost || []} />
      </PriceDetailContent>
    </FormPaper>
  );
};

export default memo(ProductPrice);

const getArray = (data: IProduct, commissionError: boolean): any[] => {
  const { priceDetails: price } = data || {};

  return [
    {
      label: 'product:section.prices.cost',
      value: price?.distribution?.cost && <CommissionPrice price={price} item='cost' noShowCommission />,
    },
    {
      label: 'product:section.prices.shipping',
      value: price?.distribution?.shipping && <CommissionPrice price={price} item='shipping' />,
    },
    {
      label: 'product:section.prices.logistic',
      value: price?.distribution?.logistic && (
        <CommissionLogisticPrice price={price} item='logistic' error={commissionError} />
      ),
    },
    {
      label: 'product:section.prices.commercial',
      value: price?.distribution?.commercial && <CommissionPrice price={price} item='commercial' />,
    },
  ];
};
const getDoubleArray = (data: IProduct, commissionError: boolean): any[] => {
  const { priceDetails: price } = data || {};

  return [
    {
      label: 'product:section.prices.cost',
      value: price?.distribution?.cost && <CommissionPrice price={price} item='cost' noShowCommission/>,
      label2: 'product:section.prices.shipping',
      value2: price?.distribution?.shipping && <CommissionPrice price={price} item='shipping' />,
    },
    {
      label: 'product:section.prices.logistic',
      value: price?.distribution?.logistic && (
        <CommissionLogisticPrice price={price} item='logistic' error={commissionError} />
      ),
      label2: 'product:section.prices.commercial',
      value2: price?.distribution?.commercial && <CommissionPrice price={price} item='commercial' />,
    },
  ];
};
