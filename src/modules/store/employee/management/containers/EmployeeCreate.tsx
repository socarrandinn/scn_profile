import { memo, useCallback } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { PageHeader } from 'components/libs/PageHeader';
import { useTranslation } from 'react-i18next';
import { CenterPageLayout } from 'layouts/index';
import { Form, HandlerError, LoadingButton, FormTextField } from '@dfl/mui-react-common';
import { Button, Stack, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FormPaper } from 'modules/common/components/FormPaper';
import { mapGetOneErrors } from 'modules/store/employee/management/constants/errors';
import useProductCreateForm from 'modules/store/employee/management/hooks/useProductCreateForm';
import GeneralInfoForm from 'modules/store/employee/management/containers/ProductSections/GeneralInfoForm';
import DnDImageForm from 'modules/store/employee/management/containers/ProductSections/DnDImageForm';
import EstimatedTimeForm from 'modules/store/employee/management/containers/ProductSections/EstimatedTimeForm';
import OfferForm from 'modules/store/employee/management/containers/ProductSections/OfferForm';
import PricesForm from 'modules/store/employee/management/containers/ProductSections/PricesForm';
import PriorityForm from 'modules/store/employee/management/containers/ProductSections/PriorityForm';
import ProductOrganizationForm from 'modules/store/employee/management/containers/ProductSections/ProductOrganizationForm';
import ProductStatusForm from 'modules/store/employee/management/containers/ProductSections/ProductStatusForm';
import RelatedProductForm from 'modules/store/employee/management/containers/ProductSections/RelatedProductForm';
import SearchPreviewForm from 'modules/store/employee/management/containers/ProductSections/SearchPreviewForm';
import ShippingInfoForm from 'modules/store/employee/management/containers/ProductSections/ShippingInfoForm';

const mt = {
  xs: 2,
  md: 2,
  xl: 4,
};

const EmployeeCreate = () => {
  const { t } = useTranslation('product');
  const navigate = useNavigate();
  const handleCancel = useCallback(() => {
    navigate('/store/product');
  }, [navigate]);

  const { control, onSubmit, isLoading, error, watch, values, formState } = useProductCreateForm(handleCancel);

  return (
    <CenterPageLayout maxWidth={1230}>
      <HandlerError error={error} mapErrors={mapGetOneErrors} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'large'} id='product-form' watch={watch}>
        <PageHeader title={t('create')}>
          <Stack direction={'row'} spacing={2}>
            <Button variant={'outlined'} disabled={isLoading}>
              {t('common:seeReport')}
            </Button>
            <LoadingButton variant={'contained'} loading={isLoading} type={'submit'} form='product-form'>
              {t('common:save')}
            </LoadingButton>
            <Button variant={'outlined'} disabled={isLoading} onClick={handleCancel}>
              {' '}
              {t('common:cancel')}
            </Button>
          </Stack>
        </PageHeader>
        <DetailLayout mt={mt} mb={4}>
          <DetailContent ghost sx={{ order: { xs: 2, md: 1 } }}>
            <FormPaper nm title={t('section.general.title')}>
              <GeneralInfoForm />
            </FormPaper>
            <FormPaper title={t('section.media.title')}>
              <DnDImageForm />
            </FormPaper>
            <FormPaper title={t('section.deliveryTime.title')}>
              <EstimatedTimeForm />
            </FormPaper>
            <FormPaper title={t('section.prices.title')}>
              <PricesForm />
            </FormPaper>
            <FormPaper title={t('section.offer.title')}>
              <OfferForm control={control} />
            </FormPaper>
            <FormPaper title={t('section.shipping.title')}>
              <ShippingInfoForm control={control}/>
            </FormPaper>
            <FormPaper title={t('section.searchPreview.title')}>
              <SearchPreviewForm />
            </FormPaper>
          </DetailContent>

          <DetailSummary ghost width={{ md: 320, lg: 320, xl: 400 }} sx={{ order: { xs: 1, md: 2 } }}>
           <FormPaper nm title={t('section.summary.status.title')}>
              <ProductStatusForm />
            </FormPaper>
            {/*<FormPaper title={t('section.summary.organization.title')}>
              <ProductOrganizationForm />
            </FormPaper>*/}
            <FormPaper title={t('section.summary.priority.title')}>
              <PriorityForm control={control}/>
            </FormPaper>
            <FormPaper title={t('section.summary.relatedProducts.title')}>
              <RelatedProductForm />
            </FormPaper>
          </DetailSummary>
        </DetailLayout>
      </Form>
    </CenterPageLayout>
  );
};

export default memo(EmployeeCreate);
