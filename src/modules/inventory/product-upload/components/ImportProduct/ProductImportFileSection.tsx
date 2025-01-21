import { memo, useCallback, useEffect } from 'react';
import { FormFieldControl, FormTextFieldProps } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { Stack } from '@mui/material';
import { UseFormSetValue } from 'react-hook-form';
import { useImportProductFile } from '../../hooks/useImportProductFile';
import { IProductAction } from '../../interfaces/IProductImport';
import { ACCEPT_ONLY_EXCEL, MAX_SIZE_FILE } from 'components/FileDropZone/constants/common';
import { FileInputDropZone } from 'components/FileDropZone';

type Props = {
  isImportButton?: boolean;
  setValue: UseFormSetValue<IProductAction>;
  setData: any;
};
type FormFileUploadFieldProps = FormTextFieldProps & Props;

const FormFileUploadField = ({ isImportButton, setValue, setData, ...props }: FormFileUploadFieldProps) => {
  const { onProductUpload, isLoading, data, error, isSuccess, isError } = useImportProductFile(setValue);
  const { t } = useTranslation();

  useEffect(() => {
    if (isSuccess) setData(data);
    if (isError) setData(error);
  }, [data, error, isError, isSuccess, setData]);

  const handleUploadStock = useCallback(
    async (newFileData: FormData) => {
      onProductUpload(newFileData);
    },
    [onProductUpload],
  );

  return (
    <FormFieldControl
      {...props}
      Component={FileInputDropZone}
      // @ts-ignore
      onExternalChange={handleUploadStock}
      dropTitle={t('stock:warehouse.import.fields.uploadFile')}
      required
      showDropzoneWrapper={true}
      isLoading={isLoading}
      // documentName='Productos.xlsx'
      inputProps={{
        accept: ACCEPT_ONLY_EXCEL,
        maxFiles: 1,
        maxSize: MAX_SIZE_FILE,
      }}
    />
  );
  /* return (
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
  ); */
};

const ImportProductFile = ({ isImportButton, setValue, setData }: Props) => {
  return (
    <Stack>
      <FormFileUploadField
        // label='products'
        isImportButton={isImportButton}
        name={'file'}
        setValue={setValue}
        setData={setData}
      />
    </Stack>
  );
};

export default memo(ImportProductFile);
