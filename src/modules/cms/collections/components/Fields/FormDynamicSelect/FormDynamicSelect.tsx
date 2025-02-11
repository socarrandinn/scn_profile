import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { COLLECTION_CONTENT_TYPE, DYNAMIC_COLLECTION_TYPE } from 'modules/cms/collections/constants/collection-types';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface ISelectProductTagsProps {
  name: string;
  label?: string;
  helperText?: string;
  size?: 'medium' | 'small';
  contentType: COLLECTION_CONTENT_TYPE.CATEGORY | COLLECTION_CONTENT_TYPE.PRODUCT;
  excludes?: string[];
  required?: boolean;
}

const dynamics = {
  [COLLECTION_CONTENT_TYPE.CATEGORY]: Object.keys(DYNAMIC_COLLECTION_TYPE),
  [COLLECTION_CONTENT_TYPE.PRODUCT]: Object.keys(DYNAMIC_COLLECTION_TYPE),
};

const FormDynamicSelect = ({
  name,
  label,
  helperText,
  contentType,
  excludes,
  size = 'medium',
  required = false,
}: ISelectProductTagsProps) => {
  const { t } = useTranslation('collection');

  const options = useMemo(() => {
    const list = dynamics[contentType];
    if (excludes && excludes?.length > 0) {
      return list?.filter((type: string) => !excludes?.includes(type));
    }
    return list;
  }, [contentType, excludes]);

  const renderLabel = (option: string) => {
    if (options.includes(option)) return t(`collection:dynamic.${contentType}.${option}`);

    return '';
  };

  const renderOption = (props: any, option: string) => {
    return (
      <li {...props} key={option}>
        {t(`collection:dynamic.${contentType}.${option}`)}
      </li>
    );
  };

  return (
    <FormSelectAutocompleteField
      name={name}
      required={required}
      autoComplete
      includeInputInList={true}
      options={options}
      label={t(label || '')}
      isOptionEqualToValue={(option, value) => option === value}
      size={size}
      helperText={helperText}
      disableClearable={true}
      fullWidth
      id={`select-dynamic-${contentType}`}
      getOptionLabel={renderLabel}
      renderOption={renderOption}
    />
  );
};

export default memo(FormDynamicSelect);
