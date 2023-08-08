import { memo } from 'react';
import { FormSelectField } from '@dfl/mui-react-common';
import { MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { STATUS } from 'modules/inventory/provider/manufacture/constants/status.filter';

const SelectStatus = () => {
  const { t } = useTranslation('logistics');
  return (<FormSelectField fullWidth name="active" label={t('fields.status')}>
    {Object.keys(STATUS).map((option: any, index: number) => (
      <MenuItem key={index} value={STATUS[option]}>
        {option}
      </MenuItem>
    ))}
  </FormSelectField>);
};
export default memo(SelectStatus);
