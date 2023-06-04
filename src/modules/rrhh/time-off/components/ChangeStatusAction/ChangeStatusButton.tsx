import { memo } from 'react';
import { LoadingButton } from '@dfl/mui-react-common';
import { useToggle } from '@dfl/hook-utils';
import { TimeOffStatusEnum } from '../../constants/time-off-status.enum';
import ChangeStatusAction from './ChangeStatusAction';

type Props = {
  isLoading: boolean;
  actionText: string;
  actionColor: 'success' | 'warning' | 'error' | 'primary' | 'secondary' | 'info';
  action: () => any;
  status: TimeOffStatusEnum;
};

const ChangeStatusButton = ({ isLoading, actionText, action, actionColor, status }: Props) => {
  const { isOpen, onClose, onOpen } = useToggle();

  return (
        <>
            <LoadingButton variant={'contained'} color={actionColor} loading={isLoading} onClick={onOpen}
                           size={'small'}>
                {actionText}
            </LoadingButton>
            <ChangeStatusAction open={isOpen} onConfirm={action} onClose={onClose} isLoading={isLoading}
                                status={status}/>
        </>
  );
};

export default memo(ChangeStatusButton);
