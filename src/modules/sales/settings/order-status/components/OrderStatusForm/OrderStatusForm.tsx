import { FormEventHandler, memo } from 'react';
import { Form, FormSwitchField, FormTextField, HandlerError, FormColorPicker } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Control, UseFormSetValue, useWatch } from 'react-hook-form';
import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';
// import AudienceTargetSelect from '../AudienceTargetSelect/AudienceTargetSelect';
import AllowedToSelect from '../AllowedToSelect/AllowedToSelect';
import AudienceAndTemplateInput from '../AudienceAndTemplateInput/AudienceAndTemplateInput';

type OrderStatusFormProps = {
  error: any;
  control: Control<IOrderStatus, any>;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  setValue: UseFormSetValue<IOrderStatus>;
  edit?: boolean;
};

const OrderStatusForm = ({ error, control, isLoading, onSubmit, edit }: OrderStatusFormProps) => {
  const { t } = useTranslation('orderStatus');

  const notificationsEnabled = useWatch({
    name: 'notification.enabled',
    control,
  });

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {/* Title field */}
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='title' label={t('fields.title')} />
          </Grid>

          {/* Description field */}
          <Grid item xs={12}>
            <FormTextField
              fullWidth
              multiline
              minRows={3}
              name='description'
              label={t('fields.description')}
            />
          </Grid>

          {/* Order field */}
          <Grid item xs={12}>
            <FormTextField fullWidth required name='order' label={t('fields.priority')} />
          </Grid>

          {/* AllowTo select field */}
          <Grid item xs={12}>
            <AllowedToSelect control={control} helperText={t(edit ? 'allowedTo.helperEdit' : 'allowedTo.helperCreate')} />
          </Grid>

          {/* Color field */}
          <Grid item xs={12}>
            <FormColorPicker name='color' label={t('fields.color')} />
          </Grid>

          {/* Tracking and Enable notifications switchers */}
          <Grid item xs={12}>
            <FormSwitchField name='tracking' label={t('fields.tracking')} />
            <FormSwitchField name='notification.enabled' label={t('fields.notification.title')} />
          </Grid>

          {/* Display on notification.enabled */}
          {notificationsEnabled ? (
            <AudienceAndTemplateInput control={control} />
          ) : (
            <></>
          )}
        </Grid>
      </Form>
    </div>
  );
};

export default memo(OrderStatusForm);
