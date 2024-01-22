import { memo } from 'react';
import { LoadingButton } from '@dfl/mui-react-common';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useTranslation } from 'react-i18next';
import { DeleteAction } from 'modules/security/roles/components/DeleteAction/index';
import { useToggle } from '@dfl/hook-utils';

type DeleteButtonProps = {
  isLoading: boolean;
  many?: boolean;
  onDelete: () => any;
  customConfirmation?: string;
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

const DeleteButton = ({ isLoading, onDelete, many, customConfirmation }: DeleteButtonProps) => {
  const { t } = useTranslation('common');
  const { isOpen, onClose, onOpen } = useToggle();

  return (
    <>
      <LoadingButton
        variant={'contained'}
        startIcon={<DeleteOutlineIcon />}
        color={'error'}
        loading={isLoading}
        onClick={onOpen}
      >
        {t('delete')}
      </LoadingButton>
      <DeleteAction
        open={isOpen}
        onClose={onClose}
        onDelete={onDelete}
        isLoading={isLoading}
        title={text.default.title}
        confirmation={customConfirmation || (many ? text.many.confirmation : text.default.confirmation)}
      />
    </>
  );
};

export default memo(DeleteButton);
