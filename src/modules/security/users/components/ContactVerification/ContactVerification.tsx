import { StatusPicker } from '@dfl/mui-react-common';
import { memo } from 'react';
import { CONTACT_VALIDATION_STATUS_MAP } from '../../constants/contactValidation_status';

const ContactVerification = ({ value }: { value: boolean }) => {
  return (
    <>
      <StatusPicker
        // @ts-ignore
        value={CONTACT_VALIDATION_STATUS_MAP.get(value) || CONTACT_VALIDATION_STATUS_MAP.get(false)}
        readOnly
      />
    </>
  );
};

export default memo(ContactVerification);
