import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface ISelectProductTagsProps {
  name: string;
  label?: string;
  helperText?: string;
  size?: 'medium' | 'small';
}

const CommissionTypeSelect = ({ name, label, helperText, size = 'medium' }: ISelectProductTagsProps) => {
  const { t } = useTranslation('product');

  const options = useMemo(() => Object.keys(PriceType), []);

  const renderLabel = (option: string) => t(`common:${option}`);

  const renderOption = (props: any, option: string) => {
    return (
      <li {...props} key={option}>
        {t(`common:${option}`)}
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
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      sx={{
        maxWidth: 124,
        marginLeft: 'auto',
        position: 'relative',
        mr: -1.8,
        '& .MuiOutlinedInput-root': {
          ':before': {
            content: '""',
            position: 'absolute',
            top: '10%',
            left: 8,
            width: '1px',
            height: '80%',
            backgroundColor: (theme) => theme.palette.divider,
          },
          '& fieldset': {
            border: 'none',
          },
          '&:hover fieldset': {
            border: 'none',
          },
          '&.Mui-focused fieldset': {
            border: 'none',
          },
        },
      }}
    />
  );
};

export default memo(CommissionTypeSelect);
