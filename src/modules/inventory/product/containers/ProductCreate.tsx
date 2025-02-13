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
import ProductProviderForm from 'modules/inventory/product/containers/ProductFormSections/ProductProviderForm';
import EstimatedTimeForm from 'modules/inventory/product/containers/ProductFormSections/EstimatedTimeForm';
import ShippingInfoForm from 'modules/inventory/product/containers/ProductFormSections/ShippingInfoForm';
import ProductRulesForm from './ProductFormSections/ProductRulesForm';
import ProductOrganizationForm from './ProductFormSections/ProductOrganizationForm';
import { TagsFormContainer } from 'modules/inventory/settings/tags/containers/TagsFormContainer';
import { TAG_NAMES } from 'modules/inventory/settings/tags/interfaces';
import ButtonRefresh from 'modules/inventory/common/components/ButtonRefresh/ButtonRefresh';
import { TAGS_LIST_KEY } from 'modules/inventory/settings/tags/constants';

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

  const {
    control,
    onSubmit,
    isLoading,
    error,
    watch,
    values,
    handleLimitByOrder,
    addPlace,
    seoTitle,
    formState,
    setValue,
  } = useProductCreateForm(handleCancel);

  return (
    <CenterPageLayout maxWidth={1230}>
      <HandlerError error={error} mapErrors={mapGetOneErrors} />
      <Form
        onSubmit={onSubmit}
        control={control}
        isLoading={isLoading}
        size={'large'}
        id='product-form'
        watch={watch}
        formState={formState}
        noValidate
      >
        <PageHeader title={t('create')}>
          <Stack direction={'row'} spacing={2}>
            <Button variant={'grey'} disabled={isLoading} onClick={handleCancel}>
              {t('common:cancel')}
            </Button>
            <LoadingButton variant={'contained'} loading={isLoading} type={'submit'} form='product-form'>
              {t('common:save')}
            </LoadingButton>
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
              <PricesForm priceDetails={values.priceDetails} setValue={setValue} />
            </FormPaper>
            <FormPaper title={t('section.deliveryTime.title')}>
              <EstimatedTimeForm />
            </FormPaper>
            <FormPaper title={t('section.shippingInfo.title')}>
              <ShippingInfoForm />
            </FormPaper>
            <FormPaper title={t('section.shippingInfo.rules')}>
              <ProductRulesForm handleLimitByOrder={handleLimitByOrder} addPlace={addPlace} />
            </FormPaper>
          </DetailContent>
          {/* ------------- SUMMARY ---------------- */}
          <DetailSummary ghost width={{ md: 320, lg: 320, xl: 400 }} sx={{ order: { xs: 1, md: 2 } }}>
            <FormPaper nm title={t('section.summary.providers.title')}>
              <ProductProviderForm />
            </FormPaper>
            <FormPaper title={t('section.summary.organization.title')}>
              <ProductOrganizationForm />
            </FormPaper>
            <FormPaper
              title={t('section.summary.tags.title')}
              actions={<ButtonRefresh queryKey={[[TAGS_LIST_KEY]]} type='iconButton' />}
            >
              <TagsFormContainer control={control} name={TAG_NAMES.PRODUCT} ruleRequired isLoading={isLoading} />
            </FormPaper>
            <FormPaper title={t('section.summary.score.title')}>
              <ScoreForm />
            </FormPaper>
            <FormPaper title={t('section.searchPreview.title')}>
              <SeoForm seoTitle={seoTitle} isEdit={false} />
            </FormPaper>
          </DetailSummary>
        </DetailLayout>
      </Form>
    </CenterPageLayout>
  );
};

export default memo(ProductCreate);
