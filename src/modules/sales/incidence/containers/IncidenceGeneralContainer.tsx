import { Stack } from '@mui/material';
import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { IncidenceComments } from '../components/IncidenceComments';
import { ResponsibleForm } from '../components/ResponsibleForm';
import { Form } from '@dfl/mui-react-common';
import { useForm } from 'react-hook-form';
import { useIncidenceDetail } from '../context/IncidenceDetailContext';
import { IIncidence } from '../interfaces';
import { useTranslation } from 'react-i18next';
import { FormPaper } from 'modules/common/components/FormPaper';
import { FilePreview } from 'components/FileDropZone/FilePreview';
import { IncidenceActions } from '../components/IncidenceActions';

const IncidenceGeneralContainer = () => {
  const { incidence, incidenceId } = useIncidenceDetail();
  const { t } = useTranslation('incidence');

  const { control } = useForm({
    defaultValues: incidence,
  });

  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <DetailLayout>
        <DetailContent ghost>
          <FormPaper nm title={t('fields.description')} variant={{ title: 'h4' }} mbHeader={1}>
            {incidence?.description}
          </FormPaper>

          {incidence?.evidence &&
            <FormPaper title={t('common:evidence')} variant={{ title: 'h4' }} mbHeader={1}>
              <div className='flex gap-4 items-center'>
                {incidence?.evidence?.map((file, index) =>
                  <FilePreview key={index} data={file} />
                )}
              </div>
            </FormPaper>
          }
          <IncidenceComments incidenceId={incidenceId} />
        </DetailContent>
        <DetailSummary ghost width={{ md: 398, lg: 399, xl: 400 }}>
          <Form id='incidence-update-form' control={control}>
            <ResponsibleForm data={incidence as IIncidence} />
          </Form>
          <IncidenceActions />
        </DetailSummary>
      </DetailLayout>
    </Stack >
  );
};

export default memo(IncidenceGeneralContainer);
