import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { simpleColumns } from 'modules/inventory/store/constants/store.simple.columns';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { useToggle } from '@dfl/hook-utils';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import ProductDetailScoreUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailScoreUpdateContainer';

const ProductScoreInformation = () => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, product } = useProductDetail();

  if (isOpen) {
    return (
      <FormPaper nm title={t('section.seo.title')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
        <ProductDetailScoreUpdateContainer
          initValue={{
            _id: product?._id,
            score: product?.score,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={onClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper nm title={t('section.seo.title')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(product as IProduct) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(ProductScoreInformation);

const getArray = (data: IProduct): any[] => {
  const array = [
    {
      label: 'section.seo.name',
      value: data?.score,
    },
  ];
  return array;
};
