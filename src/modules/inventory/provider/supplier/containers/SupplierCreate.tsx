import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { CenterPageLayout } from 'layouts/index';
import { PageHeader } from 'components/libs/PageHeader';
import { Button, Stack } from '@mui/material';
import { Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { FormPaper } from 'modules/common/components/FormPaper';
import AddressInfoForm from 'modules/common/components/AddressInfoFrom/AddressInfoForm';
import ContactsInfoForm from 'modules/common/components/ContactInfoFrom/ContactsInfoForm';
import GeneralInfoLogisticsFrom from 'modules/inventory/provider/logistics/components/GeneralInfoFrom/GeneralInfoLogisticsFrom';
import useProductsCreateForm from 'modules/inventory/provider/supplier/hooks/useProductsCreateForm';
import CommissionAndCostProduct from 'modules/inventory/provider/supplier/components/ComissionAndCost/CommissionAndCostProduct';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';

const mt = {
  xs: 2,
  md: 2,
  xl: 4,
};

type ProviderProductsCreateProps = {
  title?: string;
  initValue?: ISupplier;
};
const ProductsCreate = ({ title = 'create', initValue }: ProviderProductsCreateProps) => {
  const { t } = useTranslation('products');
  const navigate = useNavigate();
  const handleCancel = useCallback(() => {
    navigate('/provider/products');
  }, [navigate]);

  const { control, onSubmit, isLoading, error, watch } = useProductsCreateForm(
    handleCancel,
    initValue,
  );

  return (
    <CenterPageLayout maxWidth={1230}>
      <HandlerError error={error} />
      <Form
        onSubmit={onSubmit}
        control={control}
        isLoading={isLoading}
        size={'large'}
        id={'products-form'}
        watch={watch}
      >
        <PageHeader title={t(title)}>
          <Stack direction={'row'} spacing={2}>
            <LoadingButton variant={'contained'} loading={isLoading} type={'submit'} form='products-form'>
              {t('common:save')}
            </LoadingButton>
            <Button variant={'outlined'} disabled={isLoading} onClick={handleCancel}>
              {' '}
              {t('common:cancel')}
            </Button>
          </Stack>
        </PageHeader>
        <DetailLayout mt={mt} mb={4}>
          <DetailContent
            ghost
            sx={{
              order: {
                xs: 2,
                md: 1,
              },
            }}
          >
            <FormPaper nm title={t('section.general.title')}>
              <GeneralInfoLogisticsFrom />
            </FormPaper>
            <FormPaper title={t('section.address.title')}>
              <AddressInfoForm />
            </FormPaper>
            <FormPaper title={t('section.contact.title')}>
              <ContactsInfoForm />
            </FormPaper>
          </DetailContent>
          <DetailSummary
            ghost
            width={{
              md: 320,
              lg: 320,
              xl: 400,
            }}
            sx={{
              order: {
                xs: 1,
                md: 2,
              },
            }}
          >
            <FormPaper nm title={t('section.commissionAndCost.title')}>
              <CommissionAndCostProduct />
            </FormPaper>
          </DetailSummary>
        </DetailLayout>
      </Form>
    </CenterPageLayout>
  );
};

export default memo(ProductsCreate);
