import { FormEventHandler, memo } from 'react';
import { Form, FormSelectField, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { FormSingleMediaUploaderField } from 'modules/common/components/MediaUploader';
import { Grid, MenuItem, Stack, Typography, AlertTitle, Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PRODUCT_STOCK_OPERATIONS } from '../../constants/stock-operations.constants';
import { map } from 'lodash';
import { useToggle } from '@dfl/hook-utils';

type StoreAreaFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  initValues?: any;
};

const UpdateAviableProductForm = ({ error, control, isLoading, onSubmit, initValues }: StoreAreaFormProps) => {
  const { t } = useTranslation('product');
  const { isOpen, onClose } = useToggle(true);

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {isOpen ? (
            <Grid item xs={12} mb={2}>
              <Alert security='info' onClose={onClose}>
                <AlertTitle>{t('info')}</AlertTitle>
                {t('updateStockDescription')}
              </Alert>
            </Grid>
          ) : undefined}

          <Grid item xs={12}>
            <Stack flexDirection={'row'} gap={2} alignItems={'start'}>
              <FormSelectField
                name='operation'
                required
                // label={t('cause.title')}
                placeholder={t('cause.title')}
                // eslint-disable-next-line react/no-children-prop
                children={map(PRODUCT_STOCK_OPERATIONS, (value: string, key: any) => (
                  <MenuItem key={key} value={value}>
                    <>{t(`stock.${value}`)}</>
                  </MenuItem>
                ))}
              />
              <Typography variant='body1' mt={1}>
                {t('in')}
              </Typography>
              <FormTextField
                name='quantity'
                type='number'
                inputProps={{
                  // max: !isAdd ? data?.data?.stock : null,
                  inputMode: 'numeric',
                  pattern: '[0-9]*',
                  min: 0,
                }}
                helperText={t('stock.units_plural')}
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <FormSingleMediaUploaderField required name='name' label={t('section.inventory.document')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField name='note' type='text' label={t('fields.description')} fullWidth multiline minRows={3} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(UpdateAviableProductForm);
