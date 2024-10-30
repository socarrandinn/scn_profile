import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { useToggle } from '@dfl/hook-utils';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import ProductDetailEstimatedTimeContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailEstimatedTimeContainer';
import { simpleColumns } from 'modules/common/constants/simple.columns';

const ProductGeneralEstimatedTime = () => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, product } = useProductDetail();

  if (isOpen) {
    return (
      <FormPaper
        title={t('section.deliveryTime.title')}
        actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}
      >
        <ProductDetailEstimatedTimeContainer
          initValue={{
            _id: product?._id,
            shippingSettings: product?.shippingSettings,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={onClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('section.deliveryTime.title')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(product as IProduct) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(ProductGeneralEstimatedTime);

const getArray = (data: IProduct): any[] => {
  const { shippingSettings } = data || {};
  const array = [
    { label: 'fields.labelMinMinutes', value: shippingSettings?.estimatedTime?.from },
    { label: 'fields.labelMaxMinutes', value: shippingSettings?.estimatedTime?.to },
  ];
  return array;
};
