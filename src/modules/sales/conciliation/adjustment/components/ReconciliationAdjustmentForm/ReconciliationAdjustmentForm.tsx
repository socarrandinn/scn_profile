import { FlexBox, Form, FormSelectField, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Button, Grid, Link, MenuItem } from '@mui/material';
import { map } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

type ReconciliationAdjustmentFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: any;
  watch: any;
};

const ReconciliationAdjustmentForm = ({
  error,
  control,
  isLoading,
  onSubmit,
  watch,
}: ReconciliationAdjustmentFormProps) => {
  const { t } = useTranslation('providerProduct');
  const [searchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const detailId = searchParams.get('details');
  const data = watch('conciliation');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form-adjust'} dark>
        <Grid
          container
          spacing={{
            xs: 1,
            md: 2,
          }}
          columns={{
            xs: 4,
            sm: 8,
            md: 12,
          }}
        >
          <Grid item xs={6}>
            <FormSelectField
              disabled={!!detailId}
              fullWidth
              autoFocus
              required
              name='adjustment.type'
              label={'Tipo'}
              children={map(['ADDED', 'DISCOUNT'], (el) => (
                <MenuItem key={el} value={el}>
                  {t(`${el}`)}
                </MenuItem>
              ))}
            />
          </Grid>
          <Grid item xs={6}>
            <FormTextField
              disabled={!!data || !!detailId}
              type={'number'}
              fullWidth
              autoFocus
              required
              name='adjustment.value'
              label={'Total a Ajustar'}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormSelectField
              disabled={!!entityId || !!detailId}
              fullWidth
              autoFocus
              required
              name='provider.type'
              label={'Tipo de Proveedor'}
              children={map(['PRODUCT', 'LOGISTIC', 'CARRIER'], (valuel) => (
                <MenuItem key={valuel} value={valuel}>
                  {t(`${valuel}`)}
                </MenuItem>
              ))}
            />
          </Grid>
          {/*  <Grid item md={6} xs={12}>
            <FromSelectProvider
              name='provider.id'
              typeProvider={typeProvider}
              label={'Proveedor'}
              disabled={typeProvider === '' || !!entityId || !!detailId}
              defaultName={defaultValueProvider?.name}
            />
          </Grid> */}
          <Grid item xs={12}>
            <FormTextField
              disabled={!!entityId || !!detailId}
              fullWidth
              required
              multiline
              minRows={3}
              name='description'
              label={'Descripción'}
            />
          </Grid>
          {data && (
            <FlexBox width={'100%'} justifyContent={'flex-end'} mt={2}>
              <Link href={`/conciliations/${data as string}/products`}>
                <Button variant='outlined'>Conciliación Asociada</Button>
              </Link>
            </FlexBox>
          )}
        </Grid>
      </Form>
    </div>
  );
};

export default ReconciliationAdjustmentForm;
