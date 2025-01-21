import { CellType, HeadCell } from '@dfl/mui-admin-layout';
import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CloseSessionUserDevice } from '../components/CloseSessionUserDevice';
import { DateValue } from '@dfl/mui-react-common';
import { IDevice } from '../interfaces/IDevice';

export const nameColumn: HeadCell = {
  field: 'name',
  headerName: 'account:devices.device',
  renderCell: (name: string, data) => name || data?.client,
};

export const ipColumn: HeadCell = {
  field: '_id',
  headerName: 'account:devices.ip',
  renderCell: (_id: any) => _id?.ip,
};

export const activeColumn: HeadCell = {
  field: 'active',
  headerName: 'account:devices.status',
  renderCell: (active: number) => <DeviceStatus active={active || 0} />,
};

export const lastUseColumn: HeadCell = {
  field: 'lastUse',
  headerName: 'account:devices.lastUse',
  type: CellType.DATE,
  renderCell: (lastUse: string) => <DateValue value={lastUse} />,
};

export const actionColumn: HeadCell = {
  field: 'action',
  headerName: 'common:actions',
  renderCell: (_act, data: IDevice) => <CloseSessionUserDevice hash={data._id?.hash} ip={data._id?.ip} />,
};

export const deviceColumns = [nameColumn, ipColumn, activeColumn, lastUseColumn, actionColumn];

const DeviceStatus = ({ active }: { active: number }) => {
  const { t } = useTranslation('account');
  return (
    <>
      {active > 0 ? (
        <Chip variant={'filled'} label={t('devices.active')} color={'success'} size={'small'} />
      ) : (
        <Chip variant={'filled'} label={t('devices.inactive')} size={'small'} />
      )}
    </>
  );
};
