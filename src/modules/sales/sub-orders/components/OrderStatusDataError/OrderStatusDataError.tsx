import { memo } from 'react';
import { Alert, AlertTitle, Chip, Stack, Typography } from '@mui/material';
import DetailHeaderAction from 'modules/inventory/product-stock/components/DetailHeaderAction/DetailHeaderAction';
import { useTranslation } from 'react-i18next';
type DataErrorProps = {
  dataError: any[];
  onInitialClose: () => void;
};

enum REFERENCES {
  STATUS_NOT_ALLOWED = 'STATUS_NOT_ALLOWED',
}

const OrderStatusDataError = ({ dataError, onInitialClose }: DataErrorProps) => {
  return (
    <Stack gap={1} minHeight={400} maxHeight={600}>
      <DetailHeaderAction onClose={onInitialClose} title='subOrder:statusImport.summary.error.dataError' />
      {dataError && removeDuplicates(dataError)?.map((item, index) => <ReasonError key={index} {...item} />)}
    </Stack>
  );
};

export default memo(OrderStatusDataError);

type RejectedItem = {
  reason: {
    response: {
      message: string;
      payload: {
        status: string;
      };
      reference: REFERENCES;
    };
  };
};
const ReasonError = (item: RejectedItem) => {
  const { t } = useTranslation('subOrder');
  const message = REFERENCES[item?.reason?.response?.reference];
  return (
    <Stack
      sx={{
        gap: 1,
        flexDirection: 'column',
      }}
    >
      <Alert severity='error' icon={<></>}>
        <AlertTitle>
          {item?.reason?.response?.payload?.status && (
            <Stack sx={{ flexDirection: 'row', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
              <Chip size='small' color='error' variant='outlined' label={t('common:status')} />
              {item?.reason?.response?.payload?.status}
            </Stack>
          )}
        </AlertTitle>
        <Typography>{message ? t(`subOrder:errors.${message}`) : item?.reason?.response?.message}</Typography>
      </Alert>
    </Stack>
  );
};

const removeDuplicates = (data: RejectedItem[]): RejectedItem[] => {
  const uniqueStatuses = new Set<string>();

  return data.filter((item) => {
    const status = item.reason?.response?.payload?.status;
    if (status && !uniqueStatuses.has(status)) {
      uniqueStatuses.add(status);
      return true;
    }
    return false;
  });
};
