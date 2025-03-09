import {
  FormAddressAutocompleteCityField,
  FormAddressAutocompleteStateField,
} from 'modules/common/components/FormSections/AddressInfoFrom/Fields';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDFLForm } from '@dfl/mui-react-common';

type LocationFormProps = {
  type: string | null;
  stateCode?: string;
};

const LocationCubanForm = ({ type, stateCode }: LocationFormProps) => {
  const { t } = useTranslation('common');
  const { watch } = useDFLForm();

  const stateValue = watch?.('location.state');

  return useMemo(() => {
    switch (type) {
      case LOCATION_TYPE.CITY:
        return (
          <FormAddressAutocompleteCityField
            required
            key={`city-${stateCode || ''}-${type || LOCATION_TYPE.STATE}-${stateValue as string}`}
            disabled={!stateCode}
            name={'location.city'}
            label={t('common:fields.address.city')}
            address={{ state: stateCode }}
          />
        );
      default:
        return (
          <FormAddressAutocompleteStateField
            key={`state-${stateCode || ''}-${type || LOCATION_TYPE.STATE}-${stateValue as string}`}
            required
            name={'location.state'}
            label={t('common:fields.address.state')}
          />
        );
    }
  }, [stateCode, stateValue, t, type]);
};

export default memo(LocationCubanForm);
