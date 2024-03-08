import React, { useMemo, memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useToggle } from '@dfl/hook-utils';
import ProductDetailOrganizationUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailOrganizationUpdateContainer';
import { renderNameLink } from 'modules/inventory/common/components/NameLink/NameLink';
import { isEmpty } from 'lodash';
import { OrganizationFormPaperActions } from 'modules/inventory/product/components/ProductGeneralOrganization/';
import { Table, TableCell, TableRow, Typography } from '@mui/material';
import KeywordsDisplay from './TagsSowComponent';
import { HandlerError } from '@dfl/mui-react-common';
import { mapGetOneErrors } from 'constants/errors';
import ProductGeneralOrganizationFormSkeleton from 'modules/inventory/product/components/ProductGeneralOrganizationForm/ProductGeneralOrganizationFormSkeleton';

type ProductInfoRowProps = {
  label: string;
  value: any;
};

const ProductInfoRow = ({ label, value }: ProductInfoRowProps) => (
  <Table>
    <TableRow>
      <TableCell>
        <Typography>{label}</Typography>
      </TableCell>
      <TableCell> {value}</TableCell>
    </TableRow>
  </Table>
);

const ProductGeneralOrganization = () => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, product } = useProductDetail();

  const productArray = useMemo(
    () => [
      {
        label: 'fields.category',
        value: renderNameLink({
          name: product?.category?.name as string,
          // @ts-ignore
          route: `/inventory/settings/categories/${product?.category?._id as string}/subcategories`,
          // @ts-ignore
          noLink: isEmpty(product?.category?._id),
        }),
      },
      {
        label: 'fields.supplier',
        value: renderNameLink({
          // @ts-ignore
          name: product?.providers?.supplier.name || '',
          // @ts-ignore
          route: `/inventory/settings/suppliers/${product?.providers?.supplier.providerId as string}/general`,
          // @ts-ignore
          noLink: isEmpty(product?.providers?.supplier.providerId),
        }),
      },
      {
        label: 'section.summary.organization.labelTags',
        value: <KeywordsDisplay words={product?.keywords || []} />,
      },
    ],
    [product],
  );

  if (isOpen) {
    return (
      <FormPaper
        nm
        actions={
          <OrganizationFormPaperActions
            label={t('section.summary.organization.title')}
            onToggle={onToggle}
            open={isOpen}
          />
        }
      >
        <ProductDetailOrganizationUpdateContainer
          initValue={{
            _id: product?._id,
            // @ts-ignore
            category: product?.category?._id,
            // @ts-ignore
            providers: product?.providers,
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
    <FormPaper
      nm
      actions={
        <OrganizationFormPaperActions
          label={t('section.summary.organization.title')}
          onToggle={onToggle}
          open={isOpen}
        />
      }
    >
      {isLoading && <ProductGeneralOrganizationFormSkeleton />}
      {error && <HandlerError error={error} mapError={mapGetOneErrors} />}
      {!isLoading &&
        !error &&
        productArray.map((item, index) => <ProductInfoRow key={index} label={t(item.label)} value={item.value} />)}
    </FormPaper>
  );
};

export default memo(ProductGeneralOrganization);
