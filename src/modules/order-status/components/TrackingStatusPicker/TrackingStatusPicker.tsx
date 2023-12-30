import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo } from 'react';
import { TRACKING_OPTIONS, TRACKING_OPTIONS_MAP } from 'modules/order-status/settings/tracking-picker-settings';
import useUpdateTrackingstatus from 'modules/order-status/hooks/useUpdateTrackingStatus';

type TrackingStatusPickerProps = {
  value: boolean;
  rowId: string;
};

const TrackingStatusPicker = ({ value, rowId }: TrackingStatusPickerProps) => {
  const { isLoading, updateTrackingStatus } = useUpdateTrackingstatus(rowId);
  return (
    <StatusPicker
      options={TRACKING_OPTIONS}
      name='active'
      size={'small'}
      value={TRACKING_OPTIONS_MAP.get(value) as IStatus}
      isLoading={isLoading}
      onChange={() => {
        updateTrackingStatus(!value);
      }}
    />
  );
};
export default memo(TrackingStatusPicker);
