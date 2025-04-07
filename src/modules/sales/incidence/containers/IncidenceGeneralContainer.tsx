import { Stack } from '@mui/material';
import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { IncidenceComments } from '../components/IncidenceComments';
import { ResponsibleForm } from '../components/ResponsibleForm';
import { Form } from '@dfl/mui-react-common';
import { useForm } from 'react-hook-form';
import { useIncidenceDetail } from '../context/IncidenceDetailContext';
import { IIncidence } from '../interfaces';
import ErrorNote from 'modules/common/components/ErrorNote/ErrorNote';
import { useTranslation } from 'react-i18next';
import { FormPaper } from 'modules/common/components/FormPaper';
import { FilePreview } from 'components/FileDropZone/FilePreview';

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
          <FormPaper title={t('list')} sx={{ marginTop: 0 }} variant={{ title: 'h4' }} mbHeader={1}>
            <ErrorNote
              title={incidence?.cause?.name}
              message={incidence?.subCause?.name ? `(${t('fields.subCause')}) ${incidence?.subCause?.name}` : undefined}
            />
          </FormPaper>
          {incidence?.description !== '\n' && incidence?.description !== '' &&
            <FormPaper title={t('fields.description')} variant={{ title: 'h4' }} mbHeader={1}>
              {incidence?.description}
            </FormPaper>
          }
          {incidence?.evidence &&
            <FormPaper title={t('common:evidence')} variant={{ title: 'h4' }} mbHeader={1}>
              <div className='flex gap-4 items-center'>
                {incidence?.evidence?.map((file) =>
                  <FilePreview key={file?.url} data={file}/>
                )}
              </div>
            </FormPaper>
          }
          <IncidenceComments incidenceId={incidenceId} />
        </DetailContent>
        <DetailSummary ghost width={{ md: 398, lg: 400, xl: 420 }}>
          <Form id='incidence-update-form' control={control}>
            <ResponsibleForm data={incidence as IIncidence} />
          </Form>
        </DetailSummary>
      </DetailLayout>

    </Stack >
  );
};

export default memo(IncidenceGeneralContainer);
