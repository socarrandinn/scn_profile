import { FormEventHandler, memo } from 'react';
import { Form } from '@dfl/mui-react-common';
import { Button, Grid, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ImportDownWhite from '../Icons/DownloadIcon';
import FileDropZone, { TYPE_DROP } from 'components/FileDropZone/FileDropZone';
import StockImportLoading from './StockImportLoading';
import { StockImportSummary } from '../StockImportDetails';
import { ACCEPT_ONLY_EXCEL, MAX_SIZE_FILE } from 'components/FileDropZone/constants/common';

type StockImportFormProps = {
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const StockImportForm = ({ control, isLoading, onSubmit }: StockImportFormProps) => {
  const { t } = useTranslation('stock');

  return (
    <>
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form-import-stock'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }}>
          <Grid item xs={12}>
            <Button
              href={'/product-stock/product-stock-template.xlsx'}
              download='products-stock.xlsx'
              target='_blank'
              variant='contained'
              fullWidth
              color='success'
              sx={{ minHeight: 44 }}
            >
              <Stack gap={1} flexDirection={'row'} color={'#fff'}>
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
              showDropzoneWrapper
              // documentName='Plantilla productos.xlsx'
              inputProps={{
                accept: ACCEPT_ONLY_EXCEL,
                maxFiles: 1,
                maxSize: MAX_SIZE_FILE,
              }}
            />
            <StockImportLoading isLoading={isLoading}>
              <StockImportSummary summary={undefined} />
            </StockImportLoading>
          </Grid>
        </Grid>
      </Form>
    </>
  );
};

export default memo(StockImportForm);
