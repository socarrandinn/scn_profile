import { FC, memo, useCallback } from 'react';
import { FormFieldControl, FormTextFieldProps } from '@dfl/mui-react-common';
import { MultiFileUploadField } from 'components/ProductCodeFileDropZone/MultiFileUploadField';
import { UseFormSetValue } from 'react-hook-form';
import { IAddProductStock } from '../../interfaces/IStock';
import { useImportProductCodeByExcel } from '../../hooks/useImportProductCodeByExcel';

const allowedExtensions = {
  'application/vnd.ms-excel': [],
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [],
};

type Props = {
  warehouse: string;
  onOpen?: () => void;
  isImportButton?: boolean;
  setValue: UseFormSetValue<IAddProductStock>;
};
type FormMultiFileUploadFieldFieldProps = FormTextFieldProps & Props;

const FormMultiFileUploadFieldField: FC<FormMultiFileUploadFieldFieldProps> = ({
  warehouse,
  open,
  onOpen,
  isImportButton,
  setValue,
  ...props
}: any) => {
  const { onUploadStock, isLoading } = useImportProductCodeByExcel(onOpen, setValue);

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
      Component={MultiFileUploadField}
      isImportButton={isImportButton}
      warehouse={warehouse}
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

const ProductFile = ({ warehouse, setValue, onOpen, isImportButton }: Props) => {
  return (
    <FormMultiFileUploadFieldField
      onOpen={onOpen}
      isImportButton={isImportButton}
      warehouse={warehouse}
      setValue={setValue}
      name='fileStock'
    />
  );
};

export default memo(ProductFile);
