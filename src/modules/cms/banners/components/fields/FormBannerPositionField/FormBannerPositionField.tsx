import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { BANNER_POSITION_TYPE } from 'modules/cms/banners/constants/banner.enum';

import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface ISelectProductTagsProps {
  name: string;
  label?: string;
  helperText?: string;
  size?: 'medium' | 'small';
}

const FormBannerPositionField = ({ name, label, helperText, size = 'medium' }: ISelectProductTagsProps) => {
  const { t } = useTranslation('collection');

  const options = useMemo(() => Object.keys(BANNER_POSITION_TYPE), []);

  const renderLabel = (option: string) => {
    return option;
  };

  const renderOption = (props: any, option: string) => {
    return (
      <li {...props} key={option}>
        {option}
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
      // disableClearable={true}
      fullWidth
      id={'select-banner-position'}
      getOptionLabel={renderLabel}
      renderOption={renderOption}
    />
  );
};

export default memo(FormBannerPositionField);
