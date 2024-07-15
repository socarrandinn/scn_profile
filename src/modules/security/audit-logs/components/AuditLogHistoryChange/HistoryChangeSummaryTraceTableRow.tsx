import { memo } from 'react';
import { TableCell, TableRow, Typography } from '@mui/material';
import { isArray, isBoolean, isNaN, isNull } from 'lodash';
import { DateValue } from '@dfl/mui-react-common';
import { Trans } from 'react-i18next';
import { AuditLogEventCustomCase, AuditLogEventCustomCaseByArray } from '../AuditLogEventCustomCase';
import { StatusSwitchView } from 'components/libs/preview/StatusSwitchView';
import AuditLogEventCustomCaseObject from '../AuditLogEventCustomCase/AuditLogEventCustomCaseObject';

const components = {
  b: <Typography component={'span'} fontWeight={600} />,
};

type HistoryChangeSummaryTraceTableRowProps = {
  rowObj: any;
  _key: string;
};

const HistoryChangeSummaryTraceTableRow = ({ _key, rowObj }: HistoryChangeSummaryTraceTableRowProps) => {
  // const { t } = useTranslation('trace');
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
              <StatusSwitchView status={value} />
            </TableCell>
          );
        }

        if (!isNaN(Number(value))) {
          return <TableCell key={index}>{value}</TableCell>;
        }

        if (!isNaN(Date.parse(value))) {
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
