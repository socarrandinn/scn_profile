import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Link } from '@mui/material';
import { DetailStack, DetailStackItemRecord, HandlerError } from '@dfl/mui-react-common';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';
import OrderClientInfoSkeleton from './OrderClientInfoSkeleton';
import { FormPaper } from 'modules/common/components/FormPaper';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { ClientIcon } from 'modules/crm/common/components/icons';
import { FormattedAddressCell } from 'components/AddressCell';
import { grey } from '@mui/material/colors';

type Props = {
  nm?: boolean;
};
const OrderClientInfo = ({ nm }: Props) => {
  const { t } = useTranslation('order');
  const { isLoading, order, error } = useOrderContext();

  if (isLoading) {
    return (
      <Box sx={{ mt: 2 }}>
        <OrderClientInfoSkeleton />
      </Box>
    );
  }

  if (error) {
    return (
      <FormPaper nm={nm} title={t('billing.billingClient.title')}>
        <HandlerError error={error} />
      </FormPaper>
    );
  }

  return (
    <FormPaper nm={nm} title={t('billing.billingClient.title')}>
      {order?.client && (
        <Box sx={{ p: '8px 16px', backgroundColor: grey[100], borderRadius: 1 }}>
          <AvatarNameCell
            link={`/crm/clients/${order?.client?._id as string}/general`}
            name={order?.client?.fullName as string}
            secondary={order?.client?.email}
            image={order?.client?.avatar}
            icon={<ClientIcon fontSize='small' />}
            sx={{
              '.MuiAvatar-root': {
                backgroundColor: 'primary.main',
              },
            }}
          />
        </Box>
      )}
      <DetailStack details={details} data={order} />
    </FormPaper>
  );
};

export default memo(OrderClientInfo);

export const details: DetailStackItemRecord[] = [
  {
    divider: true,
  },
  {
    label: 'common:name',
    translate: true,

    render: (value: IOrder) =>
      value?.billing?.person?.firstName && (
        <>{`${value?.billing?.person?.firstName} ${value?.billing?.person?.lastName}`}</>
      ),
  },

  {
    label: 'common:email',
    translate: true,
    forceMultiline: true,

    render: (value: IOrder) =>
      value?.billing?.person?.email && (
        <Link href={`mailto:${value?.billing?.person?.email}`}>{value?.billing?.person?.email}</Link>
      ),
  },
  {
    label: 'common:phone',
    translate: true,

    render: (value: IOrder) =>
      value?.billing?.person?.phone && (
        <Link href={`tel:${value?.billing?.person?.phone}`}>{value?.billing?.person?.phone}</Link>
      ),
  },
  {
    label: 'common:address',
    translate: true,

    render: (value: IOrder) => value?.billing?.address && <FormattedAddressCell address={value?.billing?.address} />,
  },
  {
    divider: true,
  },
  {
    label: 'order:device.ip',
    translate: true,
    hideEmpty: true,
    render: (value: IOrder) => value?.device?.ip,
  },
  {
    label: 'order:device.device.type',
    translate: true,
    hideEmpty: true,
    render: (value: IOrder) => value?.device?.device?.type,
  },
  {
    label: 'order:device.client.name',
    translate: true,
    hideEmpty: true,
    render: (value: IOrder) => value?.device?.client?.name && <DriverClient value={value?.device?.client} />,
  },
];

const DriverClient = ({ value }: { value: any }) => {
  return <>{`${value?.name as string} ${value?.version ? `(${value?.version as string})` : ''}`}</>;
};
