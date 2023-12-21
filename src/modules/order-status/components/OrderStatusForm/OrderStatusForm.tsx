import { FormEventHandler, memo, Dispatch, SetStateAction } from 'react';
import { Form, FormTextField, HandlerError, SwitchField } from '@dfl/mui-react-common';
import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ColorPicker } from '../ColorPicker';

type OrderStatusFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  setColor: Dispatch<SetStateAction<string>>;
};

const OrderStatusForm = ({ error, control, isLoading, onSubmit, setColor }: OrderStatusFormProps) => {
  const { t } = useTranslation('orderStatus');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='title' label={t('fields.title')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField fullWidth multiline minRows={3} name='description' label={t('fields.description')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField fullWidth name='order' label={t('fields.order')} />
          </Grid>
          <Grid item xs={12}>
            <Typography className='DFL-FormLabel MuiBox-root css-1smj204'>{t('fields.color')}</Typography>
            <ColorPicker
              onChangeAction={(color) => {
                setColor(color);
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <SwitchField name='tracking' label={t('fields.tracking')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(OrderStatusForm);
