import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { TableContainer, Table, TableCell, TableBody, TableHead, Box } from '@mui/material';
import { isEmpty } from 'lodash';
import HistoryChangeSummaryTraceTableRow from './HistoryChangeSummaryTraceTableRow';
import TableRow from '@mui/material/TableRow';
import HistoryChangeEmptyList from './HistoryChangeEmptyList';
import { useAuditLogFunction } from '../../hooks/useAuditLogFunction';

type HistoryChangeSummaryTraceTableProps = {
  changes: any;
};

const HistoryChangeSummaryTraceTable = ({ changes }: HistoryChangeSummaryTraceTableProps) => {
  const { t } = useTranslation('auditLog');
  const { onFlattenObject } = useAuditLogFunction();
  const rowObj = onFlattenObject(changes);

  if (isEmpty(rowObj)) return <HistoryChangeEmptyList />;
  return (
    <>
      {Object.keys(changes)[0] === 'reimbursement' ? (
        <TableContainer component={Box} mt={1}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{t('summary.value')}</TableCell>
                <TableCell width={'25%'}>{t('translate.status.amount')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{t('translate.status.reimbursementTitle')}</TableCell>
                <TableCell>{Object.values(rowObj)[0][1].restored}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t('translate.status.inventory')}</TableCell>
                <TableCell>{Object.values(rowObj)[0][1].stock}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <TableContainer component={Box} mt={1}>
          <Table sx={{ minWidth: 800, width: '100%' }}>
            <TableHead>
              <TableRow>
                <TableCell>{t('summary.nameKey')}</TableCell>
                <TableCell width={'50%'}>{t('summary.value')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(rowObj)?.map((key: string) => (
                <HistoryChangeSummaryTraceTableRow key={key} _key={key} rowObj={rowObj} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default memo(HistoryChangeSummaryTraceTable);
