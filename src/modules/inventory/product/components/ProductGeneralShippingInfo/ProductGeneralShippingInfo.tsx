import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { simpleColumns } from 'modules/inventory/warehouse/constants/store.simple.columns';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { useToggle } from '@dfl/hook-utils';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import ProductDetailShippingInfoUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailShippingInfoUpdateContainer';

const ProductGeneralShippingInfo = () => {
  const { t } = useTranslation(['product', 'provider']);
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, product } = useProductDetail();

  if (isOpen) {
    return (
      <FormPaper
        title={t('section.shippingInfo.title')}
        actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}
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
          onClose={onClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('section.shippingInfo.title')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(product as IProduct, t) || []}
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
