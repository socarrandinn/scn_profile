import { memo, useCallback, useEffect } from 'react';
import { Form, FormFieldControl, FormTextFieldProps } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { Stack } from '@mui/material';
import { useImportProductFile } from '../../hooks/useImportProductFile';
import { ACCEPT_ONLY_EXCEL, MAX_SIZE_FILE } from 'components/FileDropZone/constants/common';
import { FileInputDropZone } from 'components/FileDropZone';

type Props = {
  isImportButton?: boolean;
  setData: any;
};
type FormFileUploadFieldProps = FormTextFieldProps & Props;

const FormFileUploadField = ({ isImportButton, setData, ...props }: FormFileUploadFieldProps) => {
  const { onProductUpload, isLoading, data, error, isSuccess, isError, control } = useImportProductFile();
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
    <Form control={control} isLoading={isLoading} size={'small'} id='product-import'>
      <FormFieldControl
        {...props}
        Component={FileInputDropZone}
        // @ts-ignore
        onExternalChange={handleUploadStock}
        dropTitle={t('stock:warehouse.import.fields.uploadFile')}
        required
        showDropzoneWrapper={true}
        isLoading={isLoading}
        // documentName={`${t('common:product')}.xlsx`}
        inputProps={{
          accept: ACCEPT_ONLY_EXCEL,
          maxFiles: 1,
          maxSize: MAX_SIZE_FILE,
        }}
      />
    </Form>
  );
};

const ImportProductFile = ({ isImportButton, setData }: Props) => {
  return (
    <Stack>
      <FormFileUploadField
        // label='products'
        isImportButton={isImportButton}
        name={'file'}
        setData={setData}
      />
    </Stack>
  );
};

export default memo(ImportProductFile);
