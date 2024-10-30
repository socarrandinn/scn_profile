import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import ProductDetailPriceUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailPriceUpdateContainer';
import { useToggle } from '@dfl/hook-utils';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { simpleColumns } from 'modules/common/constants/simple.columns';
import { IProduct } from '../../interfaces/IProduct';
import { formatNum } from 'utils/math';
import { calculateFinalPrice } from '../../utils';

const getArray = (data: IProduct): any[] => {
  const { priceDetails: price } = data || {};

  return [
    {
      label: 'product:section.prices.cost',
      value: price?.distribution?.cost?.value ? `${formatNum(price?.distribution?.cost?.value)}` : '',
    },
    {
      label: 'product:section.prices.shipping',
      value: price?.distribution?.shipping?.value ? `${formatNum(price?.distribution?.shipping?.value)}` : '',
    },
    {
      label: 'product:section.prices.commercial',
      value: price?.distribution?.commercial ? `${formatNum(price?.distribution?.commercial?.value)}` : '',
    },
    {
      label: 'product:section.prices.otherCost',
      value: price?.distribution?.otherCost ? `${formatNum(price?.distribution?.otherCost?.value)}` : '',
    },
    {
      label: 'product:section.prices.price',
      value: price?.distribution && price?.distribution?.cost?.value ? calculateFinalPrice(price?.distribution, price?.distribution?.cost?.value) : '',
    },
  ];
};

const ProductPrice = () => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, product } = useProductDetail();

  if (isOpen) {
    return (
      <FormPaper nm title={t('section.prices.information')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
        <ProductDetailPriceUpdateContainer
          initValue={{
            _id: product?._id,
            priceDetails: product?.priceDetails,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={onClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper nm title={t('section.prices.information')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(product as IProduct) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(ProductPrice);
