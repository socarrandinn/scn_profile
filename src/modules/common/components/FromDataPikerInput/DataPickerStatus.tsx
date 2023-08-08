import { memo } from 'react';
import { FormFieldControl, StatusPicker, StatusPickerProps, useDFLForm } from '@dfl/mui-react-common';
import { STATE } from 'modules/common/constants/status.references';

type DataPickerStatusProps = Omit<StatusPickerProps, 'onChange' > & {
  onChange: (event?: any) => void
};
const DataPickerStatus = ({ ...props }: DataPickerStatusProps) => {
  const { isLoading } = useDFLForm();

  return (
    <StatusPicker
      options={STATE}
      size={'small'}
      isLoading={isLoading}
      {...props} />
  );
};
export default memo(DataPickerStatus);

export const DataPickerStatusField = (props: any) => {
  return <FormFieldControl {...props} Component={DataPickerStatus} />;
};
