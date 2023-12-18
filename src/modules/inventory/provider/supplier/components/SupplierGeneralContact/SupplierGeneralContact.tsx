import { memo } from 'react';
import { ProviderProductsDetail } from '../../context/ProviderProductDetail';
import { DetailStack } from '@dfl/mui-react-common';
import { SUPPLIER_CONTACT_DETAILS_SUMMARY } from '../../constants/supplier.contact.details.summary';
import SupplierGeneralContactSkeleton from './SupplierGeneralContactSkeleton';
import { Grid } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import SupplierDetailContactUpdateContainer from '../../containers/SupplierDetailContactUpdateContainer';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';

const SupplierGeneralContact = () => {
  const { t } = useTranslation('provider');
  const { isLoading, error, providerProducts } = ProviderProductsDetail();
  const { isOpen, onClose, onToggle } = useToggle(false);

  if (isLoading || error) return <SupplierGeneralContactSkeleton />;

  if (isOpen) {
    return (
      <FormPaper title={t('fields.address.title')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
        <SupplierDetailContactUpdateContainer
          onClose={onClose}
          initValue={{
            _id: providerProducts?._id,
            contacts: providerProducts?.contacts,
          }}
          dataError={error}
          loadingInitData={isLoading}
        />
      </FormPaper>
    )
  }
  return (
    <FormPaper title={t('fields.address.address')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
      <Grid container spacing={{ xs: 1, md: 3 }}>
        <Grid item xs={12} md={6}>
          <DetailStack details={SUPPLIER_CONTACT_DETAILS_SUMMARY} data={providerProducts} />
        </Grid>
      </Grid>
    </FormPaper>
  );
};

export default memo(SupplierGeneralContact);
