import { memo } from 'react';
import { TableCell, TableRow, Typography } from '@mui/material';
import { isArray, isBoolean, isNaN, isNull } from 'lodash';
import { DateValue } from '@dfl/mui-react-common';
import { Trans } from 'react-i18next';

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
          return <TableCell key={index}>{<pre> {JSON.stringify(value, null, 2)} </pre>}</TableCell>;
        }

        if (typeof value === 'object') {
          return (
            <TableCell key={index}>
              {<pre> {JSON.stringify(value, null, 2)} </pre>}
            </TableCell>
          );
        }

        if (isBoolean(value)) {
          return (
            <TableCell key={index}>
              {value ? <Typography>Activo</Typography> : <Typography>Inactivo</Typography>}
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

        return <TableCell key={index}>{value}</TableCell>;
      })}
    </TableRow>
  );
};

export default memo(HistoryChangeSummaryTraceTableRow);
