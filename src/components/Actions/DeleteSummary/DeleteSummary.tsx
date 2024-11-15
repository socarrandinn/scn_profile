import { IDataSummary } from 'modules/common/interfaces/common-data-error';
import { memo } from 'react';
import CardItem from './CardItem';
import { Stack } from '@mui/material';
import DeleteIcon from 'components/icons/DeleteIcon';
import SuccessListIcon from 'components/icons/SuccessListIcon';
import DocumentListIcon from 'components/icons/DocumentListIcon';
type DeleteSummaryProps = {
  data: IDataSummary;
};

const DeleteSummary = ({ data }: DeleteSummaryProps) => {
  return (
    <Stack gap={1} mt={2} flexDirection={'row'} flexWrap={'wrap'} flex='1 1 50%'>
      <CardItem color='primary' title='Completado' count={data?.success} icon={<SuccessListIcon />} />
      <CardItem color='error' title='Con Error' count={data?.error} icon={<DeleteIcon />} />
      <CardItem variant='outlined' color='primary' title='Total' count={data?.total} icon={<DocumentListIcon />} />
    </Stack>
  );
};

export default memo(DeleteSummary);
