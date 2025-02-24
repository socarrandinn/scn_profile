import { FormTextField } from '@dfl/mui-react-common';
import FormSelectCountryField from 'components/fields/FormSelectCountryFiled';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type LocationFormProps = {
  type: string | null;
}

const LocationInternationalForm = ({ type }: LocationFormProps) => {
  const { t } = useTranslation('common');

  const fieldConfig = useMemo(() => {
    switch (type) {
      case LOCATION_TYPE.COUNTRY:
        return {
          field: (
            <FormSelectCountryField
              required
              name="location.country"
              label={t('common:fields.address.country')}
              size="small"
            />
          ),
        };
      case LOCATION_TYPE.STATE:
        return {
          field: (
            <FormTextField
              autoComplete='off'
              required
              name={'location.state'}
              label={t('fields.address.state')}
            />
          ),
        };
      case LOCATION_TYPE.MUNICIPALITY:
        return {
          field: (
            <FormTextField
              autoComplete='off'
              required
              name={'location.city'}
              label={t('fields.address.city')}
            />
          ),
        };
      default:
        return { field: null };
    }
  }, [type]);

  return <>{fieldConfig.field}</>;
};

export default memo(LocationInternationalForm);
