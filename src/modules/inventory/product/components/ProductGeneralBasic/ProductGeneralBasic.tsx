import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import ProductDetailBasicUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailBasicUpdateContainer';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import { renderNameLink } from 'modules/inventory/common/components/NameLink/NameLink';
import { isEmpty } from 'lodash';
import { HtmlText } from 'components/HtmlText';
import { simpleColumns } from 'modules/common/constants/simple.columns';
import { Stack } from '@mui/material';
import BasicTableDoubleColumnHeadless from 'modules/common/components/BasicTableHeadless/BasicTableDoubleColumnHeadless';

const ProductGeneralBasic = () => {
  const { t } = useTranslation('product');
  const { isLoading, error, product, onOneClose, onOneToggle, state } = useProductDetail();
  const open = useMemo(() => state?.form_4 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_4'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_4'), [onOneClose]);

  if (open) {
    return (
      <FormPaper nm title={t('fields.generalData')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
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
          onClose={handleClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper nm title={t('fields.generalData')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
      <BasicTableDoubleColumnHeadless
        columns={simpleColumns}
        doubleColumnData={getDoubleColumnArray(product as IProduct) || []}
        responsiveData={getArray(product as IProduct) || []}
        isLoading={isLoading}
        error={error}
      />
      <Stack mt={2} gap={1}>
        <HtmlText text={product?.description || ''} />
      </Stack>
    </FormPaper>
  );
};

export default memo(ProductGeneralBasic);

const getArray = (data: IProduct): any[] => {
  const { name, brand, code, barcode, referenceCode, category } = data || {};

  const array = [
    { label: 'fields.name', value: name },
    { label: 'fields.brand', value: brand },
    { label: 'fields.code', value: code },
    { label: 'fields.barcode', value: barcode },
    { label: 'fields.referenceCode', value: referenceCode },
    {
      label: 'fields.category',
      value: renderNameLink({
        name: category?.name,
        route: `/inventory/settings/categories/${category?._id}/subcategories`,
        noLink: isEmpty(category?._id),
      }),
    },
  ];
  return array;
};

const getDoubleColumnArray = (data: IProduct): any[] => {
  const { name, brand, code, barcode, referenceCode, category } = data || {};

  const array = [
    { label: 'fields.name', value: name, label2: 'fields.brand', value2: brand },
    { label: 'fields.code', value: code, label2: 'fields.barcode', value2: barcode },
    {
      label: 'fields.referenceCode',
      value: referenceCode,
      label2: 'fields.category',
      value2: renderNameLink({
        name: category?.name,
        route: `/inventory/settings/categories/${category?._id}/subcategories`,
        noLink: isEmpty(category?._id),
      }),
    },
  ];
  return array;
};
