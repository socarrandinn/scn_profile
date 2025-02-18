import { memo } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { Box, Typography, CircularProgress, FormHelperText, Stack } from '@mui/material';
import { useFieldArray, useFormState } from 'react-hook-form';
import useUploadDropZone from './hooks/useUploadDropZone';
import { DropzoneWrapper } from './styled';
import { isEmpty, isString } from 'lodash';
import { DropTitle } from './FileDropClick';
import {
  ChildrenProps,
  ConditionContainer,
  FormFieldControl,
  FormLabel,
  HandlerError,
  TextFieldProps,
} from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import FileDropRejections from './FileDropRejections';
import { FILE_ERROR } from './constants/error';
import { getMessageByPath } from 'utils/file-utils';
import FileContent from './FileContent';

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
  inputProps: DropzoneOptions;
  type?: TYPE_DROP;
  dropTitle?: string;
  showDropzoneWrapper?: boolean;
  documentName?: string;
};

const FileDropZone = ({
  type = TYPE_DROP.MEDIA,
  control,
  name,
  actions = { isDelete: true, isDownload: false },
  inputProps,
  required,
  label,
  dropTitle,
  children,
  showDropzoneWrapper = false,
  documentName,
}: FileDropZoneProps & ChildrenProps) => {
  const { t } = useTranslation('errors');
  const { accept, maxSize, maxFiles } = inputProps;
  const { fields, append, remove } = useFieldArray({ control, name });
  const { onChange, isUploading, error } = useUploadDropZone(append);

  console.log(fields, 'fields')

  const { errors } = useFormState({ control, name, exact: true });
  const messengerError = getMessageByPath(errors, name);

  console.log(errors, name)

  const onDrop = (acceptedFiles: any) => {
    for (const file of acceptedFiles) {
      try {
        onChange({ file, type });
      } catch (e) {
        console.error(error);
      }
    }
  };

  const { getRootProps, getInputProps, open, isDragActive, fileRejections } = useDropzone({
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
    <Stack flexGrow={1} width={'100%'}>
      <FormLabel label={formLabel}>
        {/* // errors */}
        {messengerError ? <FormHelperText error={true}>{t(messengerError)}</FormHelperText> : <></>}
        <HandlerError error={error} errors={FILE_ERROR} />

        {/* // list to files */}
        <FileContent {...{ fields, actions, isUploading, remove, open, maxFiles, type, documentName }} />

        {/*  // DropzoneWrapper */}
        <ConditionContainer active={showDropzoneWrapper} alternative={<> {children}</>}>
          <DropzoneWrapper {...getRootProps()} isEmptyImages={isEmpty(fields) ?? false} isDragActive={isDragActive}>
            <input {...getInputProps()} />
            <Typography variant='body1'>
              {isUploading ? (
                <Box>
                  <CircularProgress />
                </Box>
              ) : (
                <DropTitle type={type} title={dropTitle} />
              )}
            </Typography>
          </DropzoneWrapper>
        </ConditionContainer>

        {/* // file by errors */}
        <FileDropRejections rejections={fileRejections} maxFiles={maxFiles || undefined} />
      </FormLabel>
    </Stack>
  );
};

export default memo(FileDropZone);

export const FormFileDropZone = (props: FileDropZoneProps) => {
  return <FormFieldControl {...props} Component={FileDropZone} />;
};
