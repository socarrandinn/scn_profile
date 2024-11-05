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
import GeneralInfoLogisticsFrom from 'modules/inventory/provider/common/components/FormSections/GeneralInfoFrom/GeneralInfoFrom';
import CostForm from 'modules/inventory/provider/logistics/components/ComissionAndCost/ComissionAndCost';
import ImageInfoFrom from 'modules/inventory/provider/common/components/FormSections/ImageInfoFrom/ImageInfoFrom';
import CommissionForm from '../../common/components/FormSections/ComissionForm/CommissionForm';
import { TagsFormContainer } from 'modules/inventory/settings/tags/containers/TagsFormContainer';

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
  const { t } = useTranslation(['logistics', 'product']);
  const navigate = useNavigate();
  const handleCancel = useCallback(() => {
    navigate('/inventory/settings/logistics');
  }, [navigate]);

  const { control, onSubmit, isLoading, error, watch, setValue, listTags } = useLogisticsCreateForm(
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
        id={'logistics-form'}
        watch={watch}
        setValue={setValue}
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
            <FormPaper title={t('common:address')}>
              <AddressInfoForm hideZip control={control} watch={watch} setValue={setValue} />
            </FormPaper>
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
            <ImageInfoFrom />

            <FormPaper title={t('handlingCostAndStatus.title')}>
              <CostForm />
            </FormPaper>

            <CommissionForm />

            <FormPaper title={t('product:section.summary.tags.title')}>
              <TagsFormContainer control={control} tags={listTags} title='summary.providerTag' />
            </FormPaper>
          </DetailSummary>
        </DetailLayout>
      </Form>
    </CenterPageLayout>
  );
};

export default memo(LogisticsCreate);
