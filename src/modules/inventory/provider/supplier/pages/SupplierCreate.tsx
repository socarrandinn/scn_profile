import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { CenterPageLayout } from 'layouts/index';
import { PageHeader } from 'components/libs/PageHeader';
import { Button, Grid, Stack } from '@mui/material';
import { Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import useProductsCreateForm from 'modules/inventory/provider/supplier/hooks/useProductsCreateForm';
import CommissionAndCostProduct from 'modules/inventory/provider/common/components/FormSections/ComissionForm/CommissionForm';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';
import { GeneralInfoFrom } from 'modules/inventory/provider/common/components';
import { AddressInfoForm, ContactsInfoForm } from 'modules/common/components/FormSections';
import ImageInfoFrom from 'modules/inventory/provider/common/components/FormSections/ImageInfoFrom/ImageInfoFrom';
import { FormProductKeyworsField } from 'modules/inventory/product/components/ProductKeywordsImput';

const mt = {
  xs: 2,
  md: 2,
  xl: 4,
};

type ProviderProductsCreateProps = {
  title?: string;
  initValue?: ISupplier;
};
const SupplierCreate = ({ title = 'create', initValue }: ProviderProductsCreateProps) => {
  const { t } = useTranslation('supplier');
  const navigate = useNavigate();
  const handleCancel = useCallback(() => {
    navigate('/inventory/settings/suppliers');
  }, [navigate]);

  const { control, onSubmit, isLoading, error, watch } = useProductsCreateForm(handleCancel, initValue);

  return (
    <CenterPageLayout maxWidth={1230}>
      <HandlerError error={error} />
      <Form
        onSubmit={onSubmit}
        control={control}
        isLoading={isLoading}
        size={'large'}
        id={'supplier-form'}
        watch={watch}
      >
        <PageHeader title={t(title)}>
          <Stack direction={'row'} spacing={2}>
            <LoadingButton variant={'contained'} loading={isLoading} type={'submit'} form='supplier-form'>
              {t('common:save')}
            </LoadingButton>
            <Button variant={'outlined'} disabled={isLoading} onClick={handleCancel}>
              {t('common:cancel')}
            </Button>
          </Stack>
        </PageHeader>
        <DetailLayout mt={mt} mb={4}>
          <DetailContent ghost>
            <GeneralInfoFrom />
            <AddressInfoForm hideZip />
            <ContactsInfoForm />
          </DetailContent>
          {/* ------------- SUMMARY ---------------- */}
          <DetailSummary
            ghost
            width={{
              md: 320,
              lg: 320,
              xl: 400,
            }}
          >
            <ImageInfoFrom>
              <Grid item xs={12} mt={1}>
                <FormProductKeyworsField name='keywords' label='section.summary.organization.labelTags' />
              </Grid>
            </ImageInfoFrom>

            <CommissionAndCostProduct />
          </DetailSummary>
        </DetailLayout>
      </Form>
    </CenterPageLayout>
  );
};

export default memo(SupplierCreate);
