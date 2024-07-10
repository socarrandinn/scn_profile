import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Box } from '@mui/material';
import TagsForm from './TagsForm';

type TagsEditFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  filterOption?: any;
};

const TagsEditForm = ({ error, control, isLoading, onSubmit, filterOption }: TagsEditFormProps) => {
  return (
    <Box>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} id={'form-tags'}>
        <TagsForm control={control} filterOption={filterOption} />
      </Form>
    </Box>
  );
};
export default memo(TagsEditForm);
