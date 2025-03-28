import { FormEventHandler, memo, useMemo } from 'react';
import { Form } from '@dfl/mui-react-common';
import { Button, Grid, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ACCEPT_ONLY_EXCEL, MAX_SIZE_FILE } from 'components/FileDropZone/constants/common';
import { FileInputDropZone } from 'components/FileDropZone';
import DownloadIcon from 'components/icons/DownloadIcon';
import OrderStatusImportLoading from './OrderStatusImportLoading';
import { IOrderStatusSummary } from 'modules/sales/sub-orders/interfaces';
import OrderStatusImportSummary from '../OrderStatusImportDetails/OrderStatusImportSummary';

type OrderStatusImportFormProps = {
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  summary?: IOrderStatusSummary;
  successData?: any;
  isSuccess?: boolean;
  reset?: any;
};

const OrderStatusImportForm = ({
  control,
  isLoading,
  onSubmit,
  summary,
  successData,
  reset,
}: OrderStatusImportFormProps) => {
  const { t } = useTranslation('common');

  const hazShow = useMemo(() => [isLoading, !!summary?.summary].some((s) => s), [isLoading, summary]);

  return (
    <>
      <Form
        onSubmit={onSubmit}
        reset={reset}
        control={control}
        isLoading={isLoading}
        size={'small'}
        id={'order-status-import-form'}
        dark
      >
        <Grid container spacing={{ xs: 1, md: 2 }}>
          {!hazShow && (
            <Grid item xs={12}>
              <Button
                href={'/order/order-status-import.xlsx'}
                download='order-status-import.xlsx'
                target='_blank'
                variant='contained'
                fullWidth
                color='success'
                sx={{ minHeight: 44 }}
              >
                <Stack gap={1} flexDirection={'row'} color={'#fff'}>
                  <DownloadIcon />
                  {t('downloadTemplate')}
                </Stack>
              </Button>
            </Grid>
          )}

          <Grid item xs={12}>
            <FileInputDropZone
              name='file'
              dropTitle={t('common:uploadFile')}
              control={control}
              required
              showDropzoneWrapper={!isLoading}
              inputProps={{
                accept: ACCEPT_ONLY_EXCEL,
                maxFiles: 1,
                maxSize: MAX_SIZE_FILE,
              }}
            />
            <OrderStatusImportLoading isLoading={isLoading}>
              <OrderStatusImportSummary summary={summary} successData={successData} />
            </OrderStatusImportLoading>
          </Grid>
        </Grid>
      </Form>
    </>
  );
};

export default memo(OrderStatusImportForm);
