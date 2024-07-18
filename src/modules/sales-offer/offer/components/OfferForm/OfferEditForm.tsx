import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';

type Props = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  children: any;
  formId?: string;
};

const OfferEditForm = ({ error, control, isLoading, onSubmit, children, formId }: Props) => {
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
        id={formId || 'offer-form'}
      >
        {children}
      </Form>
    </div>
  );
};

export default memo(OfferEditForm);
