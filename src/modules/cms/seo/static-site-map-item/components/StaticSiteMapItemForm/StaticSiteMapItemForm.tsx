import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Box, Grid } from '@mui/material';
import { DOMAIN } from 'settings/globals';
import { useTranslation } from 'react-i18next';

type StaticSiteMapItemFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  form?: string;
};

const StaticSiteMapItemForm = ({ error, control, isLoading, onSubmit, form }: StaticSiteMapItemFormProps) => {
  const { t } = useTranslation();
  return (
    <Box width={'100%'}>
      <HandlerError error={error} />
      <Form
        onSubmit={onSubmit}
        control={control}
        isLoading={isLoading}
        size={'small'}
        id={form ?? 'static-site-map-form'}
      >
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormTextField
              fullWidth
              name='url'
              label={t('domain')}
              placeholder={'my.domain'}
              InputProps={{
                endAdornment: (
                  <Box display='flex' alignItems='center' justifyContent='center'>
                    {DOMAIN}
                  </Box>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Form>
    </Box>
  );
};

export default memo(StaticSiteMapItemForm);
