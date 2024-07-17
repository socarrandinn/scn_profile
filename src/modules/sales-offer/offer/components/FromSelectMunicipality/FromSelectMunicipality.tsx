import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { memo } from 'react';
import { ILocationProvince, MUNICIPALITIES_BY_PROVINCE_CODE } from '@dfl/location';
import { isEmpty } from 'lodash';
import { MUNICIPALITY_ALL } from '../../constants/offer.enum';

type FromSelectMunicipalityProps = {
  name: string;
  label: string;
  state: ILocationProvince;
  disabled?: boolean;
};

const isOptionEqualToValue = (option: any, value: any) => {
  const optionId = option?.municipality || option;
  const valueId = value?.municipality || value;
  return optionId === valueId;
};

const FromSelectMunicipality = ({ name, label, state, disabled = false }: FromSelectMunicipalityProps) => {
  return (
    <FormSelectAutocompleteField
      id={`select-municipality-${name}`}
      disabled={disabled || isEmpty(state)}
      label={label}
      options={
        MUNICIPALITIES_BY_PROVINCE_CODE[Number(state?.state)]
          ? [MUNICIPALITY_ALL, ...MUNICIPALITIES_BY_PROVINCE_CODE[Number(state?.state)]]
          : []
      }
      name={name}
      getOptionLabel={(option) => option?.name || ''}
      isOptionEqualToValue={isOptionEqualToValue}
    />
  );
};

export default memo(FromSelectMunicipality);
