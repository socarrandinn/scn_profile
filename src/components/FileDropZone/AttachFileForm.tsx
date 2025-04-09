import { memo } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { Box, CircularProgress, FormHelperText, Stack } from '@mui/material';
import { useFormState } from 'react-hook-form';
import useUploadDropZone from './hooks/useUploadDropZone';
import { isEmpty, isString } from 'lodash';
import {
  ChildrenProps,
  ConditionContainer,
  FormFieldControl,
  FormLabel,
  HandlerError,
  IconButton,
  TextFieldProps,
} from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import FileDropRejections from './FileDropRejections';
import { FILE_ERROR } from './constants/error';
import { getMessageByPath } from 'utils/file-utils';
import { AttachFile } from '@mui/icons-material';

type DropzoneProps = {
  isDelete?: boolean;
  isDownload?: boolean;
};
export enum TYPE_DROP {
  MEDIA = 'MEDIA',
  FILE = 'FILE',
}

type FileDropZoneProps = TextFieldProps & {
  name: string;
  control: any;
  actions?: DropzoneProps;
  fields: any;
  append: any;
  inputProps: DropzoneOptions;
  type?: TYPE_DROP;
  showDropzoneWrapper?: boolean;
  documentName?: string;
  onlyButton?: boolean;
  onlyList?: boolean;
};

const AttachFileForm = ({
  type = TYPE_DROP.MEDIA,
  control,
  name,
  fields,
  append,
  inputProps,
  required,
  label,
  children,
  showDropzoneWrapper = false,
  documentName,
}: FileDropZoneProps & ChildrenProps) => {
  const { t } = useTranslation('errors');
  const { accept, maxSize, maxFiles } = inputProps;
  const { onChange, isUploading, error } = useUploadDropZone(append);

  const { errors } = useFormState({ control, name, exact: true });
  const messengerError = getMessageByPath(errors, name);

  const onDrop = (acceptedFiles: any) => {
    for (const file of acceptedFiles) {
      try {
        onChange({ file, type });
      } catch (e) {
        console.error(error);
      }
    }
  };

  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    accept,
    maxFiles,
    maxSize,
    onDrop,
    disabled: isUploading,
    noClick: !isEmpty(fields),
    noKeyboard: !isEmpty(fields),
  });

  const formLabel = required && isString(label) ? `${label}*` : label;

  return (
    <>
      <Stack flexGrow={1} width={'100%'}>
        <FormLabel label={formLabel}>
          <HandlerError error={error} errors={FILE_ERROR} />

          <ConditionContainer active={showDropzoneWrapper} alternative={<>{children}</>}>
            <Box {...getRootProps()}>
              <input {...getInputProps()} />
              <IconButton tooltip={t('breadcrumb:upload')} sx={{ mt: 0.9 }}>
                {isUploading ? <CircularProgress size={20} /> : <AttachFile sx={{ transform: 'rotate(215deg)' }} />}
              </IconButton>
            </Box>
          </ConditionContainer>

          {/* // file by errors */}
          {messengerError ? <FormHelperText error={true}>{t(messengerError)}</FormHelperText> : <></>}
          <FileDropRejections rejections={fileRejections} maxFiles={maxFiles || undefined} />
        </FormLabel>
      </Stack>
    </>
  );
};

export default memo(AttachFileForm);

export const FormFileDropZone = (props: FileDropZoneProps) => {
  return <FormFieldControl {...props} Component={AttachFileForm} />;
};
