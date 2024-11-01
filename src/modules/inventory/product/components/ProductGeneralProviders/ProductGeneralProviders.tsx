import { useMemo, memo, useCallback } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
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
  const { isLoading, error, product, onOneClose, onOneToggle, state } = useProductDetail();
  const open = useMemo(() => state?.form_1 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_1'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_1'), [onOneClose]);

  const productArray = useMemo(
    () => [
      {
        label: 'fields.supplier',
        value: renderNameLink({
          name: product?.providers?.supplier.name || '',
          route: `/inventory/settings/suppliers/${product?.providers?.supplier.providerId as string}/general`,
          noLink: isEmpty(product?.providers?.supplier.providerId),
        }),
      },
      {
        label: 'fields.manufacturer',
        value: renderNameLink({
          name: product?.providers?.manufacturer?.name || '',
          route: `/inventory/settings/manufactures/${product?.providers?.manufacturer?.providerId as string}/general`,
          noLink: isEmpty(product?.providers?.manufacturer?.providerId),
        }),
      },
    ],
    [product],
  );

  if (open) {
    return (
      <FormPaper
        nm
        actions={
          <ProvidersFormPaperActions
            label={t('section.summary.providers.title')}
            onToggle={handleToggle}
            open={open}
          />
        }
      >
        <ProductDetailOrganizationUpdateContainer
          initValue={{
            _id: product?._id,
            providers: {
              // @ts-ignore
              supplier: product?.providers?.supplier?.providerId,
              manufacturer: product?.providers?.manufacturer?.providerId
            }
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={handleClose}
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
          onToggle={handleToggle}
          open={open}
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
