import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Box } from '@mui/material';
import ProductTagsForm from './ProductTagsForm';

type ProductTagsEditFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const ProductTagsEditForm = ({ error, control, isLoading, onSubmit }: ProductTagsEditFormProps) => {
  return (
    <Box>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form-tags'}>
        <ProductTagsForm control={control} />
      </Form>
    </Box>
  );
};
export default memo(ProductTagsEditForm);
