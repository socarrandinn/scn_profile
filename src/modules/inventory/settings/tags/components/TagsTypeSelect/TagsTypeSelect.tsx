import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { memo, useMemo } from 'react';
import { TAG_TYPE_ENUM } from '../../interfaces';
import { Checkbox } from '@mui/material';
import { useTranslation } from 'react-i18next';
type TagsTypeSelectProps = {
  name: string;
  label: string;
};

export const isOptionEqualToValue = (option: any, value: any) => {
  const optionId = option;
  const valueId = value;
  return optionId === valueId;
};

const TagsTypeSelect = ({ label, name }: TagsTypeSelectProps) => {
  const { t } = useTranslation('tags');
  const options = useMemo(() => Object.keys(TAG_TYPE_ENUM), []);

  const renderLabel = (option: string) => t(`TAG_TYPE.${option}`);

  const renderOption = (props: any, option: string, { selected }: any) => {
    return (
      <li {...props} key={option}>
        <Checkbox style={{ marginRight: 8 }} checked={selected} />
        {t(`TAG_TYPE.${option}`)}
      </li>
    );
  };

  return (
    <FormSelectAutocompleteField
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      id='select-tag-type'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      name={name}
      label={label}
      options={options}
    />
  );
};

export default memo(TagsTypeSelect);
