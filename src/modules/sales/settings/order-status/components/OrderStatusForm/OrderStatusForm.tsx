import { FormEventHandler, memo, useMemo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { UseFormSetValue, useWatch } from 'react-hook-form';
import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';
import AllowedToSelect from '../AllowedToSelect/AllowedToSelect';
import FormValidateTypeSelectField from '../FormValidateTypeSelectField/FormValidateTypeSelectField';
import { AUDIENCE_TARGET, ORDER_STATUS_TYPE_ENUM } from '../../constants';
import AudienceAndTemplateInput from 'modules/sales/settings/common/components/AudienceAndTemplateInput/AudienceAndTemplateInput';
import { FormCustomSwitchField } from 'modules/common/components/IphoneSwitchField';
import FormCustomColorPicker from 'components/fields/FormCustomColorPicker';

type OrderStatusFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  setValue: UseFormSetValue<IOrderStatus>;
  edit?: boolean;
};

const OrderStatusForm = ({ error, control, isLoading, onSubmit, edit }: OrderStatusFormProps) => {
  const { t } = useTranslation('orderStatus');

  const { notification, type } = useWatch({ control });
  const isValidate = useMemo(() => type === ORDER_STATUS_TYPE_ENUM.VALIDATED, [type]);

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} sx={{ pt: 2 }}>
          {/* Title field */}
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='title' label={t('fields.title')} />
          </Grid>

          {/* Description field */}
          <Grid item xs={12}>
            <FormTextField fullWidth multiline minRows={2} name='description' label={t('fields.description')} />
          </Grid>

          {/* validate type */}
          {isValidate && (
            <Grid item xs={12} md={6}>
              <FormValidateTypeSelectField
                required
                name='validationType'
                label={t('fields.validationType')}
                size='small'
              />
            </Grid>
          )}
          {/* Order field */}
          <Grid item xs={12} md={isValidate ? 6 : 12}>
            <FormTextField fullWidth required name='order' label={t('fields.priority')} />
          </Grid>

          {/* AllowTo select field */}
          <Grid item xs={12}>
            <AllowedToSelect
              control={control}
              helperText={t(edit ? 'allowedTo.helperEdit' : 'allowedTo.helperCreate')}
            />
          </Grid>

          {/* Color field */}
          <Grid item xs={12}>
            <FormCustomColorPicker name='color' label={t('fields.color')} />
          </Grid>

          {/* Tracking and Enable notifications switchers */}
          <Grid item xs={12} md={6}>
            <FormCustomSwitchField name='tracking' label={t('fields.tracking')} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormCustomSwitchField name='notification.enabled' label={t('fields.notification.title')} />
          </Grid>

          {/* Display on sendNotification */}
          {notification?.enabled && (
            <Grid item xs={12}>
              <AudienceAndTemplateInput
                control={control}
                name='notification.audience'
                options={Object.keys(AUDIENCE_TARGET)}
              />
            </Grid>
          )}
        </Grid>
      </Form>
    </div>
  );
};

export default memo(OrderStatusForm);
