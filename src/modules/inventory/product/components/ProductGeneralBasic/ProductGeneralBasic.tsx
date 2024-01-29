import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { simpleColumns } from 'modules/inventory/store/constants/store.simple.columns';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { useToggle } from '@dfl/hook-utils';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import ProductDetailBasicUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailBasicUpdateContainer';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';

const ProductGeneralBasic = () => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, product } = useProductDetail();

  if (isOpen) {
    return (
      <FormPaper nm title={t('fields.basicInformation')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
        <ProductDetailBasicUpdateContainer
          initValue={{
            _id: product?._id,
            name: product?.name,
            brand: product?.brand,
            code: product?.code,
            description: product?.description,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={onClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper nm title={t('fields.basicInformation')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(product as IProduct) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(ProductGeneralBasic);

const getArray = (data: IProduct): any[] => {
  const array = [
    {
      label: 'fields.name',
      value: data?.name,
    },
    {
      label: 'fields.brand',
      value: data?.brand,
    },
    {
      label: 'fields.code',
      value: data?.code,
    },
    {
      label: 'fields.description',
      value: data?.description,
    },
  ];
  return array;
};
