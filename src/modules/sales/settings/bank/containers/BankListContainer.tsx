import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindBanks } from 'modules/sales/settings/bank/hooks/useFindBanks';
import { bankColumns } from 'modules/sales/settings/bank/constants/bank.columns';
import { BankListToolbar } from 'modules/sales/settings/bank/components/BankListToolbar';
import BankEditModal from 'modules/sales/settings/bank/containers/BankEditModal';

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
        select
      />
      <BankEditModal />
    </Box>
  );
};

export default memo(BankListContainer);
