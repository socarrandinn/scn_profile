import { FormEventHandler, memo, useMemo } from 'react';
import { Form } from '@dfl/mui-react-common';
import { Button, Grid, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ImportDownWhite from '../Icons/DownloadIcon';
import StockImportLoading from './StockImportLoading';
import { StockImportSummary } from '../StockImportDetails';
import { ACCEPT_ONLY_EXCEL, MAX_SIZE_FILE } from 'components/FileDropZone/constants/common';
import { FileInputDropZone } from 'components/FileDropZone';
import { IStockSummary } from '../../interfaces/IStockSummary';
import { useSupplierRelationContext } from '../ErrorContents/SupplierNoRelation/hooks/useSupplierNotRelationContext';

type StockImportFormProps = {
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  summary?: IStockSummary;
  successData?: any;
  isSuccess?: boolean;
  reset?: any;
};

const StockImportForm = ({ control, isLoading, onSubmit, summary, successData, reset }: StockImportFormProps) => {
  const { t } = useTranslation('stock');

  // reset status not relation supplier-warehouse
  const resetState = useSupplierRelationContext((state) => state.resetState);
  resetState();

  const hazShow = useMemo(() => [isLoading, !!summary].some((s) => s), [isLoading, summary]);

  return (
    <>
      <Form
        onSubmit={onSubmit}
        reset={reset}
        control={control}
        isLoading={isLoading}
        size={'small'}
        id={'form-import-stock'}
        dark
      >
        <Grid container spacing={{ xs: 1, md: 2 }}>
          {!hazShow && (
            <Grid item xs={12}>
              <Button
                href={'/product/product-stock-template.xlsx'}
                download='product-stock-template.xlsx'
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
          )}

          <Grid item xs={12}>
            <FileInputDropZone
              name='file'
              dropTitle={t('stock:warehouse.import.fields.uploadFile')}
              control={control}
              required
              showDropzoneWrapper={!isLoading}
              // documentName={`${t('common:productStock')}.xlsx`}
              inputProps={{
                accept: ACCEPT_ONLY_EXCEL,
                maxFiles: 1,
                maxSize: MAX_SIZE_FILE,
              }}
            />
            <StockImportLoading isLoading={isLoading}>
              <StockImportSummary summary={summary} successData={successData} />
            </StockImportLoading>
          </Grid>
        </Grid>
      </Form>
    </>
  );
};

export default memo(StockImportForm);
