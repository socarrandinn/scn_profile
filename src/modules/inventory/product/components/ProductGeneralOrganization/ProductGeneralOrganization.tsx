import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { simpleColumns } from 'modules/inventory/store/constants/store.simple.columns';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { useToggle } from '@dfl/hook-utils';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import ProductDetailOrganizationUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailOrganizationUpdateContainer';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';
import { renderNameLink } from 'modules/inventory/common/components/NameLink/NameLink';
import { isEmpty } from 'lodash';
import { ManufactureBand } from 'modules/inventory/provider/manufacture/components/ManufactureBand';

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
            category: product?.category?.categoryId,
            // @ts-ignore
            providers: product?.providers?.providerId,
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
        data={getArray(product as IProductCreate, t) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(ProductGeneralOrganization);

const getArray = (data: IProductCreate, t: any): any[] => {
  const visible = data?.visible ? t('section.visibility.visible') : t('section.visibility.hidden');
  const array = [
    {
      label: 'fields.category',
      value: renderNameLink({
        // @ts-ignore
        name: data?.category?.name,
        // @ts-ignore
        route: `/inventory/settings/categories/${data?.category?.categoryId as string}/subcategories`,
        // @ts-ignore
        noLink: isEmpty(data?.category?.categoryId),
      }),
    },
    {
      label: 'fields.supplier',
      value: renderNameLink({
        name: data?.providers?.supplier.name || '',
        route: `/inventory/settings/suppliers/${data?.providers?.supplier.providerId as string}/general`,
        noLink: isEmpty(data?.providers?.supplier.providerId),
      }),
    },
    {
      label: 'fields.keywords',
      value: <ManufactureBand bands={data?.keywords || []} />,
    },
    {
      label: 'fields.visibility',
      value: visible,
    },
  ];
  return array;
};
