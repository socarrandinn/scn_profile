import { Button } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useSearchParamsChange } from '@dfl/react-security';
import { ManufactureDetail } from '../../context/ManufactureDetail';

const EditManufactureAction = () => {
  const { t } = useTranslation('manufacture');
  const { update } = useSearchParamsChange('edit');
  const { manufacturerId } = ManufactureDetail();

  const handleEdit = () => {
    update({ edit: manufacturerId });
  };

  return (
    <Button variant='outlined' startIcon={<EditOutlinedIcon />} onClick={handleEdit}>
      {t('bulkActions.edit')}
    </Button>
  );
};

export default memo(EditManufactureAction);
