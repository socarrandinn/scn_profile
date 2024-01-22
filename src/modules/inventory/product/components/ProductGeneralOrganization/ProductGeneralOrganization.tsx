import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { simpleColumns } from 'modules/inventory/store/constants/store.simple.columns';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { useToggle } from '@dfl/hook-utils';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import ProductDetailOrganizationUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailOrganizationUpdateContainer';
// import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';

const ProductGeneralOrganization = () => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, product } = useProductDetail();

  if (isOpen) {
    return (
      <FormPaper title={t('fields.basicInformation')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
        <ProductDetailOrganizationUpdateContainer
          initValue={{
            _id: product?._id,
            category: product?.category,
            // @ts-ignore
            providers: product?.providers,
            keywords: product?.keywords,
            visible: product?.visible,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={onClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper
      title={t('section.summary.organization.title')}
      actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}
    >
      <BasicTableHeadless
        columns={simpleColumns}
        // @ts-ignore
        data={getArray(product as IProductCreate) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(ProductGeneralOrganization);

const getArray = (data: IProductCreate): any[] => {
  const { t } = useTranslation('product');
  const visible = data?.visible ? t('section.visibility.visible') : t('section.visibility.hidden');

  const array = [
    {
      label: 'fields.category',
      // @ts-ignore
      value: data?.category?.name,
    },
    {
      label: 'fields.supplier',
      // @ts-ignore
      value: data?.providers?.supplier.name,
      // value: data?.providers?.name,
    },
    {
      label: 'fields.keywords',
      value: data?.keywords?.concat(' '),
    },
    {
      label: 'fields.visibility',
      value: visible,
    },
  ];
  return array;
};
