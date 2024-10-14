import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SelectStoreField } from 'modules/inventory/product/components/SelectStoreField/';
import { StoreAreaSelect } from 'modules/inventory/settings/warehouse-area/components/StoreAreaSelect';

type AddAviableProductFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const AddAviableProductForm = ({ error, control, isLoading, onSubmit }: AddAviableProductFormProps) => {
  const { t } = useTranslation('product');

  return (
        <div>
            <HandlerError error={error}/>
            <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
                <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12} mb={1}>
                        <SelectStoreField name='warehouse' placeholder={t('product:section.inventory.warehouse')}/>
                    </Grid>
                    <Grid item xs={12} mb={1}>
                        <StoreAreaSelect name='warehouseArea' placeholder={t('product:section.inventory.warehouseArea')}/>
                    </Grid>
                    <Grid item xs={12}>
                        <FormTextField
                            name='quantity'
                            type='number'
                            inputProps={{
                              inputMode: 'numeric',
                              pattern: '[0-9]*',
                              min: 1,
                            }}
                            helperText={t('stock.units_plural')}
                            label={t('stock.stock')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormTextField fullWidth multiline minRows={3} name='note' label={t('fields.description')}/>
                    </Grid>
                </Grid>
            </Form>
        </div>
  );
};

export default memo(AddAviableProductForm);
