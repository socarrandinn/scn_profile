import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { useState } from 'react';
import { TRACKING_OPTIONS, TRACKING_OPTIONS_MAP } from 'modules/sales/settings/order-status/settings/tracking-picker-settings';
import { UseMutateFunction } from '@tanstack/react-query';
import { ConfirmRowAction } from '@dfl/mui-admin-layout';
import { useToggle } from '@dfl/hook-utils';
import { useTranslation } from 'react-i18next';

type TrackingStatusPickerProps = {
  value: boolean;
  isLoading: boolean;
  handleChange: UseMutateFunction<any>;
};

const TrackingStatusPicker = ({ value, isLoading, handleChange }: TrackingStatusPickerProps) => {
  const { isOpen, onClose, onOpen } = useToggle()
  const [currentValue, setCurrentValue] = useState(value)
  const { t } = useTranslation('common')

  const handleClose = () => {
    setCurrentValue(value)
    onClose()
  }

  const handleOpen = () => {
    setCurrentValue(!value)
    onOpen()
  }

  const handleChangeAction = () => {
    handleChange()
    onClose()
  }

  return (
  <>
    <StatusPicker
      options={TRACKING_OPTIONS}
      name='active'
      size={'small'}
      value={TRACKING_OPTIONS_MAP.get(currentValue) as IStatus}
      isLoading={isLoading}
      onChange={handleOpen}
    />
    <ConfirmRowAction isOpen={isOpen}
                      onClose={handleClose}
                      onOpen={onOpen}
                      onConfirm={handleChangeAction}
                      isLoading={isLoading}
                      confirmationTitle={t('confirmation.title')}
                      confirmationMessage={t('confirmation.description')}
                      confirmButtonText={t('confirmation.confirm')}/>
  </>
  );
};
export default TrackingStatusPicker
