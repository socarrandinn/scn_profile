import { FC, memo, useCallback } from 'react';
import { FormFieldControl, FormTextFieldProps } from '@dfl/mui-react-common';
import { ImportFile } from 'components/ProductCodeFileDropZone/MultiFileUploadField';
import { UseFormSetValue } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Stack, Typography } from '@mui/material';
import { IAddProductStock } from '../../interfaces/IStock';
import { useImportInvoiceFile } from '../../hooks/useImportInvoiceFile';

const allowedExtensions = {
  'application/pdf': [],
};

type Props = {
  isImportButton?: boolean;
  setValue: UseFormSetValue<IAddProductStock>;
  name: string;
};
type FormMultiFileUploadFieldFieldProps = FormTextFieldProps & Props;

const FormMultiFileUploadFieldField: FC<FormMultiFileUploadFieldFieldProps> = ({
  isImportButton,
  setValue,
  ...props
}: any) => {
  const { onUploadStock, isLoading } = useImportInvoiceFile(setValue);

  const handleUploadStock = useCallback(
    (newFileData: FormData) => {
      setValue('listErrorFile', undefined);
      onUploadStock(newFileData);
    },
    [onUploadStock, setValue],
  );

  return (
    <FormFieldControl
      {...props}
      Component={ImportFile}
      isImportButton={isImportButton}
      onChange={handleUploadStock}
      inputProps={{
        maxFiles: 1,
        maxSize: 5,
        noDrag: false,
        accept: allowedExtensions,
        isLoading,
      }}
    />
  );
};

const ProductFile = ({ setValue, isImportButton, name }: Props) => {
  const { t } = useTranslation('product');
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
        {t('form.invoice.title')}
      </Typography>
      <FormMultiFileUploadFieldField label='Prorro' isImportButton={isImportButton} setValue={setValue} name={name} />
    </Stack>
  );
};

export default memo(ProductFile);
