import { memo, useState } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { Box, Typography, CircularProgress, FormHelperText, Stack } from '@mui/material';
import { useController, useFormState } from 'react-hook-form';
import { DropzoneWrapper } from './styled';
import { isEmpty, isString } from 'lodash';
import { DropTitle } from './FileDropClick';
import {
  ChildrenProps,
  ConditionContainer,
  FormLabel,
  HandlerError,
  TextFieldProps,
  useDFLForm,
} from '@dfl/mui-react-common';
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
  onExternalChange?: (file: any) => void;
  isLoading?: boolean;
  setData?: any;
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
  onExternalChange,
  isLoading,
  setData,
}: FileInputDropZoneProps & ChildrenProps) => {
  const { t } = useTranslation('errors');
  const { accept, maxSize, maxFiles } = inputProps;
  const { reset, control: formControl } = useDFLForm();
  const [localName, setLocalName] = useState(undefined);

  const _control = formControl || control;
  const {
    field: { value, onChange },
    formState: { isLoading: isLoadingForm },
    fieldState: { error },
  } = useController({ name, control: _control });

  const { errors } = useFormState({ control: _control, name, exact: true });
  const messengerError = getMessageByPath(errors, name);

  const onDrop = (acceptedFiles: any) => {
    if (onExternalChange) {
      const file = acceptedFiles?.[0];
      const formData = new FormData();
      formData.append('file', file, file?.name);
      setLocalName(file?.name);
      onExternalChange(formData);
    }
    for (const file of acceptedFiles) {
      onChange(file);
    }
  };

  const onRemove = () => {
    onChange(null);
    reset?.();
    setData?.(undefined);
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
        {value && error && <HandlerError error={error} errors={FILE_ERROR} />}

        {/* // file */}
        <Box sx={{ mt: 1 }}>
          {value !== null && value instanceof File && (
            <FileItem
              index={0}
              {...{ remove: onRemove, field: value, type: TYPE_DROP.FILE, documentName: documentName || localName }}
            />
          )}
        </Box>

        {/*  // DropzoneWrapper */}
        <ConditionContainer active={showDropzoneWrapper} alternative={<> {children}</>}>
          <DropzoneWrapper {...getRootProps()} isEmptyImages={isEmpty(value) ?? false} isDragActive={isDragActive}>
            <input {...getInputProps()} />
            <Typography variant='body1'>
              {isLoading || isLoadingForm ? (
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
