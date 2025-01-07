import { FormSelectField } from '@dfl/mui-react-common';
import { MenuItem } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { collectionContentTypeOptions } from '../../constants/collection-types';

interface Props {
  defaultValue?: string;
  name?: string;
  size?: 'small' | 'medium';
  dark?: boolean;
  readOnly?: boolean;
};

const FormSelectContentType = ({ defaultValue, name, size = 'small', dark, readOnly }: Props) => {
  const { t } = useTranslation('collection');

  return (
    <FormSelectField
      name={name ?? 'type'}
      label={t('fields.type')}
      defaultValue={defaultValue}
      fullWidth
      required
      size={size}
      dark={dark}
      readOnly={readOnly}
    >
      {collectionContentTypeOptions.map(([key, value]) => (
        <MenuItem key={key} value={value}>
          {t(`contentType.${value}`)}
        </MenuItem>
      ))}
    </FormSelectField>
  );
};

export default memo(FormSelectContentType);
