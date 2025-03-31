import { Stack } from '@mui/material';
import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { IncidenceComments } from '../components/IncidenceComments';
import { ResponsibleForm } from '../components/ResponsibleForm';
import { Form } from '@dfl/mui-react-common';
import { useForm } from 'react-hook-form';
import { useIncidenceDetail } from '../context/IncidenceDetailContext';
import { IIncidence } from '../interfaces';

const IncidenceGeneralContainer = () => {
  const { incidence, incidenceId } = useIncidenceDetail();

  const { control } = useForm({
    defaultValues: incidence,
  });

  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <DetailLayout>
        <DetailContent ghost>
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
