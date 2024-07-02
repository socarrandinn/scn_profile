import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { simpleColumns } from 'modules/inventory/store/constants/store.simple.columns';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { useToggle } from '@dfl/hook-utils';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import ProductDetailShippingInfoUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailShippingInfoUpdateContainer';
import RegionListCell from './RegionListCell/RegionListCell';
import { POLICY_ENUM } from '../../interfaces/IProductCreate';

const ProductGeneralShippingInfo = () => {
  const { t } = useTranslation('product');
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
              deliveryRules: product?.shippingSettings?.deliveryRules as any,
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
        data={getArray(product as IProduct) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(ProductGeneralShippingInfo);

const getArray = (data: IProduct): any[] => {
  const { deliveryRules, shippingInfo } = data?.shippingSettings || {};
  const array = [
    { label: 'shippingInfo.weight', value: shippingInfo?.weight },
    { label: 'product:section.shipping.sizesInfo.length', value: shippingInfo?.length },
    { label: 'product:section.shipping.sizesInfo.height', value: shippingInfo?.height },
    { label: 'product:section.shipping.sizesInfo.width', value: shippingInfo?.width },
    {
      label:
        deliveryRules?.policy === POLICY_ENUM.ALLOW
          ? 'product:section.shippingInfo.allowedZones'
          : 'product:section.shippingInfo.deniedZones',
      value: <RegionListCell regions={deliveryRules?.regions} />,
    },
  ];
  return array;
};
