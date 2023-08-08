import { memo, useCallback } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { PageHeader } from 'components/libs/PageHeader';
import { useTranslation } from 'react-i18next';
import { CenterPageLayout } from 'layouts/index';
import { Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FormPaper } from 'modules/common/components/FormPaper';
import { mapGetOneErrors } from 'modules/store/product/constants/errors';
import useProductCreateForm from 'modules/store/product/hooks/useProductCreateForm';
import GeneralInfoForm from 'modules/store/product/containers/ProductFormSections/GeneralInfoForm';
import MediaForm from 'modules/store/product/containers/ProductFormSections/MediaForm';
import EstimatedTimeForm from 'modules/store/product/containers/ProductFormSections/EstimatedTimeForm';
import OfferForm from 'modules/store/product/containers/ProductFormSections/OfferForm';
import PricesForm from 'modules/store/product/containers/ProductFormSections/PricesForm';
import PriorityForm from 'modules/store/product/containers/ProductFormSections/PriorityForm';
import ProductStatusForm from 'modules/store/product/containers/ProductFormSections/ProductStatusForm';
import RelatedProductForm from 'modules/store/product/containers/ProductFormSections/RelatedProductForm';
import SearchPreviewForm from 'modules/store/product/containers/ProductFormSections/SearchPreviewForm';
import ShippingInfoForm from 'modules/store/product/containers/ProductFormSections/ShippingInfoForm';

const mt = {
  xs: 2,
  md: 2,
  xl: 4,
};

const ProductCreate = () => {
  const { t } = useTranslation('product');
  const navigate = useNavigate();
  const handleCancel = useCallback(() => {
    navigate('/store/product');
  }, [navigate]);

  const { control, onSubmit, isLoading, error, watch } = useProductCreateForm(handleCancel);

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
              <ShippingInfoForm control={control} />
            </FormPaper>
            <FormPaper title={t('section.searchPreview.title')}>
              <SearchPreviewForm />
            </FormPaper>
          </DetailContent>

          <DetailSummary ghost width={{ md: 320, lg: 320, xl: 400 }} sx={{ order: { xs: 1, md: 2 } }}>
            <FormPaper nm title={t('section.summary.status.title')}>
              <ProductStatusForm />
            </FormPaper>
            {/* <FormPaper title={t('section.summary.organization.title')}>
              <ProductOrganizationForm />
            </FormPaper> */}
            <FormPaper title={t('section.summary.priority.title')}>
              <PriorityForm control={control} />
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

export default memo(ProductCreate);
