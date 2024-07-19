import { memo } from 'react';
import { TableCell, TableRow, Typography } from '@mui/material';
import { isArray, isBoolean, isNaN, isNull } from 'lodash';
import { DateValue } from '@dfl/mui-react-common';
import { Trans } from 'react-i18next';
import { AuditLogEventCustomCase, AuditLogEventCustomCaseByArray } from '../AuditLogEventCustomCase';
import AuditLogEventCustomCaseObject from '../AuditLogEventCustomCase/AuditLogEventCustomCaseObject';
import CheckView from '../TableCells/CheckView';

const components = {
  b: <Typography component={'span'} fontWeight={600} />,
};

type HistoryChangeSummaryTraceTableRowProps = {
  rowObj: any;
  _key: string;
};

const HistoryChangeSummaryTraceTableRow = ({ _key, rowObj }: HistoryChangeSummaryTraceTableRowProps) => {
  const keys = [`auditLog:translate:${_key}:es`, `auditLog:translate:${_key}`];
  return (
    <TableRow key={_key}>
      <TableCell>
        <Trans i18nKey={keys} components={components} />
      </TableCell>
      {rowObj?.[_key]?.map((value: any, index: number) => {
        if (isNull(value)) {
          return <TableCell key={index}>-</TableCell>;
        }

        if (isArray(value)) {
          return <AuditLogEventCustomCaseByArray key={index} _key={_key} value={value} />;
        }

        if (typeof value === 'object') {
          return <AuditLogEventCustomCaseObject key={index} _key={_key} value={value} />;
        }

        if (isBoolean(value)) {
          return (
            <TableCell key={index}>
              <CheckView check={value} />
            </TableCell>
          );
        }

        if (!isNaN(Number(value))) {
          return <TableCell key={index}>{value}</TableCell>;
        }

        if (isValidDate(value)) {
          return (
            <TableCell key={index}>
              <DateValue value={value} />
            </TableCell>
          );
        }

        return <AuditLogEventCustomCase key={index} _key={_key} value={value} />;
      })}
    </TableRow>
  );
};

export default memo(HistoryChangeSummaryTraceTableRow);

const isValidDate = (dateString: string) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (!dateString.match(regex)) {
    return false;
  }

  const date = new Date(dateString);

  const timestamp = date.getTime();
  if (isNaN(timestamp)) {
    return false;
  }
  const [year, month, day] = dateString.split('-');
  if (
    date.getUTCFullYear() !== Number(year) ||
    date.getUTCMonth() + 1 !== Number(month) ||
    date.getUTCDate() !== Number(day)
  ) {
    return false;
  }

  return true;
};
