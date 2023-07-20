import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo, useState, useEffect } from 'react';
import { STATE } from 'modules/common/constants/status.references';

const LogisticStatusTableDataPicker = () => {
  const [valuePicker, setvaluePicker] = useState<IStatus>(STATE[0]);

  useEffect(() => {
    console.log(valuePicker)
  }, [valuePicker]);

  return (
    <StatusPicker
      options={STATE}
      name='active'
      size={'small'}
      value={valuePicker}
      onChange={(evt) => { setvaluePicker(evt) }}
    />
  );
};
export default memo(LogisticStatusTableDataPicker);
