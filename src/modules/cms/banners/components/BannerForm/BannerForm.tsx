import { memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { BannerCommonForm } from '../BannerCommonForm';
import { FormBannerCheckForm } from '../fields';

type BannerFormProps = {
  error?: any;
  control: any;
  onSubmit: any;
  isLoading: boolean;
};
const BannerForm = ({ error, control, onSubmit, isLoading }: BannerFormProps) => {
  return (
    <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'banner-form'} dark>
      <HandlerError error={error} />

      <Grid container spacing={{ xs: 2, md: 4 }} pt={2}>
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <FormBannerCheckForm />
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Grid container spacing={{ xs: 1, md: 2 }}>
            <BannerCommonForm />
          </Grid>
        </Grid>
      </Grid>
    </Form>
  );
};

export default memo(BannerForm);
