import { IDataSummary } from 'modules/common/interfaces/common-data-error';
import { memo } from 'react';
import CardItem from './CardItem';
import { Stack } from '@mui/material';
import DeleteIcon from 'components/icons/DeleteIcon';
import SuccessListIcon from 'components/icons/SuccessListIcon';
import DocumentListIcon from 'components/icons/DocumentListIcon';
import { useTranslation } from 'react-i18next';
type DeleteSummaryProps = {
  data: IDataSummary;
};

const DeleteSummary = ({ data }: DeleteSummaryProps) => {
  const { t } = useTranslation('common');
  return (
    <Stack gap={1} mt={2} flexDirection={{ xs: 'column', md: 'row' }}>
      <CardItem color='primary' title={t('bulk.summary.success')} count={data?.success} icon={<SuccessListIcon />} />
      <CardItem color='error' title={t('bulk.summary.error')} count={data?.error || 0} icon={<DeleteIcon />} />
      {data?.total && (
        <CardItem
          variant='outlined'
          color='primary'
          title={t('bulk.summary.total')}
          count={data?.total}
          icon={<DocumentListIcon />}
        />
      )}
    </Stack>
  );
};

export default memo(DeleteSummary);
