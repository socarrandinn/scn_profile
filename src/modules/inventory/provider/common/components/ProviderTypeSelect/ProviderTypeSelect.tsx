import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { memo, useMemo } from 'react';
import { Checkbox } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ROLE_PROVIDER_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';

type ProviderTypeSelectProps = {
  name: string;
  label: string;
  multiple?: boolean;
};

export const isOptionEqualToValue = (option: any, value: any) => {
  const optionId = option;
  const valueId = value;
  return optionId === valueId;
};

const ProviderTypeSelect = ({ label, name, multiple = false }: ProviderTypeSelectProps) => {
  const { t } = useTranslation('common');
  const options = useMemo(() => [ROLE_PROVIDER_TYPE_ENUM.LOGISTIC, ROLE_PROVIDER_TYPE_ENUM.PRODUCT], []);

  const renderLabel = (option: string) => t(`provider.${option}`);

  const renderOption = (props: any, option: string, { selected }: any) => {
    return (
      <li {...props} key={option}>
        <Checkbox style={{ marginRight: 8 }} checked={selected} />
        {t(`provider.${option}`)}
      </li>
    );
  };

  return (
    <FormSelectAutocompleteField
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      id='select-type-provider'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      name={name}
      label={label}
      options={options}
      multiple={multiple}
      disableCloseOnSelect={multiple}
    />
  );
};

export default memo(ProviderTypeSelect);
