import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Checkbox, ListItemText } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { FormSelectAutocompleteField } from '@dfl/mui-react-common';

type FromOperatorSelectProps = {
  name: string;
  label: string;
  multiple?: boolean;
  options: string[];
  tpart?: string;
  disabled?: boolean;
  sx?: any;
};

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const FromOperatorSelect = ({
  label,
  options,
  name,
  tpart,
  multiple = false,
  disabled = false,
  sx,
}: FromOperatorSelectProps) => {
  const { t } = useTranslation('');

  return (
    <FormSelectAutocompleteField
      fullWidth
      sx={sx || {}}
      multiple={multiple}
      disableCloseOnSelect={multiple}
      id={`multiple-${name}`}
      disableClearable={true}
      name={name}
      label={label}
      options={options || []}
      disabled={disabled}
      renderOption={(props, option: string, { selected }) => (
        <li {...props} key={option}>
          <ListItemText primary={tpart ? t(`${tpart}.${option}`) : option} />
          {multiple && <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />}
        </li>
      )}
      getOptionLabel={(label: string) => (tpart ? t(`${tpart}.${label}`) : label)}
    />
  );
};

export default memo(FromOperatorSelect);
