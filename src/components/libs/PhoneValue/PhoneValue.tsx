import { memo, useMemo } from 'react'
import { ReactLink } from '@dfl/react-security';

type PhoneValueProps = {
  value?: string
}

const formatPhoneNumber = (phoneNumber?: string): string => {
  if (!phoneNumber) return ''
  const phone = phoneNumber.replace(/\D/g, '');
  let formattedPhoneNumber = phone;
  if (phone.length > 3) {
    formattedPhoneNumber = `(${formattedPhoneNumber.substring(0, 3)}) ${formattedPhoneNumber.substring(3, Math.min(phone.length, 6))}`
  }
  if (phone.length > 6) {
    formattedPhoneNumber += `-${phone.substring(6, phone.length)}`
  }
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
