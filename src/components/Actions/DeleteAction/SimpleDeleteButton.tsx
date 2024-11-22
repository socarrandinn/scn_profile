import { useToggle } from '@dfl/hook-utils';
import { DeleteDialogAction } from '@dfl/mui-admin-layout';
import { LoadingButton } from '@dfl/mui-react-common';
import { DeleteOutline } from '@mui/icons-material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

type SimpleDeleteButtonProps = {
  isLoading: boolean;
  error: any;
  errors?: any;
  onDelete: () => void;
};

const SimpleDeleteButton = ({ error, isLoading, errors, onDelete }: SimpleDeleteButtonProps) => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { t } = useTranslation('common');
  return (
    <>
      <LoadingButton
        variant={'contained'}
        startIcon={<DeleteOutline />}
        color={'error'}
        loading={isLoading}
        onClick={onOpen}
      >
        {t('delete')}
      </LoadingButton>
      <DeleteDialogAction
        onClose={onClose}
        open={isOpen}
        onDelete={onDelete}
        error={error}
        errors={errors}
        isLoading={isLoading}
      />
    </>
  );
};

export default memo(SimpleDeleteButton);
