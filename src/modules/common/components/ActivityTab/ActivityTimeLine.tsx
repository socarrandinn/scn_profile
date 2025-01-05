import { useTablePagination } from '@dfl/mui-admin-layout';
import { TablePagination } from '@mui/material';
import { memo } from 'react';
import ActivityTimeLineItem from './ActivityTimeLineItem';
import { HistoryLine } from './styled';
import { IAuditLogEntity } from 'modules/security/audit-logs/interfaces';

type Props = {
  data: IAuditLogEntity[];
  total: number;
};

const ActivityTimeLine = ({ data, total }: Props) => {
  const { page, rowsPerPage, onPageChange, onRowsPerPageChange } = useTablePagination();

  return (
    <>
      <HistoryLine>
        {data?.map((item, idx: number) => (
          <ActivityTimeLineItem key={idx} data={item} />
        ))}
      </HistoryLine>
      {total > 0 &&
        <TablePagination
          rowsPerPageOptions={[3, 5, 10, 25]}
          component='div'
          count={total}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      }
    </>
  );
};

export default memo(ActivityTimeLine);
