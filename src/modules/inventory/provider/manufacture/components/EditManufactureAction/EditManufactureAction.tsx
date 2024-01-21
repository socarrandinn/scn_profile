import { Button } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const EditManufactureAction = () => {
  const { t } = useTranslation('manufacture');

  return (
    <Button variant='outlined' startIcon={<EditOutlinedIcon />}>
      {t('bulkActions.edit')}
    </Button>
  );
};

export default memo(EditManufactureAction);
