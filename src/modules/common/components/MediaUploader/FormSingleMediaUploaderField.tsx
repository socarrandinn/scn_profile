import { FormFieldControl, FormLabel } from '@dfl/mui-react-common';
import { FormHelperText } from '@mui/material';
import {
  MultipleMediaUploaderProps,
  SingleMediaUploaderProps
} from 'modules/common/components/MediaUploader/interfaces';
import SingleMediaUploader from 'modules/common/components/MediaUploader/SingleMediaUploader';
import {
  useSingleUploaderController
} from 'modules/common/components/MediaUploader/hooks/useSingleUploaderController';

const MediaUploaderField = ({
  value,
  label,
  required,
  error,
  onChange,
  helperText,
  ...props
}: SingleMediaUploaderProps) => {
  const { uploadError, isLoading, onAcceptFilesHandler } = useSingleUploaderController(value, onChange)

  return (
        <FormLabel label={label} required={required}>
            <SingleMediaUploader
                image={value}
                onAcceptFiles={onAcceptFilesHandler}
                uploading={isLoading}
                error={uploadError}
                {...props}
            />
            {helperText ? <FormHelperText error={error}>{helperText}</FormHelperText> : <></>}
        </FormLabel>
  );
};

export const FormSingleMediaUploaderField = (props: MultipleMediaUploaderProps) => {
  return <FormFieldControl {...props} Component={MediaUploaderField}/>;
};
