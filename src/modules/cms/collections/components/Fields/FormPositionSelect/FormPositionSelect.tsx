import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import {
  COLLECTION_BANNERS_POSITION,
  COLLECTION_CONTENT_TYPE,
  COLLECTION_PRODUCTS_POSITION,
} from 'modules/cms/collections/constants/collection-types';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface ISelectProductTagsProps {
  name: string;
  label?: string;
  helperText?: string;
  size?: 'medium' | 'small';
  contentType: COLLECTION_CONTENT_TYPE.BANNER | COLLECTION_CONTENT_TYPE.PRODUCT;
  required?: boolean;
}

const positions = {
  [COLLECTION_CONTENT_TYPE.BANNER]: Object.keys(COLLECTION_BANNERS_POSITION),
  [COLLECTION_CONTENT_TYPE.PRODUCT]: Object.keys(COLLECTION_PRODUCTS_POSITION),
};

const FormPositionSelect = ({
  name,
  label,
  helperText,
  contentType,
  size = 'medium',
  required = false,
}: ISelectProductTagsProps) => {
  const { t } = useTranslation('collection');

  const options = useMemo(() => positions[contentType], [contentType]);

  const renderLabel = (option: string) => {
    if (options.includes(option)) return t(`collection:position.${contentType}.${option}`);

    return '';
  };

  const renderOption = (props: any, option: string) => {
    return (
      <li {...props} key={option}>
        {t(`collection:position.${contentType}.${option}`)}
      </li>
    );
  };

  return (
    <FormSelectAutocompleteField
      required={required}
      name={name}
      autoComplete
      includeInputInList={true}
      options={options}
      label={t(label || '')}
      isOptionEqualToValue={(option, value) => option === value}
      size={size}
      helperText={helperText}
      // disableClearable={true}
      fullWidth
      id={`select-position-${contentType}`}
      getOptionLabel={renderLabel}
      renderOption={renderOption}
    />
  );
};

export default memo(FormPositionSelect);
