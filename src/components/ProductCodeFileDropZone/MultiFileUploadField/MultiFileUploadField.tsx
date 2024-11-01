import { Grid, styled, Stack, LinearProgress, Typography } from '@mui/material';
import { memo, useCallback } from 'react';
import { FileError, useDropzone } from 'react-dropzone';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { useTranslation } from 'react-i18next';
import AcceptedFile from '../AcceptedFile';
import RejectionFile from '../RejectionFile';
import { isEmpty } from 'lodash';
import { LoadingButton } from '@dfl/mui-react-common';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

export const StyledDragZone = styled(Grid)<{ disabled: boolean }>(({ theme, disabled }: any) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  wordSpacing: '2px',
  padding: '2px',
  cursor: disabled ? 'default' : 'pointer',
  borderWidth: disabled ? '1px' : '2px',
  opacity: disabled ? 0.5 : 1,
  borderRadius: '2px',
  // @ts-ignore
  borderColor: disabled ? theme.palette.secondary.light : theme.palette.primary.main,
  borderStyle: 'dashed',
  // @ts-ignore
  backgroundColor: disabled ? theme.palette.grey['400'] : theme.palette.primary.light,
  // @ts-ignore
  color: disabled ? theme.palette.primary.borderColor : theme.palette.primary.main,
  '&:hover': !disabled
    ? {
      // @ts-ignore
      backgroundColor: theme.palette.primary.main,
      // @ts-ignore
      borderColor: theme.palette.primary.light,
      // @ts-ignore
      color: theme.palette.primary.light,
    }
    : {},
  outline: 'none',
  transition: 'border .24s ease-in-out',
}));

type ProductUploadFieldProps = {
  disabled?: boolean;
  name: string;
  value: any[];
  onChange: (file: FormData) => void;
  onOpen: (open: boolean) => void;
  inputProps: any;
  warehouse: string;
  isImportButton?: boolean;
};

export interface IRejectFile {
  file: File;
  errors: FileError[];
}

const ProductUploadField = ({
  onChange,
  warehouse,
  isImportButton = false,
  inputProps = {},
  disabled,
}: ProductUploadFieldProps) => {
  const { t } = useTranslation('product');
  const { accept, maxFiles, maxSize, noDrag, readOnly, isLoading } = inputProps;

  const onDrop = useCallback(
    async (accFiles: File[]) => {
      if (!isEmpty(accFiles)) {
        const file = accFiles?.[0];
        const formData = new FormData();
        formData.append('files', file, file?.name);
        formData.append('warehouse', warehouse);
        onChange(formData);
      }
    },
    [onChange, warehouse],
  );

  const { getRootProps, getInputProps, acceptedFiles, fileRejections } = useDropzone({
    onDrop,
    maxFiles,
    accept: { ...accept },
    noDrag,
    maxSize: maxSize * 1000 * 1024,
    disabled: disabled || readOnly || isLoading,
  });

  if (isImportButton) {
    return (
      <LoadingButton
        disabled
        sx={{
          marginBottom: 'auto',
          width: 150,
        }}
        variant='outlined'
        loading={isLoading}
        color='warning'
        startIcon={<FileUploadOutlinedIcon />}
        {...getRootProps()}
      >
        {t('common:import')}

        <input {...getInputProps()} />
      </LoadingButton>
    );
  }

  return (
    <>
      <Grid container>
        <StyledDragZone item xs={12} md={12} {...getRootProps()} disabled={disabled || readOnly}>
          <Stack
            height={50}
            gap={1}
            alignItems={'center'}
            justifyContent={'center'}
            flexDirection={{
              xs: 'column',
              md: 'row',
            }}
          >
            <input {...getInputProps()} />
            <CloudUploadOutlinedIcon />
            <Typography textAlign={'center'}>{t('product:warehouseStockModal:dropzone.placeholder')}</Typography>
          </Stack>
        </StyledDragZone>

        <Stack gap={1} width={'100%'} mt={1}>
          {acceptedFiles?.map((file: File, index: number) =>
            isLoading ? (
              <LinearProgress key={index} />
            ) : (
              <AcceptedFile key={index} file={file} disabled={disabled || readOnly} />
            ),
          )}
          {fileRejections?.map((file: IRejectFile, index: number) => (
            <RejectionFile key={index} file={file} error={true} disabled={disabled || readOnly} />
          ))}
        </Stack>
      </Grid>
    </>
  );
};

export default memo(ProductUploadField);
