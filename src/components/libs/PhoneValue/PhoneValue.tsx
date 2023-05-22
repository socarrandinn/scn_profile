import { memo, useMemo } from 'react'
import { ReactLink } from '@dfl/react-security';

type PhoneValueProps = {
  value?: string
}

const formatPhoneNumber = (phoneNumber?: string): string => {
  if (!phoneNumber) return ''
  phoneNumber = phoneNumber.replace(/\D/g, '');

  if (phoneNumber.length !== 10) {
    throw new Error('Invalid phone number');
  }

  let formattedPhoneNumber = '';

  formattedPhoneNumber += '(';
  formattedPhoneNumber += phoneNumber.substr(0, 3);
  formattedPhoneNumber += ') ';
  formattedPhoneNumber += phoneNumber.substr(3, 3);
  formattedPhoneNumber += '-';
  formattedPhoneNumber += phoneNumber.substr(6, 4);

  return formattedPhoneNumber;
}
const PhoneValue = ({ value }: PhoneValueProps) => {
  const tel = useMemo(() => formatPhoneNumber(value),
    [value]
  )
  if (!value) return <></>
  return (
        <ReactLink to={`tel:${value}`}>
            {tel}
        </ReactLink>
  );
}

export default memo(PhoneValue);
