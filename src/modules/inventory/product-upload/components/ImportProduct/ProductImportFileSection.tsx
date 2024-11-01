import React, { memo, useCallback, useEffect } from 'react';
import { FormFieldControl, FormTextFieldProps } from '@dfl/mui-react-common';
import { ImportFile } from 'components/ProductCodeFileDropZone/MultiFileUploadField';
import { useTranslation } from 'react-i18next';
import { Stack, Typography } from '@mui/material';
import { UseFormSetValue } from 'react-hook-form';
import { useImportProductFile } from '../../hooks/useImportProductFile';
import { IProductAction } from '../../interfaces/IProductImport';

type Props = {
  isImportButton?: boolean;
  setValue: UseFormSetValue<IProductAction>;
  setData: any;
};
type FormFileUploadFieldProps = FormTextFieldProps & Props;

const FormFileUploadField = ({ isImportButton, setValue, setData, ...props }: FormFileUploadFieldProps) => {
  const { onproductUpload, isLoading, data } = useImportProductFile(setValue);

  useEffect(() => {
    setData(data);
  }, [data, setData]);

  const handleUploadStock = useCallback(
    (newFileData: FormData) => {
      onproductUpload(newFileData);
    },
    [onproductUpload],
  );

  return (
    <FormFieldControl
      {...props}
      Component={ImportFile}
      // @ts-ignore
      onChange={(handleUploadStock)}
      inputProps={{
        maxFiles: 1,
        maxSize: 5,
        noDrag: false,
        accept: '.xlsx',
        isLoading,
      }}
    />
  );
};

const ImportProductFile = ({ isImportButton, setValue, setData }: Props) => {
  const { t } = useTranslation('productUpload');
  return (
    <Stack>
      <Typography
        variant='h6'
        sx={{
          marginBottom: 1,
          marginTop: 0,
          textTransform: 'none',
          whiteSpace: 'normal',
          fontSize: 13,
          fontWeight: 500,
          lineHeight: 1.5,
        }}
      >
        {t('titleDropZone')}
      </Typography>
      <FormFileUploadField
        label='Prorro'
        isImportButton={isImportButton}
        name={'file'}
        setValue={setValue}
        setData={setData}
      />
    </Stack>
  );
};

export default memo(ImportProductFile);
