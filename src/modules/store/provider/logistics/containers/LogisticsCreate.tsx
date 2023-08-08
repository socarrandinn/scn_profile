import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import useLogisticsCreateForm from 'modules/store/provider/logistics/hooks/useLogisticsCreateForm';
import { CenterPageLayout } from 'layouts/index';
import { PageHeader } from 'components/libs/PageHeader';
import { Button, Stack } from '@mui/material';
import { Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { FormPaper } from 'modules/common/components/FormPaper';
import AddressInfoForm from 'modules/common/components/AddressInfoFrom/AddressInfoForm';
import ContactsInfoForm from 'modules/common/components/ContactInfoFrom/ContactsInfoForm';
import GeneralInfoLogisticsFrom from 'modules/store/provider/logistics/components/GeneralInfoFrom/GeneralInfoLogisticsFrom';
import ComissionAndCost from 'modules/store/provider/logistics/components/ComissionAndCost/ComissionAndCost';
import { ILogistics } from 'modules/store/provider/logistics/interfaces';

const mt = {
  xs: 2,
  md: 2,
  xl: 4
};

type LogisticsCreateProps = {
  title?: string;
  initValue?: ILogistics;
};
const LogisticsCreate = ({ title = 'create', initValue }: LogisticsCreateProps) => {
  const { t } = useTranslation('logistics');
  const navigate = useNavigate();
  const handleCancel = useCallback(() => {
    navigate('/provider/logistics');
  }, [navigate]);

  const {
    control,
    onSubmit,
    isLoading,
    error,
    watch,
  } = useLogisticsCreateForm(handleCancel, initValue);

  return (
    <CenterPageLayout maxWidth={1230}>
      <HandlerError error={error} />
      <Form
        onSubmit={onSubmit}
        control={control}
        isLoading={isLoading}
        size={'large'}
        id={'logistics-form'}
        watch={watch}
      >
        <PageHeader title={t(title)}>
          <Stack direction={'row'} spacing={2}>
            <LoadingButton variant={'contained'} loading={isLoading} type={'submit'} form="logistics-form">
              {t('common:save')}
            </LoadingButton>
            <Button variant={'outlined'} disabled={isLoading} onClick={handleCancel}>
              {' '}
              {t('common:cancel')}
            </Button>
          </Stack>
        </PageHeader>
        <DetailLayout mt={mt} mb={4}>
          <DetailContent ghost sx={{
            order: {
              xs: 2,
              md: 1
            }
          }}>
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
          <DetailSummary ghost width={{
            md: 320,
            lg: 320,
            xl: 400
          }} sx={{
            order: {
              xs: 1,
              md: 2
            }
          }}>
            <FormPaper nm title={t('section.commissionAndCost.title')}>
              <ComissionAndCost />
            </FormPaper>
          </DetailSummary>
        </DetailLayout>
      </Form>
    </CenterPageLayout>
  );
};

export default memo(LogisticsCreate);
