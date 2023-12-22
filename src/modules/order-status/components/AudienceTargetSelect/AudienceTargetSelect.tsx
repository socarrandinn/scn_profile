import { SelectAutocompleteField } from '@dfl/mui-react-common';
// import { MenuItem } from '@mui/material';
import { AUDIENCE_TARGET } from 'modules/order-status/constants';
import { SyntheticEvent } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { IOrderStatus } from 'modules/order-status/interfaces';

interface IAudienceTargetSelect {
  setValue: UseFormSetValue<IOrderStatus>;
}

const AudienceTargetSelect = ({ setValue }: IAudienceTargetSelect) => {
  const { t } = useTranslation('orderStatus');

  return (
    <SelectAutocompleteField
      fullWidth={true}
      label={t('fields.notification.audienceTarget')}
      multiple={true}
      options={Object.keys(AUDIENCE_TARGET).map((target) => ({
        label: t(`fields.audienceTarget.${target}`),
        id: target,
      }))}
      onChange={(e: SyntheticEvent<Element, Event>) => {
        setValue(
          'notification.audience.target',
          /// @ts-ignore
          e.target.value.map((value) => {
            return value.id;
          }) as string[],
        );
      }}
    />
  );
};

export default AudienceTargetSelect;
