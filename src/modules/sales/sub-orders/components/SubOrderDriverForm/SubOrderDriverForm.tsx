import { FormEventHandler, memo } from 'react';
import { Form, HandlerError, FormSelectField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@mui/lab';

type SubOrderDriverFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const SubOrderDriverForm = ({ error, control, isLoading, onSubmit }: SubOrderDriverFormProps) => {
  const { t } = useTranslation('subOrder');
  // const { carrier } = useWatch({ control });

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'suborder-driver-form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {/* //todo definir async autocomplete  */}
          <Grid item xs={12}>
            <FormSelectField disabled name='carrier' label={t('fields.carrier')} />
          </Grid>

          <Grid item xs={12}>
            <FormSelectField disabled name='driver' /* carrierId={carrier} */ label={t('fields.driver')} />
          </Grid>

          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <LoadingButton disabled type='submit' variant='contained' size={'small'} loading={isLoading}>
              {t('common:save')}
            </LoadingButton>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(SubOrderDriverForm);
