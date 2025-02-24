import { FormAddressAutocompleteCityField, FormAddressAutocompleteStateField } from 'modules/common/components/FormSections/AddressInfoFrom/Fields';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

type LocationFormProps = {
  type: string | null;
  stateCode?: string;
};

const LocationCubanForm = ({ type, stateCode }: LocationFormProps) => {
  const { t } = useTranslation('common');

  return (
    <>
      {type === LOCATION_TYPE.STATE &&
        <FormAddressAutocompleteStateField
          required
          name={'location.state'}
          label={t('common:fields.address.state')}
        />}
      {type === LOCATION_TYPE.CITY &&
        <FormAddressAutocompleteCityField
          required
          multiple
          disabled={!stateCode}
          name={'location.city'}
          label={t('common:fields.address.city')}
          address={{ state: stateCode }}
        />}
    </>
  );
};

export default memo(LocationCubanForm);
