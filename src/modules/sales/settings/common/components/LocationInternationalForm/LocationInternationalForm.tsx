import { FormTextField, useDFLForm } from '@dfl/mui-react-common';
import FormSelectCountryField from 'components/fields/FormSelectCountryFiled';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const LocationInternationalForm = () => {
  const { t } = useTranslation('common');
  const { watch } = useDFLForm();
  const type = watch?.('location.type');

  return (
    <>
      {type === LOCATION_TYPE.COUNTRY &&
        <FormSelectCountryField
          required
          name="location.country"
          label={t('common:fields.address.country')}
          size="small"
        />}
      {type === LOCATION_TYPE.STATE &&
        <FormTextField
          autoComplete='off'
          required
          name={'location.state'}
          label={t('fields.address.state')}
        />}
      {type === LOCATION_TYPE.CITY &&
        <FormTextField
          autoComplete='off'
          required
          name={'location.city'}
          label={t('fields.address.city')}
        />}
    </>
  );
};

export default memo(LocationInternationalForm);
