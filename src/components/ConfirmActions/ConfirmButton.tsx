import { memo, ReactNode } from 'react';
import { IconButton } from '@dfl/mui-react-common';
import ConfirmDialog from './ConfirmDialog';

type ConfirmActionProps = {
  onConfirm: () => void;
  isLoading?: boolean;
  error?: any;
  errors?: any;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  confirmationTitle?: string;
  confirmationMessage?: string;
  tooltip?: string;
  icon: ReactNode;
  confirmButtonText?: string;
  disabled?: boolean;
  imageUrl: string;
};

const ConfirmButton = ({
  isOpen,
  onClose,
  onOpen,
  error,
  errors,
  confirmationTitle,
  confirmationMessage,
  isLoading,
  onConfirm,
  tooltip,
  icon,
  confirmButtonText,
  disabled,
  imageUrl
}: ConfirmActionProps) => {
  return (
    <>
      <IconButton
        sx={{
          fill: 'none',
        }}
        onClick={onOpen}
        tooltip={tooltip || ''}
        disabled={disabled}
      >
        {icon}
      </IconButton>

      <ConfirmDialog
        open={isOpen}
        error={error}
        errors={errors}
        title={confirmationTitle}
        confirmationMessage={confirmationMessage}
        onClose={onClose}
        isLoading={isLoading}
        onConfirm={onConfirm}
        confirmButtonText={confirmButtonText}
        imageUrl={imageUrl}
      />
    </>
  );
};

export default memo(ConfirmButton);
