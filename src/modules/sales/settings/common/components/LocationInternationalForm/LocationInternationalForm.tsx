import { FormTextField } from '@dfl/mui-react-common';
import { useSearchParamsChange } from '@dfl/react-security';
import FormSelectCountryField from 'components/fields/FormSelectCountryFiled';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type LocationFormProps = {
  type: string | null;
};

const LocationInternationalForm = ({ type }: LocationFormProps) => {
  const { t } = useTranslation('common');
  const { value } = useSearchParamsChange('edit');

  return useMemo(() => {
    switch (type) {
      case LOCATION_TYPE.STATE:
        return <FormTextField autoComplete='off' required name={'location.state'} label={t('fields.address.state')} disabled={Boolean(value)} />;
      case LOCATION_TYPE.CITY:
        return <FormTextField autoComplete='off' required name={'location.city'} label={t('fields.address.city')} disabled={Boolean(value)} />;
      default:
        return (
          <FormSelectCountryField
            disabled={Boolean(value)}
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
