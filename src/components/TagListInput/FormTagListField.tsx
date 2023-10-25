import React, { memo } from 'react';
import { FormFieldControl } from '@dfl/mui-react-common';
import TagListInput, { TagListInputProps } from './TagListInput';

const FormTagListField = (props: TagListInputProps) => {
  return <FormFieldControl {...props} Component={TagListInput} />;
};

export default memo(FormTagListField);
