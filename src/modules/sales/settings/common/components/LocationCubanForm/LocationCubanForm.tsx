import { useDFLForm } from '@dfl/mui-react-common';
import { useSearchParamsChange } from '@dfl/react-security';
import { FormAddressAutocompleteCityField, FormAddressAutocompleteStateField } from 'modules/common/components/FormSections/AddressInfoFrom/Fields';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

type LocationFormProps = {
  stateCode?: string;
};

const LocationCubanForm = ({ stateCode }: LocationFormProps) => {
  const { t } = useTranslation('common');
  const { value } = useSearchParamsChange('edit');
  const { watch } = useDFLForm();
  const type = watch?.('location.type');

  return (
    <>
      {type === LOCATION_TYPE.STATE &&
        <FormAddressAutocompleteStateField
          key={stateCode}
          required
          disabled={Boolean(value)}
          name={'location.state'}
          label={t('common:fields.address.state')}
        />}
      {type === LOCATION_TYPE.CITY &&
        <FormAddressAutocompleteCityField
          required
          key={`city-${stateCode}`}
          disabled={!stateCode || Boolean(value)}
          name={'location.city'}
          label={t('common:fields.address.city')}
          address={{ state: stateCode }}
        />}
    </>
  );
};

export default memo(LocationCubanForm);
