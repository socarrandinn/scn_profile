import { memo } from 'react';
import { Stack } from '@mui/material';

import { useTimeOffChangeStatus } from 'modules/rrhh/time-off/hooks/useTimeOffChangeStatus';
import { ChangeStatusAction } from '../ChangeStatusAction';
import { TimeOffStatusEnum } from 'modules/rrhh/time-off/constants/time-off-status.enum';
import { useTranslation } from 'react-i18next';
import { IEmployeeTimeOff } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';

type Props = {
  rowId: string;
  status: TimeOffStatusEnum;
};

const EmployeeRowActions = ({ rowId, status }: Props) => {
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

  if (status === TimeOffStatusEnum.PENDING) {
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
  }

  return <></>;
};

export default memo(EmployeeRowActions);

export const renderEmployeeRowActions = (_value: any, timeOff: IEmployeeTimeOff) => {
  return <EmployeeRowActions rowId={timeOff._id} status={timeOff.status} />;
};
