import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';

import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';
import { PageHeader } from 'components/libs/PageHeader';
import { FormPaper } from 'modules/common/components/FormPaper';
import { CenterPageLayout } from 'layouts/index';
import useLogisticsCreateForm from 'modules/inventory/provider/logistics/hooks/useLogisticsCreateForm';
import AddressInfoForm from 'modules/common/components/FormSections/AddressInfoFrom/AddressInfoForm';
import ContactsInfoForm from 'modules/common/components/FormSections/ContactInfoFrom/ContactsInfoForm';
import GeneralInfoLogisticsFrom
  from 'modules/inventory/provider/common/components/FormSections/GeneralInfoFrom/GeneralInfoFrom';
import CostForm from 'modules/inventory/provider/logistics/components/ComissionAndCost/ComissionAndCost';

const mt = {
  xs: 2,
  md: 2,
  xl: 4,
};

type LogisticsCreateProps = {
  title?: string;
  initValue?: ILogistics;
};
const LogisticsCreate = ({ title = 'create', initValue }: LogisticsCreateProps) => {
  const { t } = useTranslation('logistics');
  const navigate = useNavigate();
  const handleCancel = useCallback(() => {
    navigate('/inventory/settings/logistics');
  }, [navigate]);

  const { control, onSubmit, isLoading, error, watch } = useLogisticsCreateForm(handleCancel, initValue);

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
            <LoadingButton variant={'contained'} loading={isLoading} type={'submit'} form='logistics-form'>
              {t('common:save')}
            </LoadingButton>
            <Button variant={'outlined'} disabled={isLoading} onClick={handleCancel}>
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
            <GeneralInfoLogisticsFrom />
            <AddressInfoForm />
            <ContactsInfoForm />
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
            <FormPaper nm title={t('costs.title')}>
              <CostForm />
            </FormPaper>
          </DetailSummary>
        </DetailLayout>
      </Form>
    </CenterPageLayout>
  );
};

export default memo(LogisticsCreate);
