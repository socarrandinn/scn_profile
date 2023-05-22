import { memo } from 'react'
import { ReactLink } from '@dfl/react-security';

type EmailValueProps = {
  value?: string
}
const EmailValue = ({ value }: EmailValueProps) => {
  if (!value) return <></>
  return (
        <ReactLink to={`mailto:${value}`}>
            {value}
        </ReactLink>
  );
}

export default memo(EmailValue);
