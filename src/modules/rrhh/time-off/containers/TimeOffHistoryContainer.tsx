import { memo } from 'react';
import PagePaperLayout from 'layouts/PageLayouts/PagePaperLayout';
import { Table, TableProvider } from '@dfl/mui-admin-layout';
import { historyFilters } from '../constants/time-off.filters';
import { historyColumns } from '../constants/time-off.columns';
import { useFindTimeOff } from 'modules/rrhh/time-off/hooks/useFindTimeOff';

const TimeOffHistoryContainer = () => {
  const { isLoading, error, data } = useFindTimeOff();

  return (
    <PagePaperLayout>
      <TableProvider id={'time-off-request-table'} filters={historyFilters}>
        {/* <Toolbar /> */}
        <Table
          columns={historyColumns}
          data={data?.data}
          total={data?.total}
          select={false}
          isLoading={isLoading}
          error={error}
        />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(TimeOffHistoryContainer);
