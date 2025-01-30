import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { COLLECTION_CONTENT_TYPE } from 'modules/cms/collections/constants/collection-types';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface ISelectProductTagsProps {
  name: string;
  label?: string;
  helperText?: string;
  size?: 'medium' | 'small';
  onChange?: () => void;
}

const FormPositionSelect = ({ name, label, helperText, size = 'medium' }: ISelectProductTagsProps) => {
  const { t } = useTranslation('collection');

  const options = useMemo(() => Object.keys(COLLECTION_CONTENT_TYPE), []);

  const renderLabel = (option: string) => t(`collection:contentType.${option}`);

  const renderOption = (props: any, option: string) => {
    return (
      <li {...props} key={option}>
        {t(`collection:contentType.${option}`)}
      </li>
    );
  };

  return (
    <FormSelectAutocompleteField
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
      id='select-content-type'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
    />
  );
};

export default memo(FormPositionSelect);
