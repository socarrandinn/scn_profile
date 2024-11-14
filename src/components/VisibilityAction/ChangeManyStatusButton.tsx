import MenuItem from '@mui/material/MenuItem';
import { memo, useCallback, useState } from 'react';
import { DropDown, IStatus, StatusItem } from '@dfl/mui-react-common';
import { useToggle } from '@dfl/hook-utils';
import { useTranslation } from 'react-i18next';
import ChangeManyStatusAction from './ChangeManyStatusAction';

type ChangeManyStatusButtonProps = {
  isLoading: boolean;
  options?: IStatus[];
  onChange: (status: IStatus) => void;
  title: string;
  confirmation?: string;
  confirmButtonText?: string;
};
const ChangeManyStatusButton = ({
  isLoading,
  options,
  onChange,
  title,
  confirmation,
  confirmButtonText,
}: ChangeManyStatusButtonProps) => {
  const { t } = useTranslation('common');
  const { isOpen, onClose, onOpen } = useToggle();
  const { onClose: _onClose, onOpen: _onOpen, isOpen: open } = useToggle(false);
  const [status, setStatus] = useState<IStatus>();

  const handleChange = useCallback(
    (status: IStatus) => {
      onChange?.(status);
      onClose();
    },
    [onChange, onClose],
  );

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

      <ChangeManyStatusAction
        isLoading={isLoading}
        open={open}
        onClose={_onClose}
        onOpen={_onOpen}
        onConfirm={() => {
          handleChange(status as IStatus);
        }}
        confirmation={confirmation}
        confirmButtonText={confirmButtonText}
      />
    </>
  );
};

export default memo(ChangeManyStatusButton);
