import { Table } from '@dfl/mui-admin-layout';
import { Stack, Typography } from '@mui/material';
import CustomWidthTable from 'components/libs/table/contanier/CustomWidthTable';
import DetailHeaderAction from 'modules/inventory/product-stock/components/DetailHeaderAction/DetailHeaderAction';
import { dataErrorInsufficientStockColumn } from 'modules/inventory/product-stock/constants/data-error.columns';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
type DataErrorProps = {
  dataError: any[];
  onInitialClose: () => void;
};

enum REFERENCES {
  INSUFFICIENT_STOCK = 'QT0000',
}

const OrderStatusDataError = ({ dataError, onInitialClose }: DataErrorProps) => {
  const insufficientStock = groupByReference(dataError)?.[REFERENCES.INSUFFICIENT_STOCK];

  return (
    <Stack gap={1} minHeight={400} maxHeight={600}>
      <DetailHeaderAction onClose={onInitialClose} title='warehouse.import.summary.error.dataError' />
      <InsufficientStock data={insufficientStock} />
    </Stack>
  );
};

export default memo(OrderStatusDataError);

const InsufficientStock = ({ data }: { data: any[] }) => {
  const { t } = useTranslation('stock');
  return (
    <Stack gap={1} mt={1}>
      <Typography fontWeight={600}>{t('insufficientStock')}</Typography>
      <CustomWidthTable minWidth={300}>
        <Table data={data} columns={dataErrorInsufficientStockColumn} total={data?.length} hidePagination />
      </CustomWidthTable>
    </Stack>
  );
};

const groupByReference = (data: any[]): any => {
  return data.reduce((acc: any, item) => {
    const reference = item.response.reference;
    if (!acc[reference]) {
      acc[reference] = [];
    }
    acc[reference].push(item);
    return acc;
  }, {});
};
