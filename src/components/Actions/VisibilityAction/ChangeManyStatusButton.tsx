import MenuItem from '@mui/material/MenuItem';
import { memo, useCallback, useState } from 'react';
import { DropDown, IStatus, StatusItem } from '@dfl/mui-react-common';
import { useToggle } from '@dfl/hook-utils';
import { useTranslation } from 'react-i18next';
import ChangeStatusAction from './ChangeStatusAction';

type ChangeManyStatusButtonProps = {
  isLoading: boolean;
  options?: IStatus[];
  onChange: any;
  title: string;
  confirmation?: string;
  confirmButtonText?: string;
  reset?: any;
};
const ChangeManyStatusButton = ({
  isLoading,
  options,
  onChange,
  reset,
  title,
  confirmation,
}: ChangeManyStatusButtonProps) => {
  const { t } = useTranslation('common');
  const { isOpen, onClose, onOpen } = useToggle();
  const { onClose: _onClose, onOpen: _onOpen, isOpen: open } = useToggle(false);
  const [status, setStatus] = useState<IStatus>();

  const handleClose = () => {
    _onClose?.();
    reset?.();
  };

  const handleOpen = useCallback(
    (status: IStatus) => {
      setStatus(status);
      _onOpen();
    },
    [_onOpen],
  );

  return (
    <>
      <DropDown
        label={title || t('visibilityMany')}
        buttonProps={{
          variant: 'contained',
          // startIcon: <ViewStream />,
        }}
        open={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        {options?.map((status) => (
          <MenuItem
            value={status._id}
            key={status._id}
            onClick={() => {
              handleOpen(status);
            }}
          >
            <StatusItem value={status} fullWidth />
          </MenuItem>
        ))}
      </DropDown>

      <ChangeStatusAction
        isLoading={isLoading}
        open={open}
        onClose={handleClose}
        onChange={onChange}
        confirmation={confirmation}
        status={status as IStatus}
      />
    </>
  );
};

export default memo(ChangeManyStatusButton);
