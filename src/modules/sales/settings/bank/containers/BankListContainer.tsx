import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { bankColumns } from '../constants';
import { BankListToolbar } from '../components/BankListToolbar';
import { useFindBanks } from '../hooks/useFindBanks';
import BankEditModal from './BankEditModal';

const BankListContainer = () => {
  const { isLoading, error, data } = useFindBanks();

  return (
    <Box>
      <BankListToolbar />
      <Table
        columns={bankColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select={false}
      />
      <BankEditModal />
    </Box>
  );
};

export default memo(BankListContainer);
