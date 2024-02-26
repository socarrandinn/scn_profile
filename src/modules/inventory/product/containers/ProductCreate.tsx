import { memo, useCallback } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { PageHeader } from 'components/libs/PageHeader';
import { useTranslation } from 'react-i18next';
import { CenterPageLayout } from 'layouts/index';
import { Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FormPaper } from 'modules/common/components/FormPaper';
import { mapGetOneErrors } from 'modules/inventory/product/constants/errors';
import useProductCreateForm from 'modules/inventory/product/hooks/useProductCreateForm';
import GeneralInfoForm from 'modules/inventory/product/containers/ProductFormSections/GeneralInfoForm';
import MediaForm from 'modules/inventory/product/containers/ProductFormSections/MediaForm';
import PricesForm from 'modules/inventory/product/containers/ProductFormSections/PricesForm';
import ScoreForm from 'modules/inventory/product/containers/ProductFormSections/ScoreForm';
import SeoForm from 'modules/inventory/product/containers/ProductFormSections/SeoForm';
import ProductOrganizationForm from 'modules/inventory/product/containers/ProductFormSections/ProductOrganizationForm';
import EstimatedTimeForm from 'modules/inventory/product/containers/ProductFormSections/EstimatedTimeForm';
import CodeProviderForm from 'modules/inventory/product/containers/ProductFormSections/CodeProviderForm';
import ProductOfferForm from 'modules/inventory/product/containers/ProductFormSections/ProductOfferForm';
import ShippingInfoForm from 'modules/inventory/product/containers/ProductFormSections/ShippingInfoForm';
import ProductPerUnitsFormCreateContainer from 'modules/inventory/product/containers/ProductTabs/ProductPerUnitsFormCreateContainer';

const mt = {
  xs: 2,
  md: 2,
  xl: 4,
};

const ProductCreate = () => {
  const { t } = useTranslation('product');
  const navigate = useNavigate();
  const handleCancel = useCallback(() => {
    navigate('/inventory/products');
  }, [navigate]);

  const { control, onSubmit, isLoading, error, watch, values, resetField } = useProductCreateForm(handleCancel);
  return (
    <CenterPageLayout maxWidth={1230}>
      <HandlerError error={error} mapErrors={mapGetOneErrors} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'large'} id='product-form' watch={watch}>
        <PageHeader title={t('create')}>
          <Stack direction={'row'} spacing={2}>
            <LoadingButton variant={'contained'} loading={isLoading} type={'submit'} form='product-form'>
              {t('common:save')}
            </LoadingButton>
            <Button variant={'outlined'} disabled={isLoading} onClick={handleCancel}>
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
              <MediaForm />
            </FormPaper>
            <FormPaper title={t('section.prices.title')}>
              <PricesForm priceDetails={values.priceDetails} />
            </FormPaper>
            <FormPaper title={t('section.deliveryTime.title')}>
              <EstimatedTimeForm />
            </FormPaper>
            <FormPaper title={t('section.providerCode.title')}>
              <CodeProviderForm />
            </FormPaper>
            <ProductPerUnitsFormCreateContainer typeOfMeasure={''} resetField={resetField} />
            <FormPaper title={t('section.offer.title')}>
              <ProductOfferForm />
            </FormPaper>
            <FormPaper title={t('section.shippingInfo.title')}>
              <ShippingInfoForm />
            </FormPaper>
            <FormPaper title={t('section.searchPreview.title')}>
              <SeoForm />
            </FormPaper>
          </DetailContent>
          {/* ------------- SUMMARY ---------------- */}
          <DetailSummary ghost width={{ md: 320, lg: 320, xl: 400 }} sx={{ order: { xs: 1, md: 2 } }}>
            <FormPaper nm title={t('section.summary.organization.title')}>
              <ProductOrganizationForm />
            </FormPaper>
            <FormPaper title={t('section.summary.score.title')}>
              <ScoreForm />
            </FormPaper>
          </DetailSummary>
        </DetailLayout>
      </Form>
    </CenterPageLayout>
  );
};

export default memo(ProductCreate);
