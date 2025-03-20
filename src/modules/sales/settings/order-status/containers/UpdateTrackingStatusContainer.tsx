import TrackingStatusPicker from '../components/TrackingStatusPicker/TrackingStatusPicker';
import useUpdateTrackingStatus from '../hooks/useUpdateTrackingStatus';

interface IUpdateTrackinsStatusContainer {
  rowId: string;
  value: boolean;
}

const UpdateTrackingStatusContainer = ({ rowId, value }: IUpdateTrackinsStatusContainer) => {
  const { isLoading, updateTrackingStatus } = useUpdateTrackingStatus(rowId);

  return (
    <TrackingStatusPicker
      isLoading={isLoading}
      value={value}
      handleChange={() => {
        updateTrackingStatus(!value);
      }}
    />
  );
};

export default UpdateTrackingStatusContainer;
