import { memo, useCallback, useMemo } from 'react';
import { useProductDetail } from '../../contexts/ProductDetail';
import ProductDetailEstimatedTimeContainer from '../../containers/ProductTabs/ProductDetailEstimatedTimeContainer';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { simpleColumns } from 'modules/common/constants/simple.columns';
import { IProduct } from '../../interfaces/IProduct';

const getArray = (data: IProduct): any[] => {
  const { shippingSettings } = data || {};
  const array = [
    { label: 'fields.labelMinMinutes', value: shippingSettings?.estimatedTime?.from },
    { label: 'fields.labelMaxMinutes', value: shippingSettings?.estimatedTime?.to },
  ];
  return array;
};


const EstimatedTimeContent = () => {
  const { isLoading, error, product, onOneClose, state } = useProductDetail();
  const handleClose = useCallback(() => onOneClose?.('form_6'), [onOneClose]);
  const open = useMemo(() => state?.form_6 || false, [state?.form_6]);


  if (open) {
    return (
      <ProductDetailEstimatedTimeContainer
        initValue={{
          _id: product?._id,
          shippingSettings: product?.shippingSettings,
        }}
        dataError={error}
        loadingInitData={isLoading}
        onClose={handleClose}
      />
    );
  }

  return (
    <BasicTableHeadless
      columns={simpleColumns}
      data={getArray(product as IProduct) || []}
      isLoading={isLoading}
      error={error}
    />
  );
};

export default memo(EstimatedTimeContent);

