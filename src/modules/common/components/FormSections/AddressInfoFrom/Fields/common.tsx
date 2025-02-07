import { Checkbox } from '@mui/material';
import { IAddress } from 'modules/common/interfaces';

interface IOption {
  code: string;
  name: string;
}

export const renderLabel = (option: IOption): string => option?.name || '';

export const renderOption = (
  props: React.HTMLAttributes<HTMLLIElement>,
  option: IOption,
  { selected }: { selected: boolean },
): JSX.Element => (
  <li {...props} key={option?.code}>
    <Checkbox style={{ marginRight: 8 }} checked={selected} />
    {option?.name ?? option}
  </li>
);

export const isOptionEqualToValue = (option: any, value: any) => {
  const optionId = option?.code || option;
  const valueId = value?.code || value;
  return optionId === valueId;
};

export type FormAddressAutocompleteFieldProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  disabled?: boolean;
  address?: Partial<IAddress>;
};
