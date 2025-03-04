import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { CAUSES_INCIDENCE_TYPE_ENUM } from '../../interfaces';
import { CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material';
import { Checkbox } from '@mui/material';

type CausesIncidenceTypeSelectProps = {
  name: string;
  required?: boolean;
  label: string;
  multiple?: boolean;
};

const CausesIncidenceTypeSelect = ({ name, label, required, multiple = false }: CausesIncidenceTypeSelectProps) => {
  const { t } = useTranslation('causesIncidence');
  const options = useMemo(() => Object.keys(CAUSES_INCIDENCE_TYPE_ENUM), []);

  return (
    <FormSelectAutocompleteField
      name={name}
      label={label}
      required={required}
      multiple={multiple}
      options={options}
      disableCloseOnSelect
      getOptionLabel={(option: string) => t(`cause.${option}`)}
      isOptionEqualToValue={(option, value) => option === value}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={<CheckBoxOutlineBlank fontSize='small' />}
            checkedIcon={<CheckBox fontSize='small' />}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {t(`cause.${option as string}`)}
        </li>
      )}
    />
  );
};

export default memo(CausesIncidenceTypeSelect);
