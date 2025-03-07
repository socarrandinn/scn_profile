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
import ContactsInfoForm from 'modules/common/components/FormSections/ContactInfoFrom/ContactsInfoForm';
import GeneralInfoLogisticsFrom from 'modules/inventory/provider/common/components/FormSections/GeneralInfoFrom/GeneralInfoFrom';
import ImageInfoFrom from 'modules/inventory/provider/common/components/FormSections/ImageInfoFrom/ImageInfoFrom';
import CommissionForm from '../../common/components/FormSections/ComissionForm/CommissionForm';
import { TagsFormContainer } from 'modules/inventory/settings/tags/containers/TagsFormContainer';
import { TAG_NAMES } from 'modules/inventory/settings/tags/interfaces';
import AddressMapContent from 'modules/common/components/FormSections/AddressInfoFrom/AddressMapContent';
import ButtonRefresh from 'modules/inventory/common/components/ButtonRefresh/ButtonRefresh';
import { TAGS_LIST_KEY } from 'modules/inventory/settings/tags/constants';
import SelectStatus from '../components/SelectStatus/SelectStatus';
import { ADDRESS_COUNTRY_CODE } from 'settings/address-location';

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

  const { control, onSubmit, isLoading, error, watch, setValue } = useLogisticsCreateForm(ADDRESS_COUNTRY_CODE, handleCancel, initValue);

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
        noValidate
      >
        <PageHeader title={t(title)}>
          <Stack direction={'row'} spacing={2}>
            <Button variant={'grey'} disabled={isLoading} onClick={handleCancel}>
              {t('common:cancel')}
            </Button>
            <LoadingButton variant={'contained'} loading={isLoading} type={'submit'} form='logistics-form'>
              {t('common:save')}
            </LoadingButton>
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
              <AddressMapContent control={control} countryCode={ADDRESS_COUNTRY_CODE} />
              {/* <AddressInfoForm hideZip control={control} watch={watch} setValue={setValue} /> */}
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

            <FormPaper title={t('fields.status')}>
              <SelectStatus />
            </FormPaper>

            <CommissionForm />

            <FormPaper
              title={t('product:section.summary.tags.title')}
              actions={<ButtonRefresh queryKey={[[TAGS_LIST_KEY]]} type='iconButton' />}
            >
              <TagsFormContainer
                control={control}
                // tags={tags}
                name={TAG_NAMES.LOGISTIC}
                ruleRequired
                isLoading={isLoading}
              />
            </FormPaper>
          </DetailSummary>
        </DetailLayout>
      </Form>
    </CenterPageLayout>
  );
};

export default memo(LogisticsCreate);
