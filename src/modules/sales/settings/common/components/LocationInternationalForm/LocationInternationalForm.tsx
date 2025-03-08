import { FormTextField } from '@dfl/mui-react-common';
import FormSelectCountryField from 'components/fields/FormSelectCountryFiled';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type LocationFormProps = {
  type: string | null;
};

const LocationInternationalForm = ({ type }: LocationFormProps) => {
  const { t } = useTranslation('common');

  return useMemo(() => {
    switch (type) {
      case LOCATION_TYPE.STATE:
        return <FormTextField autoComplete='off' required name={'location.state'} label={t('fields.address.state')} />;
      case LOCATION_TYPE.CITY:
        return <FormTextField autoComplete='off' required name={'location.city'} label={t('fields.address.city')} />;
      default:
        return (
          <FormSelectCountryField
            required
            name='location.country'
            label={t('common:fields.address.country')}
            size='small'
          />
        );
    }
  }, [t, type]);
};

export default memo(LocationInternationalForm);
