import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { simpleColumns } from 'modules/inventory/store/constants/store.simple.columns';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { useToggle } from '@dfl/hook-utils';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import ProductDetailRulesUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailRulesUpdateContainer';

const ProductGeneralRulesInfo = () => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, product } = useProductDetail();

  if (isOpen) {
    return (
      <FormPaper title={t('section.shippingInfo.rules')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
        <ProductDetailRulesUpdateContainer
          initValue={{
            _id: product?._id,
            rules: product?.rules,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={onClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('section.shippingInfo.rules')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(product as IProduct) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(ProductGeneralRulesInfo);

const getArray = (data: IProduct): any[] => {
  const { rules, weight, size } = data?.shippingInfo || {};
  const array = [
    { label: 'rules.olderAge', value: weight },
    { label: 'rules.limitByDelivery', value: size },
    { label: 'rules.free', value: rules },
  ];
  return array;
};
