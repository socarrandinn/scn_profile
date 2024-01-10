import { FormFieldControl } from '@dfl/mui-react-common';
import { memo } from 'react';
import TextFieldWithOptions, { TextFieldWithOptionsProps } from './TextFieldWithOptions';

const FormTextFieldWithOptions = (props: TextFieldWithOptionsProps) => {
  return <FormFieldControl {...props} Component={TextFieldWithOptions} />;
};

export default memo(FormTextFieldWithOptions);
