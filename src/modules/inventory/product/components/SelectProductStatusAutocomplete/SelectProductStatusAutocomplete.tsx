import { SelectAutocompleteField } from '@dfl/mui-react-common';
import { SelectChangeEvent } from '@mui/material';
import { useTranslation } from 'react-i18next';

type Props = {
  dark?: boolean;
  value?: string;
  helperText?: string;
  onChange?: (event: SelectChangeEvent<string>) => void;
};

const SelectProductStatusAutocomplete = ({ value, onChange, dark, helperText }: Props) => {
  const { t } = useTranslation('product');
  const status = ['Activo', 'Inactivo'];

  return (
    <SelectAutocompleteField
      label={t('fields.status')}
      dark={dark}
      options={status.map((f) => ({ label: f, id: f }))}
      fullWidth={true}
      multiple={false}
      value={value}
      onChange={onChange}
      helperText={helperText}
    />
  );
};

export default SelectProductStatusAutocomplete;
