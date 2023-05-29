import { memo } from 'react';
import { Stack } from '@mui/material';

import { useTimeOffChangeStatus } from 'modules/rrhh/time-off/hooks/useTimeOffChangeStatus';
import { ChangeStatusAction } from '../ChangeStatusAction';
import { TimeOffStatusEnum } from 'modules/rrhh/time-off/constants/time-off-status.enum';
import { useTranslation } from 'react-i18next';

type Props = {
  rowId: string;
};

const EmployeeRowActions = ({ rowId }: Props) => {
  const { t } = useTranslation('timeOff');

  const { mutate, isLoading } = useTimeOffChangeStatus(rowId, () => {});

  const handleAccept = () => {
    mutate({
      status: TimeOffStatusEnum.ACCEPTED,
    });
  };

  const handleReject = () => {
    mutate({
      status: TimeOffStatusEnum.REJECTED,
    });
  };

  return (
    <>
      <Stack direction='row' spacing={1}>
        <ChangeStatusAction
          status={TimeOffStatusEnum.ACCEPTED}
          action={handleAccept}
          isLoading={isLoading}
          actionColor={'success'}
          actionText={t('changeStatus.status.ACCEPTED.action')}
        />
        <ChangeStatusAction
          status={TimeOffStatusEnum.REJECTED}
          action={handleReject}
          isLoading={isLoading}
          actionColor={'error'}
          actionText={t('changeStatus.status.REJECTED.action')}
        />
      </Stack>
    </>
  );
};

export default memo(EmployeeRowActions);
