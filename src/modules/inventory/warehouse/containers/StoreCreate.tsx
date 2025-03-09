import { memo, useCallback, useMemo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { PageHeader } from 'components/libs/PageHeader';
import { useTranslation } from 'react-i18next';
import { CenterPageLayout } from 'layouts/index';
import { Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { Button, Stack } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useStoreCreateForm, { initValues } from 'modules/inventory/warehouse/hooks/useStoreCreateForm';
import { GeneralInfoForm, LogisticForm } from 'modules/inventory/warehouse/components/FormSections';
import { ContactsInfoForm } from 'modules/common/components/FormSections';
import { useLocation } from 'react-router';
import { logisticSearchParam } from 'modules/inventory/warehouse/constants';
import { FormPaper } from 'modules/common/components/FormPaper';
import AddressMapContent from 'modules/common/components/FormSections/AddressInfoFrom/AddressMapContent';
import { ADDRESS_COUNTRY_CODE } from 'settings/address-location';

const mt = {
  xs: 2,
  md: 2,
  xl: 4,
};

const StoreCreate = () => {
  const { t } = useTranslation('warehouse');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const handleCancel = useCallback(() => {
    navigate(pathname.substring(0, pathname.lastIndexOf('/')));
  }, [navigate, pathname]);

  const initialValues = useMemo(
    () => ({ ...initValues, logistic: searchParams?.get(logisticSearchParam) || null }),
    [searchParams],
  );

  const { control, onSubmit, isLoading, error, watch, setValue, clearErrors } = useStoreCreateForm(
    ADDRESS_COUNTRY_CODE,
    handleCancel,
    initialValues,
  );

  return (
    <CenterPageLayout maxWidth={1230}>
      <HandlerError error={error} />
      <Form
        onSubmit={onSubmit}
        control={control}
        isLoading={isLoading}
        size={'large'}
        id={'warehouse-form'}
        watch={watch}
        noValidate
        setValue={setValue}
      >
        <PageHeader title={t('create')}>
          <Stack direction={'row'} spacing={2}>
            <Button variant={'grey'} disabled={isLoading} onClick={handleCancel}>
              {t('common:cancel')}
            </Button>
            <LoadingButton variant={'contained'} loading={isLoading} type={'submit'} form='warehouse-form'>
              {t('common:save')}
            </LoadingButton>
          </Stack>
        </PageHeader>
        <DetailLayout mt={mt} mb={4}>
          {/* ------------- CENTER ---------------- */}
          <DetailContent ghost>
            <GeneralInfoForm />
            <FormPaper title={t('common:address')}>
              <AddressMapContent control={control} countryCode={ADDRESS_COUNTRY_CODE} clearErrors={clearErrors} />
            </FormPaper>
            <ContactsInfoForm />
          </DetailContent>
          {/* ------------- SUMMARY ---------------- */}
          <DetailSummary ghost width={{ md: 320, lg: 320, xl: 400 }}>
            <LogisticForm disabled={!!searchParams?.get(logisticSearchParam)} />
            {/* <DeliveryRegionForm /> */}
            {/* <TimeForm/> */}
          </DetailSummary>
        </DetailLayout>
      </Form>
    </CenterPageLayout>
  );
};

export default memo(StoreCreate);
