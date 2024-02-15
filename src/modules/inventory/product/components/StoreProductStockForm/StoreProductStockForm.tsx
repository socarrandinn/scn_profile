import { FormEventHandler, memo, useCallback } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Button, Grid, Stack, Alert, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import { useFieldArray, UseFormResetField, UseFormWatch, UseFormSetError } from 'react-hook-form';
import ProductList from '../ProductStockList/ProductStockList';
import { isEmpty } from 'lodash';
import { useToggle } from '@dfl/hook-utils';
import { ProductFileSection } from '../ProductFileSection';
import { IAddProductStock } from '../../interfaces/IStock';
import { PRODUCT_STOCK_OPERATIONS } from '../../constants/stock-operations.constants';
import { ProductFile } from '../ProductFile';
import { TextFieldLabel } from 'components/TextFieldLabel';
import { ImporterProductCodeAlert } from 'components/ImportarProductCodeAlert';

type ProductStockFormProps = {
  error: any;
  errors: any;
  stores: string;
  control: any;
  setValue: any;
  setError: UseFormSetError<IAddProductStock>;
  clearErrors: any;
  resetField: UseFormResetField<IAddProductStock>;
  watch: UseFormWatch<IAddProductStock>;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const ProductStockForm = ({
  error,
  errors,
  control,
  watch,
  setValue,
  setError,
  clearErrors,
  resetField,
  isLoading,
  onSubmit,
  stores,
}: ProductStockFormProps) => {
  const { t } = useTranslation(['product', 'common']);
  const { fields, append, remove, update } = useFieldArray({ control, name: 'items' });
  const { isOpen, onClose, onOpen } = useToggle();

  const handleOnSubmit = useCallback(
    (event: any) => {
      event?.preventDefault();
      event?.stopPropagation();
      onSubmit?.(event);
    },
    [onSubmit],
  );

  const onAddProductStock = useCallback(() => {
    const isCode = isEmpty(watch('codeProduct'));

    if (isCode) {
      setError('codeProduct', { type: 'required', message: 'product:storeStockModal:error:required' });
    } else {
      resetField('codeProduct', { defaultValue: watch('codeProduct') });
    }

    if (!isCode) {
      append({
        item: watch('codeProduct'),
        quantity: 0,
        operation: PRODUCT_STOCK_OPERATIONS.ADDED,
      });
      resetField('codeProduct', { defaultValue: '' });
      clearErrors();
    }
  }, [clearErrors, resetField, append, setError, watch]);

  const handleOnClose = useCallback(() => {
    setValue('listErrorFile', undefined);
    onClose();
  }, [setValue, onClose]);

  return (
    <>
      <HandlerError error={error} />
      <Form
        onSubmit={handleOnSubmit}
        control={control}
        isLoading={isLoading}
        size={'small'}
        id={'product-stock-form'}
      >
        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} alignItems='center' pt={1}>
          <Grid item xs={12}>
            <Stack flexDirection={'row'} gap={2}>
              <FormTextField label={t('storeStockModal.codeProduct')} name='codeProduct' dark={false} />
              <Button
                onClick={onAddProductStock}
                variant='contained'
                startIcon={<AddIcon />}
                sx={{
                  marginBottom: 'auto',
                  width: 150,
                }}
              >
                {t('common:add')}
              </Button>

              <ProductFile isImportButton={true} store={stores} setValue={setValue} onOpen={onOpen} />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            {errors.errorProduct ? (
              <Alert onClose={() => clearErrors()} severity='error'>
                {t(errors?.errorProduct?.message)}
              </Alert>
            ) : undefined}
          </Grid>

          <Grid item xs={12} mt={3}>
            <ProductList items={fields} {...{ remove, update, setError, stores }} />
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ mt: 2, mb: 1 }} />
          </Grid>

          <Grid item xs={12}>
            <ProductFileSection name='file' setValue={setValue} isImportButton={false} />
          </Grid>
          <Grid item xs={12}>
            <Stack>
              <TextFieldLabel>{`${t('description')} (${t('note')})`}</TextFieldLabel>
              <FormTextField
                name='note'
                type='text'
                multiline
                minRows={3}
                variant='outlined'
                placeholder={`${t('description')} (${t('note')})`}
              />
            </Stack>
          </Grid>
        </Grid>
      </Form>

      <ImporterProductCodeAlert
        store={stores}
        title={t('product:storeStockModal:dropzone:title')}
        append={append}
        setValue={setValue}
        control={control}
        watch={watch}
        error={''}
        isOpen={isOpen}
        onClose={handleOnClose}
        reset={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </>
  );
};

export default memo(ProductStockForm);
