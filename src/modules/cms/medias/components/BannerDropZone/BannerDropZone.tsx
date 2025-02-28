import { memo, ReactNode } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { Box, Typography, CircularProgress, FormHelperText, Stack, BoxProps } from '@mui/material';
import { useFieldArray, useFormState } from 'react-hook-form';
import { DropzoneWrapper } from '../../../../../components/FileDropZone/styled';
import { isEmpty, isString } from 'lodash';
import { ChildrenProps, ConditionContainer, FormLabel, HandlerError, TextFieldProps } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import FileDropRejections from '../../../../../components/FileDropZone/FileDropRejections';
import { FILE_ERROR } from '../../../../../components/FileDropZone/constants/error';
import { getMessageByPath } from 'utils/file-utils';
import useUploadMedia from '../../hooks/useUploadMedia';
import ImageIcon from 'components/libs/Icons/ImageIcon';
import { TransTypography } from 'components/TransTypography';
import FileContent from 'components/FileDropZone/FileContent';
import { IImageOption } from 'modules/common/interfaces';

type DropzoneProps = {
  isDelete?: boolean;
  isDownload?: boolean;
};
export enum TYPE_DROP {
  MEDIA = 'MEDIA',
}

type BannerDropZoneProps = TextFieldProps & {
  name: string;
  control: any;
  actions?: DropzoneProps;
  inputProps: DropzoneOptions;
  type?: TYPE_DROP;
  dropTitle?: ReactNode;
  showDropzoneWrapper?: boolean;
  documentName?: string;
  boxSx?: BoxProps['sx'];
  imageOption: IImageOption
};

const BannerDropZone = ({
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
  boxSx,
  imageOption,
}: BannerDropZoneProps & ChildrenProps) => {
  const { t } = useTranslation('errors');
  const { accept, maxSize, maxFiles, disabled } = inputProps;
  const { fields, append, remove } = useFieldArray({ control, name });
  const { onChange, isUploading, error } = useUploadMedia(append);

  const { errors } = useFormState({ control, name, exact: true });
  const messengerError = getMessageByPath(errors, name);

  const onDrop = (acceptedFiles: any) => {
    for (const file of acceptedFiles) {
      try {
        onChange({ file, imageOption });
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
    disabled: isUploading || disabled,
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

        {/*  // DropzoneWrapper */}
        <ConditionContainer active={showDropzoneWrapper} alternative={<> {children}</>}>
          <DropzoneWrapper
            {...getRootProps()}
            isEmptyImages={isEmpty(fields) ?? false}
            isDragActive={isDragActive}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mx: 'auto',
              ...boxSx,
            }}
          >
            <input {...getInputProps()} />
            <Typography variant='body1'>
              {isUploading ? (
                <Box>
                  <CircularProgress />
                </Box>
              ) : (
                dropTitle ?? <DropTitle dropTitle={dropTitle} />
              )}
            </Typography>
          </DropzoneWrapper>
        </ConditionContainer>

        {/* // list to files */}
        <FileContent
          {...{ fields, actions, isUploading, remove, open, maxFiles, type: TYPE_DROP.MEDIA, documentName }}
        />
        {/*  <DropBannerMedia
          {...{ fields, actions, isUploading, remove, open, maxFiles, type: TYPE_DROP.MEDIA, documentName }}
        /> */}

        {/* // file by errors */}
        <FileDropRejections rejections={fileRejections} maxFiles={maxFiles || undefined} />
      </FormLabel>
    </Stack>
  );
};

export default memo(BannerDropZone);

const DropTitle = ({ dropTitle, imageSize }: any) => {
  return (
    <Stack sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <ImageIcon sx={{ fontSize: '50px' }} />
      <TransTypography variant='body2' message={dropTitle} values={{ imageSize }} />
    </Stack>
  );
};
