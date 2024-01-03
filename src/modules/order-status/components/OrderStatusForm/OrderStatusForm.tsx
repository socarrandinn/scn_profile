import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError, SwitchField } from '@dfl/mui-react-common';
import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ColorPicker } from '../ColorPicker';
import { Control, UseFormSetValue, useWatch } from 'react-hook-form';
import { IOrderStatus } from 'modules/order-status/interfaces';
import AudienceTargetSelect from '../AudienceTargetSelect/AudienceTargetSelect';
import AllowedToSelect from '../AllowedToSelect/AllowedToSelect';

type OrderStatusFormProps = {
  error: any;
  control: Control<IOrderStatus, any>;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  setValue: UseFormSetValue<IOrderStatus>;
};

const OrderStatusForm = ({ error, control, isLoading, onSubmit, setValue }: OrderStatusFormProps) => {
  const { t } = useTranslation('orderStatus');

  const notificationsEnabled = useWatch({
    name: 'notification.enabled',
    control,
  });
  const trackingEnabled = useWatch({
    name: 'tracking',
    control,
  });

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='title' label={t('fields.title')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              fullWidth
              multiline
              required
              minRows={3}
              name='description'
              label={t('fields.description')}
            />
          </Grid>
          <Grid item xs={12}>
            <FormTextField fullWidth required name='order' label={t('fields.order')} />
          </Grid>
          <Grid item xs={12}>
            <AllowedToSelect control={control} />
          </Grid>
          <Grid item xs={12}>
            <Typography className='DFL-FormLabel MuiBox-root css-1smj204'>{t('fields.color')}</Typography>
            <ColorPicker
              onChangeAction={(color) => {
                setValue('color', color);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <SwitchField
              name='tracking'
              label={t('fields.tracking')}
              onChange={(e) => {
                /// @ts-ignore
                setValue('tracking', e.target.checked);
              }}
              value={trackingEnabled}
            />
            <SwitchField
              name='notification.enabled'
              label={t('fields.notification.title')}
              onChange={(e) => {
                /// @ts-ignore
                setValue('notification.enabled', e.target.checked);
              }}
              value={notificationsEnabled}
            />
          </Grid>
          {notificationsEnabled ? (
            <>
              <Grid item xs={12}>
                <AudienceTargetSelect control={control} />
              </Grid>
              <Grid item xs={12}>
                <FormTextField
                  fullWidth
                  autoFocus
                  name='notification.audience.template'
                  label={t('fields.notification.template')}
                  control={control}
                />
              </Grid>
            </>
          ) : (
            <></>
          )}
        </Grid>
      </Form>
    </div>
  );
};

export default memo(OrderStatusForm);
