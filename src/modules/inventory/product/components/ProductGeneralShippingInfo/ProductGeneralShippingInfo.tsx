import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import ProductDetailShippingInfoUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailShippingInfoUpdateContainer';
import { simpleColumns } from 'modules/common/constants/simple.columns';
import BasicTableDoubleColumnHeadless from 'modules/common/components/BasicTableHeadless/BasicTableDoubleColumnHeadless';

const ProductGeneralShippingInfo = () => {
  const { t } = useTranslation(['product', 'provider']);
  const { isLoading, error, product, onOneClose, onOneToggle, state } = useProductDetail();
  const open = useMemo(() => state?.form_7 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_7'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_7'), [onOneClose]);

  if (open) {
    return (
      <FormPaper
        title={t('section.shippingInfo.title')}
        actions={<FormPaperAction onToggle={handleToggle} open={open} />}
      >
        <ProductDetailShippingInfoUpdateContainer
          initValue={{
            _id: product?._id as string,
            shippingSettings: {
              shippingInfo: product?.shippingSettings?.shippingInfo as any,
            },
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
      title={t('section.shippingInfo.title')}
      actions={<FormPaperAction onToggle={handleToggle} open={open} />}
    >
      <BasicTableDoubleColumnHeadless
        columns={simpleColumns}
        responsiveData={getArray(product as IProduct, t) || []}
        doubleColumnData={getDoubleColumnArray(product as IProduct, t) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(ProductGeneralShippingInfo);

const getArray = (data: IProduct, t: any): any[] => {
  const { shippingInfo } = data?.shippingSettings || {};

  const isFragile = shippingInfo?.fragile ? t('provider:rules.yes') : t('provider:rules.no');
  const needRefrigeration = shippingInfo?.needRefrigeration ? t('provider:rules.yes') : t('provider:rules.no');

  const array = [
    { label: 'product:section.shipping.weight.weightLabel', value: shippingInfo?.weight },
    { label: 'product:section.shipping.sizesInfo.length', value: shippingInfo?.length },
    { label: 'product:section.shipping.sizesInfo.height', value: shippingInfo?.height },
    { label: 'product:section.shipping.sizesInfo.width', value: shippingInfo?.width },
    {
      label: 'product:section.shipping.statusInfo.fragile',
      value: isFragile,
    },
    {
      label: 'product:section.shipping.statusInfo.needRefrigeration',
      value: needRefrigeration,
    },
  ];
  return array;
};

const getDoubleColumnArray = (data: IProduct, t: any): any[] => {
  const { shippingInfo } = data?.shippingSettings || {};

  const isFragile = shippingInfo?.fragile ? t('provider:rules.yes') : t('provider:rules.no');
  const needRefrigeration = shippingInfo?.needRefrigeration ? t('provider:rules.yes') : t('provider:rules.no');

  const array = [
    {
      label: 'product:section.shipping.weight.weightLabel',
      value: shippingInfo?.weight,
      label2: 'product:section.shipping.sizesInfo.length',
      value2: shippingInfo?.length,
    },

    {
      label: 'product:section.shipping.sizesInfo.height',
      value: shippingInfo?.height,
      label2: 'product:section.shipping.sizesInfo.width',
      value2: shippingInfo?.width,
    },

    {
      label: 'product:section.shipping.statusInfo.fragile',
      value: isFragile,
      label2: 'product:section.shipping.statusInfo.needRefrigeration',
      value2: needRefrigeration,
    },
  ];
  return array;
};
