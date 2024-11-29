import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Box } from '@mui/material';
import ProductProviderForm from 'modules/inventory/product/containers/ProductFormSections/ProductProviderForm';

type ProductGeneralOrganizationFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const ProductGeneralOrganizationForm = ({
  error,
  control,
  isLoading,
  onSubmit,
}: ProductGeneralOrganizationFormProps) => {
  return (
    <Box>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'providers-form'}>
        <ProductProviderForm isEdit />
      </Form>
    </Box>
  );
};
export default memo(ProductGeneralOrganizationForm);
