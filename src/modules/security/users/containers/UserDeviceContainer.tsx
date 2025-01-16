import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { memo } from 'react';
import { DateValue, ErrorResult, PageLoader } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { Chip } from '@mui/material';
import { CloseSessionUserDevice } from 'modules/security/users/components/CloseSessionUserDevice';
import { useParams } from 'react-router';
import { DFLError } from '@dfl/react-security';
import { IUserDevices } from 'modules/security/users/interfaces/IUserDevices';

export type UserDeviceContainerProps = {
  isLoading: boolean,
  error?: any,
  data?: IUserDevices[]
}

const UserDeviceContainer = ({ isLoading, error, data }: UserDeviceContainerProps) => {
  const { id } = useParams();
  const { t } = useTranslation('account');

  if (isLoading) {
    return <PageLoader size={80} />;
  }
  if (error) {
    return <ErrorResult error={error as DFLError} />;
  }

  return (
    <Table sx={{ minWidth: 650 }} aria-label='simple table'>
      <TableHead>
        <TableRow>
          <TableCell>{t('devices.device')}</TableCell>
          <TableCell>{t('devices.ip')}</TableCell>
          <TableCell>{t('devices.status')}</TableCell>
          <TableCell>{t('devices.lastUse')}</TableCell>
          <TableCell align={'right'}>{t('devices.actions')}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((row, index) => (
          <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component='th' scope='row'>
              {row.name || row.client}
            </TableCell>
            <TableCell>{row._id?.ip}</TableCell>
            <TableCell>
              {row.active > 0
                ? (
                  <Chip variant={'filled'} label={t('devices.active')} color={'success'} size={'small'} />
                  )
                : (
                  <Chip variant={'filled'} label={t('devices.inactive')} size={'small'} />
                  )}
            </TableCell>
            <TableCell>
              <DateValue value={row.lastUse} format={'PPp'} />
            </TableCell>
            <TableCell align={'right'}>
              <CloseSessionUserDevice hash={row._id?.hash} ip={row._id?.ip} userId={id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default memo(UserDeviceContainer);
