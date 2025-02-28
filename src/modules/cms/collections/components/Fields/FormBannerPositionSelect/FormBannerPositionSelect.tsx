import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { BANNER_POSITION } from 'modules/cms/banners/constants/banner.sizes';
import { COLLECTION_BANNER_TYPE } from 'modules/cms/collections/constants/collection-types';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface ISelectProductTagsProps {
  name: string;
  label?: string;
  helperText?: string;
  size?: 'medium' | 'small';
  bannerType: COLLECTION_BANNER_TYPE.SIDE_BY_SIDE_BANNER | COLLECTION_BANNER_TYPE.MULTI_BANNER;
  required?: boolean;
}

const positions = {
  [COLLECTION_BANNER_TYPE.SIDE_BY_SIDE_BANNER]: ['BANNER_0', 'BANNER_1'],
  [COLLECTION_BANNER_TYPE.MULTI_BANNER]: Object.keys(BANNER_POSITION),
};

const FormBannerPositionSelect = ({
  name,
  label,
  helperText,
  bannerType,
  size = 'medium',
  required = false,
}: ISelectProductTagsProps) => {
  const { t } = useTranslation('collection');

  const options = useMemo(() => positions[bannerType], [bannerType]);

  const renderLabel = (option: string) => {
    if (options.includes(option)) return option;

    return '';
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
      required={required}
      name={name}
      autoComplete
      includeInputInList={true}
      options={options}
      label={t(label || '')}
      isOptionEqualToValue={(option, value) => option === value}
      size={size}
      helperText={helperText}
      fullWidth
      id={`select-banner-position-${bannerType}`}
      getOptionLabel={renderLabel}
      renderOption={renderOption}
    />
  );
};

export default memo(FormBannerPositionSelect);
