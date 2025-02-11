import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { COLLECTION_BANNER_TYPE } from 'modules/cms/collections/constants/collection-types';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface ISelectProductTagsProps {
  name: string;
  label?: string;
  helperText?: string;
  size?: 'medium' | 'small';
  required?: boolean;
}

const BannerTypeSelect = ({ name, label, helperText, size = 'medium', required = false }: ISelectProductTagsProps) => {
  const { t } = useTranslation('product');

  const options = useMemo(() => Object.keys(COLLECTION_BANNER_TYPE), []);

  const renderLabel = (option: string) => t(`collection:subType.${option}`);

  const renderOption = (props: any, option: string) => {
    return (
      <li {...props} key={option}>
        {t(`collection:subType:${option}`)}
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
      disableClearable={true}
      fullWidth
      id='select-banner-type'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
    />
  );
};

export default memo(BannerTypeSelect);
