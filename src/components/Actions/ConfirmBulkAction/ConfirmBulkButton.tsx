import { memo } from 'react';
import { LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import ConfirmBulkAction from './ConfirmBulkAction';

type ConfirmBulkButtonProps = {
  isLoading: boolean;
  onDelete: () => any;
  reset?: any;
  error?: any;
  errors?: any;
  color?: 'success' | 'primary' | 'warning';
  disabled?: boolean;

  confirmation?: {
    title?: string;
    description?: string;
    confirm?: string;
  };
};

const confirm = {
  title: 'common:deleteConfirmation.title',
  description: 'common:deleteConfirmation.description',
  confirm: 'common:deleteConfirmation.confirm',
};

const ConfirmBulkButton = ({ reset, color = 'primary', confirmation, disabled, ...props }: ConfirmBulkButtonProps) => {
  const { t } = useTranslation('common');
  const { isOpen, onClose, onOpen } = useToggle();

  const handleClose = () => {
    onClose?.();
    reset?.();
  };

  return (
    <>
      <LoadingButton
        className='whitespace-nowrap'
        variant={'contained'}
        color={color}
        loading={props.isLoading}
        onClick={onOpen}
        disabled={disabled}
      >
        {confirmation?.confirm ?? t(confirm?.confirm)}
      </LoadingButton>
      <CustomDialog
        {...props}
        color={color}
        isOpen={isOpen}
        handleClose={handleClose}
        confirmation={confirmation ?? confirm}
      />
    </>
  );
};

export default memo(ConfirmBulkButton);

const CustomDialog = ({
  isOpen,
  handleClose,
  ...props
}: ConfirmBulkButtonProps & { isOpen: boolean; handleClose: () => void }) => {
  return (
    <ConfirmBulkAction
      open={isOpen}
      onClose={handleClose}
      onDelete={props.onDelete}
      isLoading={props.isLoading}
      title={props?.confirmation?.title}
      confirmation={props.confirmation?.description}
      confirm={props.confirmation?.confirm}
      color={props.color || 'primary'}
    />
  );
};
