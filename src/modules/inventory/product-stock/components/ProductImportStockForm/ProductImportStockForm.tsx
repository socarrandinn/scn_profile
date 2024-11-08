import { FormEventHandler, memo } from 'react';
import { Form } from '@dfl/mui-react-common';
import { Button, Grid, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ImportDownWhite from '../Icons/DownloadIcon';
import FileDropZone, { TYPE_DROP } from 'components/FileDropZone/FileDropZone';

type ProductImportStockFormProps = {
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const ACCEPT_ONLY_EXCEL = {
  'application/vnd.ms-excel': ['.xls'],
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
};
export const MAX_SIZE_FILE = 5 * 1024 * 1024; // 5mb

const ProductImportStockForm = ({ control, isLoading, onSubmit }: ProductImportStockFormProps) => {
  const { t } = useTranslation('stock');

  return (
    <>
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form-import-stock'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }}>
          <Grid item xs={12}>
            <Button
              href={'../../../../../stock/product-stock.xlsx'}
              download='products-stock.xlsx'
              target='_blank'
              variant='contained'
              fullWidth
              sx={{ minHeight: 44 }}
            >
              <Stack gap={1} flexDirection={'row'}>
                <ImportDownWhite />
                {t('warehouse.import.downloadTemplate')}
              </Stack>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <FileDropZone
              name='files'
              dropTitle={t('stock:warehouse.import.fields.uploadFile')}
              type={TYPE_DROP.FILE}
              control={control}
              required
              inputProps={{
                accept: ACCEPT_ONLY_EXCEL,
                maxFiles: 1,
                maxSize: MAX_SIZE_FILE,
              }}
            />
          </Grid>
        </Grid>
      </Form>
    </>
  );
};

export default memo(ProductImportStockForm);
