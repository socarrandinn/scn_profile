import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import ProductDetailEstimatedTimeContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailEstimatedTimeContainer';
import { simpleColumns } from 'modules/common/constants/simple.columns';

const ProductGeneralEstimatedTime = () => {
  const { t } = useTranslation('product');
  const { isLoading, error, product, onOneClose, onOneToggle, state } = useProductDetail();
  const open = useMemo(() => state?.form_6 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_6'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_6'), [onOneClose]);

  if (open) {
    return (
      <FormPaper
        title={t('section.deliveryTime.title')}
        actions={<FormPaperAction onToggle={handleToggle} open={open} />}
      >
        <ProductDetailEstimatedTimeContainer
          initValue={{
            _id: product?._id,
            shippingSettings: product?.shippingSettings,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={handleClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('section.deliveryTime.title')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
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
