import { Stack } from '@mui/material';
import { memo } from 'react';
import CardItem from '../CardItem';
import { useTranslation } from 'react-i18next';
import { ItemAction } from '../ItemAction';
import {
  IOrderStatusSuccessData,
  IOrderStatusSummary,
  ORDER_STATUS_SUMMARY_CASE,
} from 'modules/sales/sub-orders/interfaces';
import { useOrderStatusCaseAction } from 'modules/sales/common/hooks/useItemAction';

const SuccessCardItems = ({
  summary,
  successData,
}: {
  summary: IOrderStatusSummary;
  successData: IOrderStatusSuccessData;
}) => {
  const { t } = useTranslation('subOrder');
  const { handleOpen /*  isOpen, onClose, summaryCase */ } = useOrderStatusCaseAction();

  return (
    <Stack gap={1} mt={2} flexDirection={'row'} flexWrap={'wrap'} flex='1 1 50%'>
      {successData?.dataError?.length > 0 && (
        <CardItem
          color='error'
          title={t('statusImport.summary.error.dataError')}
          count={successData?.dataError?.length || 0}
          variant='outlined'
          action={
            <ItemAction
              disabled={(successData?.dataError?.length ?? 0) === 0}
              color='error'
              onOpen={() => {
                handleOpen(ORDER_STATUS_SUMMARY_CASE.dataError);
              }}
            />
          }
        />
      )}

      {summary?.summary?.statusNoExist?.length > 0 && (
        <CardItem
          color='error'
          title={t('statusImport.summary.statusNoExist')}
          count={successData?.dataError?.length || 0}
          variant='outlined'
          action={
            <ItemAction
              disabled={(summary?.summary?.statusNoExist?.length ?? 0) === 0}
              color='error'
              onOpen={() => {
                handleOpen(ORDER_STATUS_SUMMARY_CASE.statusNoExist);
              }}
            />
          }
        />
      )}
      {summary?.summary?.statusNoExist?.length > 0 && (
        <CardItem
          color='error'
          title={t('statusImport.summary.statusNoExist')}
          count={successData?.dataError?.length || 0}
          variant='outlined'
          action={
            <ItemAction
              disabled={(summary?.summary?.statusNoExist?.length ?? 0) === 0}
              color='error'
              onOpen={() => {
                handleOpen(ORDER_STATUS_SUMMARY_CASE.suborderNoExist);
              }}
            />
          }
        />
      )}
    </Stack>
  );
};

export default memo(SuccessCardItems);
