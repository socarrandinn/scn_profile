import { LoadingButton } from '@dfl/mui-react-common';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import CategoryCreateModal from '../../containers/CategoryCreateModal';
import { useCategoryDetail } from '../../context/CategoryDetailContext';
import { useToggle } from '@dfl/hook-utils';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const CategoryEditButton = () => {
  const { t } = useTranslation('common');
  const { isOpen, onOpen, onClose } = useToggle(false);
  const { isLoading, error, category } = useCategoryDetail();
  return (
    <>
      <LoadingButton onClick={onOpen} variant='outlined' startIcon={<EditOutlinedIcon />}>
        {t('edit')}
      </LoadingButton>
      <CategoryCreateModal
        title={'edit'}
        open={isOpen}
        onClose={onClose}
        initValue={category}
        loadingInitData={isLoading}
        dataError={error}
      />
    </>
  );
};

export default memo(CategoryEditButton);
