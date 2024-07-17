import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';

type Props = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  children: any;
};

const OfferEditForm = ({ error, control, isLoading, onSubmit, children }: Props) => {
  const { hasPermission } = useSecurity();
  return (
    <div>
      <HandlerError error={error} />
      <Form
        readOnly={!hasPermission(['OFFER_ADMIN'], true)}
        onSubmit={onSubmit}
        control={control}
        isLoading={isLoading}
        size={'small'}
        id={'offer-form'}
      >
        {children}
      </Form>
    </div>
  );
};

export default memo(OfferEditForm);
