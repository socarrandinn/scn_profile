import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { AUDIENCE_TARGET } from 'modules/order-status/constants';
import { Control, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { IOrderStatus } from 'modules/order-status/interfaces';

interface IAudienceTargetSelect {
  control: Control<IOrderStatus, any>;
}

const AudienceTargetSelect = ({ control }: IAudienceTargetSelect) => {
  const { t } = useTranslation('orderStatus');

  const selectedValues = useWatch({
    name: 'notification.audience.target',
    control,
  });

  return (
    <FormSelectAutocompleteField
      name='notification.audience.target'
      options={Object.keys(AUDIENCE_TARGET).map((target) => ({
        id: target,
        label: target
      }))}
      control={control}
      multiple={true}
      label={t('fields.notification.audienceTarget')}
      fullWidth={true}
    />
  );
};

export default AudienceTargetSelect;
