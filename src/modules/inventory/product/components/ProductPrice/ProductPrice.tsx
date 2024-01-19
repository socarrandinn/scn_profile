import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { simpleColumns } from 'modules/inventory/store/constants/store.simple.columns';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { useToggle } from '@dfl/hook-utils';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import ProductDetailPriceUpdateContainer from '../../containers/ProductTabs/ProductDetailPriceUpdateContainer';

const ProductPrice = () => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, product } = useProductDetail();

  if (isOpen) {
    return (
      <FormPaper title={t('section.prices.information')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
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
    <FormPaper title={t('section.prices.information')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
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

const getArray = (data: IProduct): any[] => {
  const array = [
    {
      label: 'section.prices.cost',
      value: data?.priceDetails?.distribution?.cost.value,
    },
    {
      label: 'section.prices.logistic',
      value: data?.priceDetails?.distribution?.logistic.value,
    },
    {
      label: 'section.prices.shipping',
      value: data?.priceDetails?.distribution?.shipping.value,
    },
    {
      label: 'section.prices.commercial',
      value: data?.priceDetails?.distribution?.commercial.value,
    },
    {
      label: 'section.prices.otherCost',
      value: data?.priceDetails?.distribution?.otherCost.value,
    },
  ];
  return array;
};
