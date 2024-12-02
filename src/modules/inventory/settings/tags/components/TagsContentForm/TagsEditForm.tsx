import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Box } from '@mui/material';
import TagsForm from './TagsForm';
import { TAG_NAMES } from '../../interfaces';
import { useTagStore } from '../../contexts/useTagStore';

type TagsEditFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  tagName: TAG_NAMES
};

const TagsEditForm = ({ error, control, isLoading, onSubmit, tagName }: TagsEditFormProps) => {
  const { hazTotalTag } = useTagStore();
  return (
    <Box>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} id={'form-tags'}>
        <TagsForm control={control} isEdit={!hazTotalTag} name={tagName} />
      </Form>
    </Box>
  );
};
export default memo(TagsEditForm);
