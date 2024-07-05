import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { memo, useMemo } from 'react';
import { TAG_PROVIDER_ENUM } from '../../interfaces';
import { Checkbox } from '@mui/material';
import { useTranslation } from 'react-i18next';
type TagsProviderSelectProps = {
  name: string;
  label: string;
  multiple?: boolean;
};

export const isOptionEqualToValue = (option: any, value: any) => {
  const optionId = option;
  const valueId = value;
  return optionId === valueId;
};

const TagsProviderSelect = ({ label, name, multiple = false }: TagsProviderSelectProps) => {
  const { t } = useTranslation('tags');
  const options = useMemo(() => Object.keys(TAG_PROVIDER_ENUM), []);

  const renderLabel = (option: string) => t(`TAG_PROVIDER.${option}`);

  const renderOption = (props: any, option: string, { selected }: any) => {
    return (
      <li {...props} key={option}>
        <Checkbox style={{ marginRight: 8 }} checked={selected} />
        {t(`TAG_PROVIDER.${option}`)}
      </li>
    );
  };

  return (
    <FormSelectAutocompleteField
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      id='select-tag-provider'
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

export default memo(TagsProviderSelect);
