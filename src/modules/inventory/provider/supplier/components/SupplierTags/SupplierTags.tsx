import { useMemo, memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import { OrganizationFormPaperActions } from 'modules/inventory/product/components/ProductGeneralOrganization/';
import { Table, TableCell, TableRow, Typography } from '@mui/material';
import { HandlerError } from '@dfl/mui-react-common';
import { mapGetOneErrors } from 'constants/errors';
import ProductGeneralOrganizationFormSkeleton from 'modules/inventory/product/components/ProductGeneralOrganizationForm/ProductGeneralOrganizationFormSkeleton';
import KeywordsDisplay from 'modules/inventory/product/components/ProductGeneralOrganization/TagsSowComponent';
import { useProviderProductsDetail } from '../../context/ProviderProductDetail';
import ProductDetailTagsUpdateContainer from '../../containers/ProductDetailTagsUpdateContainer';

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

const SupplierTags = () => {
  const { t } = useTranslation('supplier');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, providerProducts } = useProviderProductsDetail();

  const productArray = useMemo(
    () => [
      {
        label: 'section.tags.title',
        value: <KeywordsDisplay words={providerProducts?.keywords || []} />,
      },
    ],
    [providerProducts],
  );

  if (isOpen) {
    return (
      <FormPaper
        nm
        actions={
          <OrganizationFormPaperActions
            label={t('section.tags.title')}
            onToggle={onToggle}
            open={isOpen}
          />
        }
      >
        <ProductDetailTagsUpdateContainer
          initValue={{
            _id: providerProducts?._id,
            // @ts-ignore
            keywords: providerProducts?.keywords,
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
          label={t('section.tags.title')}
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

export default memo(SupplierTags);
