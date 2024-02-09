import { memo, useCallback } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { PageHeader } from 'components/libs/PageHeader';
import { useTranslation } from 'react-i18next';
import { CenterPageLayout } from 'layouts/index';
import { Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useStoreCreateForm from 'modules/inventory/store/hooks/useStoreCreateForm';
import { DeliveryRegionForm, GeneralInfoForm, LogisticForm } from 'modules/inventory/store/components/FormSections';
import { AddressInfoForm, ContactsInfoForm } from 'modules/common/components/FormSections';
import TimeForm from '../components/FormSections/TimeForm';

const mt = {
  xs: 2,
  md: 2,
  xl: 4,
};

const EmployeeCreate = () => {
  const { t } = useTranslation('store');
  const navigate = useNavigate();

  const handleCancel = useCallback(() => {
    navigate('/inventory/stores');
  }, [navigate]);

  const { control, onSubmit, isLoading, error, watch } = useStoreCreateForm(handleCancel);

  return (
        <CenterPageLayout maxWidth={1230}>
            <HandlerError
                error={error}
            />
            <Form
                onSubmit={onSubmit}
                control={control}
                isLoading={isLoading}
                size={'large'}
                id={'employee-form'}
                watch={watch}
            >
                <PageHeader title={t('create')}>
                    <Stack direction={'row'} spacing={2}>
                        <LoadingButton variant={'contained'} loading={isLoading} type={'submit'} form='employee-form'>
                            {t('common:save')}
                        </LoadingButton>
                        <Button variant={'outlined'} disabled={isLoading} onClick={handleCancel}>
                            {' '}
                            {t('common:cancel')}
                        </Button>
                    </Stack>
                </PageHeader>
                <DetailLayout mt={mt} mb={4}>
                    {/* ------------- CENTER ---------------- */}
                    <DetailContent ghost>
                        <GeneralInfoForm/>
                        <AddressInfoForm hideZip/>
                        <ContactsInfoForm/>
                    </DetailContent>
                    {/* ------------- SUMMARY ---------------- */}
                    <DetailSummary ghost width={{ md: 320, lg: 320, xl: 400 }}>
                        <LogisticForm/>
                        <DeliveryRegionForm/>
                        <TimeForm/>
                    </DetailSummary>
                </DetailLayout>
            </Form>
        </CenterPageLayout>
  );
};

export default memo(EmployeeCreate);
