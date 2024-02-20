import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { simpleColumns } from 'modules/inventory/store/constants/store.simple.columns';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { useToggle } from '@dfl/hook-utils';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import ProductDetailEstimatedTimeContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailEstimatedTimeContainer';

const ProductGeneralCodeProvider = () => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, product } = useProductDetail();

  if (isOpen) {
    return (
      <FormPaper
        title={t('section.providerCode.title')}
        actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}
      >
        <ProductDetailEstimatedTimeContainer
          initValue={{
            _id: product?._id,
            codeProductProvider: product?.codeProductProvider,
            codeLogisticProvider: product?.codeLogisticProvider,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={onClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('section.providerCode.title')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(product as IProduct) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(ProductGeneralCodeProvider);

const getArray = (data: IProduct): any[] => {
  const { codeLogisticProvider, codeProductProvider } = data || {};
  const array = [
    { label: 'fields.codeProductProvider', value: codeProductProvider },
    { label: 'fields.codeLogisticProvider', value: codeLogisticProvider },
  ];
  return array;
};
