import { memo } from 'react';
import { useFindUserDevices } from '../hooks/useFindUserDevices';
import { Table, TableProvider } from '@dfl/mui-admin-layout';
import { deviceColumns } from '../constants/device.columns';
import { useParams } from 'react-router';

type Props = {
  userId: string;
};
const UserDeviceContainer = ({ userId }: Props) => {
  const { id } = useParams();
  const { isLoading, error, data } = useFindUserDevices(id ?? userId);

  return (
    <TableProvider id={'device-user'}>
      <Table
        columns={deviceColumns}
        data={data?.data || []}
        total={data?.total || 0}
        isLoading={isLoading}
        error={error}
      />
    </TableProvider>
  );
};
export default memo(UserDeviceContainer);
