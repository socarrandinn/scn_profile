import { memo } from 'react';
import { LoadingButton } from '@dfl/mui-react-common';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import DeleteByHandleErrorAction from './DeleteByHandleErrorAction';

type DeleteButtonProps = {
  isLoading: boolean;
  onDelete: () => any;
  customConfirmation?: string;
  error?: any;
  errors?: any;
};

const DeleteButton = ({ ...props }: DeleteButtonProps) => {
  const { t } = useTranslation('common');
  const { isOpen, onClose, onOpen } = useToggle();

  return (
    <>
      <LoadingButton
        variant={'contained'}
        startIcon={<DeleteOutlineIcon />}
        color={'error'}
        loading={props.isLoading}
        onClick={onOpen}
      >
        {t('delete')}
      </LoadingButton>
      <DeleteByHandleErrorAction {...props} open={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(DeleteButton);
