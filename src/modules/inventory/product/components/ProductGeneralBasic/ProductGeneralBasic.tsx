import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { simpleColumns } from 'modules/inventory/warehouse/constants/store.simple.columns';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { useToggle } from '@dfl/hook-utils';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import ProductDetailBasicUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailBasicUpdateContainer';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import { renderNameLink } from 'modules/inventory/common/components/NameLink/NameLink';
import { isEmpty } from 'lodash';

const ProductGeneralBasic = () => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, product } = useProductDetail();

  if (isOpen) {
    return (
      <FormPaper nm title={t('fields.generaldata')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
        <ProductDetailBasicUpdateContainer
          initValue={{
            _id: product?._id,
            name: product?.name,
            brand: product?.brand,
            code: product?.code,
            barcode: product?.barcode,
            referenceCode: product?.referenceCode,
            description: product?.description,
            category: product?.category?._id,
            keywords: product?.keywords,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={onClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper nm title={t('fields.generaldata')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
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

const getTextFromHTML = (htmlString: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  const elemento = doc.body.firstElementChild;
  return elemento ? elemento.textContent : '';
};

const getArray = (data: IProduct): any[] => {
  const { name, brand, code, barcode, referenceCode, description, category } = data || {};
  const descriptionText = getTextFromHTML(description as string);
  const array = [
    { label: 'fields.name', value: name },
    { label: 'fields.brand', value: brand },
    { label: 'fields.code', value: code },
    { label: 'fields.barcode', value: barcode },
    { label: 'fields.referenceCode', value: referenceCode },
    { label: 'fields.description', value: descriptionText },
    {
      label: 'fields.category',
      value: renderNameLink({
        name: category?.name,
        // @ts-ignore
        route: `/inventory/settings/categories/${category?._id}/subcategories`,
        // @ts-ignore
        noLink: isEmpty(category?._id),
      }),
    },
  ];
  return array;
};
