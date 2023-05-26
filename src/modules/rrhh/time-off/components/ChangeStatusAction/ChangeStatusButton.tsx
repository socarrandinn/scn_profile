import { memo } from 'react';
import { LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';

type Props = {
  isLoading: boolean;
  actionText: string;
  action: () => any;
  // status: Itimeof
};

const ChangeStatusButton = ({ isLoading, actionText, action }: Props) => {
  const { t } = useTranslation('timeOff');
  const { isOpen, onClose, onOpen } = useToggle();

  return (
    <>
      <LoadingButton variant={'contained'} color={'warning'} loading={isLoading} onClick={onOpen}>
        {actionText}
      </LoadingButton>
      <ChangeStatusAction open={isOpen} onConfirm={action} onClose={onClose} isLoading={isLoading} />
    </>
  );
};

export default memo(ChangeStatusButton);
