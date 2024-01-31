import { useTranslation } from 'react-i18next';
import { FormTextField } from '@dfl/mui-react-common';
import { FormHelperText } from '@mui/material';
import { SelectSupplier } from '../components/SelectSupplier';

interface SuppliersCommissionProps {
  helperText?: string;
}

const SupplierCommissionContainer = ({ helperText }: SuppliersCommissionProps) => {
  const { t } = useTranslation('supplier');
  return (
    <>
      <SelectSupplier name={'suppliers'} label={t('list')} />
      <br />
      <FormTextField
        type='number'
        fullWidth
        autoFocus
        required
        name={'commission'}
        label={t('fields.commission')}
        inputProps={{
          inputMode: 'numeric',
          step: 0.1,
        }}
      />

      {helperText ? <FormHelperText>{helperText}</FormHelperText> : <></>}
    </>
  );
};

export default SupplierCommissionContainer;
