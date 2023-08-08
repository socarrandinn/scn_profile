import { memo } from 'react';
import { FormFieldControl, FormFieldControlProps } from '@dfl/mui-react-common';
import { TinyMceEditor, TinyMceEditorProps } from 'components/TinyMceEditor';

const FormTinyMceEditorField = (props: FormFieldControlProps & TinyMceEditorProps) => {
  return <FormFieldControl {...props} Component={TinyMceEditor} />;
};

export default memo(FormTinyMceEditorField);
