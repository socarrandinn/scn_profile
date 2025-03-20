import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { VISIBILITY_STATUS, VISIBILITY_STATUS_MAP } from 'modules/inventory/common/constants/visibility-status';
import useUpdateBankStatus from '../../hooks/useUpdateBankStatus';
import { useSecurity } from '@dfl/react-security';
import { BANK_PERMISSIONS } from '../../constants';

type Props = {
  value: IStatus;
  bankId: string;
  readOnly?: boolean;
};

const BankStatusPicker = ({ value, bankId, readOnly = false }: Props) => {
  const { t } = useTranslation('causesIncidence');
  const { hasPermission } = useSecurity();

  const { updateStatus: updateVisible, isLoading, value: lastValue } = useUpdateBankStatus(bankId);

  const _value = useMemo(() => {
    const status = VISIBILITY_STATUS_MAP.get(lastValue ?? value) as IStatus;
    return { ...status, title: t(status?.title) };
  }, [lastValue, value, t]);

  return (
    <StatusPicker
      readOnly={readOnly || !hasPermission(BANK_PERMISSIONS.BANK_WRITE || BANK_PERMISSIONS.PAYMENT_SETTINGS_VIEW)}
      options={VISIBILITY_STATUS?.map((option) => ({ ...option, title: t(option.title) }))}
      name='enabled'
      size={'small'}
      value={_value}
      isLoading={isLoading}
      onChange={(status: IStatus) => updateVisible(status?._id)}
    />
  );
};

export default memo(BankStatusPicker);
