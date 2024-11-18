import { memo } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { Box, Typography, CircularProgress, FormHelperText, Stack } from '@mui/material';
import { useController, useFormState } from 'react-hook-form';
import { DropzoneWrapper } from './styled';
import { isEmpty, isString } from 'lodash';
import { DropTitle } from './FileDropClick';
import { ChildrenProps, ConditionContainer, FormLabel, HandlerError, TextFieldProps } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import FileDropRejections from './FileDropRejections';
import { FILE_ERROR } from './constants/error';
import { getMessageByPath } from 'utils/file-utils';

import FileItem from './FileTypes/File/FileItem';

export enum TYPE_DROP {
  MEDIA = 'MEDIA',
  FILE = 'FILE',
}

type FileInputDropZoneProps = TextFieldProps & {
  name: string;
  control: any;
  inputProps: DropzoneOptions;
  dropTitle?: string;
  showDropzoneWrapper?: boolean;
  documentName?: string;
};

const FileInputDropZone = ({
  control,
  name,
  inputProps,
  required,
  label,
  dropTitle,
  children,
  showDropzoneWrapper = false,
  documentName,
}: FileInputDropZoneProps & ChildrenProps) => {
  const { t } = useTranslation('errors');
  const { accept, maxSize, maxFiles } = inputProps;
  const {
    field: { value, onChange },
    fieldState: { error },
    formState: { isLoading },
  } = useController({ name, control });

  const { errors } = useFormState({ control, name, exact: true });
  const messengerError = getMessageByPath(errors, name);

  const onDrop = (acceptedFiles: any) => {
    for (const file of acceptedFiles) {
      onChange(file);
    }
  };

  const onRemove = () => {
    onChange(null);
  };

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    accept,
    maxFiles,
    maxSize,
    onDrop,
    disabled: isLoading,
    noClick: !isEmpty(value),
    noKeyboard: !isEmpty(value),
  });

  const formLabel = required && isString(label) ? `${label}*` : label;

  return (
    <Stack flexGrow={1} width={'100%'}>
      <FormLabel label={formLabel}>
        {/* // errors */}
        {messengerError ? <FormHelperText error={true}>{t(messengerError)}</FormHelperText> : <></>}
        <HandlerError error={error} errors={FILE_ERROR} />

        {/* // file */}
        {value !== null && value instanceof File && (
          <FileItem index={0} {...{ remove: onRemove, field: value, type: TYPE_DROP.FILE, documentName }} />
        )}

        {/*  // DropzoneWrapper */}
        <ConditionContainer active={showDropzoneWrapper} alternative={<> {children}</>}>
          <DropzoneWrapper {...getRootProps()} isEmptyImages={isEmpty(value) ?? false} isDragActive={isDragActive}>
            <input {...getInputProps()} />
            <Typography variant='body1'>
              {isLoading ? (
                <Box>
                  <CircularProgress />
                </Box>
              ) : (
                <DropTitle type={TYPE_DROP.FILE} title={dropTitle} />
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

export default memo(FileInputDropZone);
