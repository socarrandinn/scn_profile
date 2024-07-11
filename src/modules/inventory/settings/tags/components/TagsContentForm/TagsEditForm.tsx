import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Box } from '@mui/material';
import TagsForm from './TagsForm';

type TagsEditFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const TagsEditForm = ({ error, control, isLoading, onSubmit }: TagsEditFormProps) => {
  return (
    <Box>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} id={'form-tags'}>
        <TagsForm control={control} />
      </Form>
    </Box>
  );
};
export default memo(TagsEditForm);
