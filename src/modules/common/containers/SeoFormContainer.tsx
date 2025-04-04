import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid, Box } from '@mui/material';
import SeoForm from '../components/SeoForm/SeoForm';

type Props = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  seoTitle?: string;
  seoDescription?: string;
  slugDescription?: string;
};

const SeoFormContainer = ({
  error,
  control,
  isLoading,
  onSubmit,
  seoTitle,
  seoDescription,
  slugDescription,
}: Props) => {
  return (
    <Box paddingLeft={3}>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <SeoForm
            seoTitle={seoTitle}
            seoDescription={seoDescription}
            isEdit={true}
            slugDescription={slugDescription}
          />
        </Grid>
      </Form>
    </Box>
  );
};
export default memo(SeoFormContainer);
