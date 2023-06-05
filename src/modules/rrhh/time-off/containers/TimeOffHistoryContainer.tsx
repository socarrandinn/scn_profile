import { memo } from 'react';
import PagePaperLayout from 'layouts/PageLayouts/PagePaperLayout';
import { Table, TableProvider } from '@dfl/mui-admin-layout';
import { historyFilters } from '../constants/time-off.filters';
import { useFindTimeOffRequest } from 'modules/rrhh/time-off/hooks/useFindTimeOffRequest';
import { requestColumns } from 'modules/rrhh/time-off/constants/time-off.columns';

const TimeOffHistoryContainer = () => {
  const { isLoading, error, data } = useFindTimeOffRequest();

  return (
        <PagePaperLayout>
            <TableProvider id={'time-off-request-table'} filters={historyFilters}>
                {/* <Toolbar /> */}
                <Table
                    columns={requestColumns}
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
