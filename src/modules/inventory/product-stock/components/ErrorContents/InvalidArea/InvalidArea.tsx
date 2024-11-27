import { memo } from 'react';
import { IStockDetailCallback } from '../../../interfaces/IStockSummary';
import DetailHeaderAction from '../../DetailHeaderAction/DetailHeaderAction';
import { Divider, Stack } from '@mui/material';
import InvalidAreaList from './InvalidAreaList';

export type SupplierNoRelationProps = Pick<IStockDetailCallback, 'invalidArea'> & {
  onInitialClose: () => void;
};

const InvalidArea = ({ invalidArea, onInitialClose }: SupplierNoRelationProps) => {
  return (
    <Stack gap={1} minHeight={400} maxHeight={600}>
      <DetailHeaderAction onClose={onInitialClose} title='warehouse.import.summary.error.invalidArea' />
      <Stack gap={2} divider={<Divider orientation='horizontal' flexItem />}>
        <InvalidAreaList invalidArea={invalidArea} />
      </Stack>
    </Stack>
  );
};

export default memo(InvalidArea);
