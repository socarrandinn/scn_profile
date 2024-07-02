import { useMemo, memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useToggle } from '@dfl/hook-utils';
import ProductDetailOrganizationUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailOrganizationUpdateContainer';
import { renderNameLink } from 'modules/inventory/common/components/NameLink/NameLink';
import { isEmpty } from 'lodash';
import { Table, TableCell, TableRow, Typography } from '@mui/material';
import { HandlerError } from '@dfl/mui-react-common';
import { mapGetOneErrors } from 'constants/errors';
import ProductGeneralOrganizationFormSkeleton from 'modules/inventory/product/components/ProductGeneralOrganizationForm/ProductGeneralOrganizationFormSkeleton';
import ProvidersFormPaperActions from './ProvidersFormPaperActions';

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
        label: 'fields.manufacturer',
        value: renderNameLink({
          // @ts-ignore
          name: product?.providers?.manufacturer?.name || '',
          // @ts-ignore
          route: `/inventory/settings/manufactures/${product?.providers?.manufacturer?.providerId as string}/general`,
          // @ts-ignore
          noLink: isEmpty(product?.providers?.manufacturer?.providerId),
        }),
      },
    ],
    [product],
  );

  if (isOpen) {
    return (
      <FormPaper
        nm
        actions={
          <ProvidersFormPaperActions
            label={t('section.summary.providers.title')}
            onToggle={onToggle}
            open={isOpen}
          />
        }
      >
        <ProductDetailOrganizationUpdateContainer
          initValue={{
            _id: product?._id,
            // @ts-ignore
            providers: product?.providers,
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
        <ProvidersFormPaperActions
          label={t('section.summary.providers.title')}
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
