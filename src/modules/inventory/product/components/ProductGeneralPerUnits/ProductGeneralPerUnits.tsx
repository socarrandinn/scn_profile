import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { simpleColumns } from 'modules/inventory/store/constants/store.simple.columns';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { useToggle } from '@dfl/hook-utils';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import ProductDetailPerUnitsUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailPerUnitsUpdateContainer';

const ProductGeneralPerUnits = () => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, product } = useProductDetail();

  if (isOpen) {
    return (
      <FormPaper title={t('section.productPerUnit.title')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
        <ProductDetailPerUnitsUpdateContainer
          initValue={{
            _id: product?._id,
            productPerUnit: product?.productPerUnit,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={onClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper nm title={t('section.productPerUnit.title')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(product as IProduct) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(ProductGeneralPerUnits);

const getArray = (data: IProduct): any[] => {
  const { amount, measurements } = data?.productPerUnit || {};
  const array = [
    { label: 'productPerUnit.amount', value: amount },
    { label: 'productPerUnit.measurements', value: measurements },
  ];
  return array;
};
