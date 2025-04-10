import { memo } from 'react';
import { LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import DeleteAction from './DeleteAction';
import { DeleteDialogAction } from '@dfl/mui-admin-layout';
import DeleteIcon from 'components/icons/DeleteIcon';

type DeleteButtonProps = {
  isLoading: boolean;
  many?: boolean;
  disabled?: boolean;
  onDelete: () => any;
  customConfirmation?: string;
  reset?: any;
  error?: any;
  errors?: any;
};

const text = {
  default: {
    title: 'common:deleteConfirmation.title',
    confirmation: 'common:deleteConfirmation.confirmation',
  },
  many: {
    confirmation: 'common:deleteConfirmation.manyConfirmation',
  },
};

const DeleteButton = ({ reset, ...props }: DeleteButtonProps) => {
  const { t } = useTranslation('common');
  const { isOpen, onClose, onOpen } = useToggle();

  const handleClose = () => {
    onClose?.();
    reset?.();
  };

  return (
    <>
      <LoadingButton
        {...props}
        variant={'contained'}
        startIcon={<DeleteIcon />}
        color={'error'}
        loading={props.isLoading}
        onClick={onOpen}
        sx={{ boxShadow: '8px 16px 32px rgba(43, 52, 69, 0.22)' }}
      >
        {t('delete')}
      </LoadingButton>
      <CustomDialog {...props} isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};

export default memo(DeleteButton);

const CustomDialog = ({
  isOpen,
  handleClose,
  ...props
}: DeleteButtonProps & { isOpen: boolean; handleClose: () => void }) => {
  const { many } = props;

  if (many) {
    return (
      <DeleteAction
        open={isOpen}
        onClose={handleClose}
        onDelete={props.onDelete}
        isLoading={props.isLoading}
        title={text.default.title}
        confirmation={props.customConfirmation || text.many.confirmation}
      />
    );
  }

  return (
    <DeleteDialogAction
      open={isOpen}
      onClose={handleClose}
      onDelete={props.onDelete}
      isLoading={props.isLoading}
      error={props.error}
      errors={props.errors}
    />
  );
};
