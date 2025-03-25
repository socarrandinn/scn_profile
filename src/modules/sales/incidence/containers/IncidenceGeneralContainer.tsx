import { Stack } from '@mui/material';
import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { IncidenceComments } from '../components/IncidenceComments';
import { ResponsibleForm } from '../components/ResponsibleForm';
import { Form } from '@dfl/mui-react-common';
import { useForm } from 'react-hook-form';
import { useIncidenceDetail } from '../context/IncidenceDetailContext';

const IncidenceGeneralContainer = () => {
  const { incidence } = useIncidenceDetail();

  const { control } = useForm({
    defaultValues: incidence,
  });

  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <Form id='incidence-update-form' control={control}>
        <DetailLayout>
          <DetailContent ghost>
            <IncidenceComments />
          </DetailContent>
          <DetailSummary ghost width={{ md: 320, lg: 320, xl: 400 }}>
            <ResponsibleForm data={incidence} />
          </DetailSummary>
        </DetailLayout>
      </Form>
    </Stack >
  );
};

export default memo(IncidenceGeneralContainer);
