import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { OFFER_TYPE } from '../../interfaces/offer.type.enum';

type OfferTypeSelectProps = {
  name: string;
  label: string;
};

const OfferTypeSelect = ({ label, name }: OfferTypeSelectProps) => {
  const { t } = useTranslation('offer');
  const options = useMemo(() => Object.keys(OFFER_TYPE), []);

  return (
    <FormSelectAutocompleteField
      name={name}
      label={label}
      options={options || []}
      getOptionLabel={(option: string) => t(`types.${option}`)}
    />
  );
};

export default memo(OfferTypeSelect);
