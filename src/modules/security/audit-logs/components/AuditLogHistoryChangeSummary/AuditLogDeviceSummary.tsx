import { memo } from 'react';
import { IAudiLogDevice } from '../../interfaces';
import { Box, Collapse } from '@mui/material';
import { DetailStack, DetailStackItemRecord } from '@dfl/mui-react-common';
import { renderClientTypeView } from '../TableCells/ClientTypeView';
import { renderDeviceTypeView } from '../TableCells/DeviceTypeView';
import { AuditLogSnippet } from '../AuditLogSnippet';

type AuditLogDeviceSummaryProps = {
  device: IAudiLogDevice;
  expanded: boolean;
};

const AuditLogDeviceSummary = ({ device, expanded }: AuditLogDeviceSummaryProps) => {
  return (
    <Collapse in={expanded} timeout='auto' unmountOnExit sx={{ mt: 2 }}>
      <Box
        sx={(theme) => ({
          padding: 2,
          borderRadius: 2,
          backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[800],
        })}
      >
        <DetailStack details={DEVICE_DETAILS} data={device} />
      </Box>
    </Collapse>
  );
};

export default memo(AuditLogDeviceSummary);

const DEVICE_DETAILS: DetailStackItemRecord[] = [
  {
    label: 'auditLog:device.ip',
    render: (device: IAudiLogDevice) => device?.ip && <AuditLogSnippet ip={device?.ip} />,
    hideEmpty: true,
    translate: true,
  },
  /*  {
    label: 'auditLog:device.hash',
    render: (device: IAudiLogDevice) =>
      device?.hash && <Typography sx={{ wordBreak: 'break-word' }}>{device?.hash}</Typography>,
    hideEmpty: true,
    translate: true,
  }, */
  {
    label: 'auditLog:device.bot',
    render: (device: IAudiLogDevice) => device?.bot,
    hideEmpty: true,
    translate: true,
  },

  {
    label: 'Client',
    divider: true,
  },
  {
    label: 'auditLog:device.client.type',
    render: (device: IAudiLogDevice) => device?.client?.type && renderClientTypeView(device?.client?.type),
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'auditLog:device.client.name',
    render: (device: IAudiLogDevice) => device?.client?.name,
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'auditLog:device.client.version',
    render: (device: IAudiLogDevice) => device?.client?.version,
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'auditLog:device.client.engine',
    render: (device: IAudiLogDevice) => device?.client?.engine,
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'auditLog:device.client.engineVersion',
    render: (device: IAudiLogDevice) => device?.client?.engineVersion,
    hideEmpty: true,
    translate: true,
  },

  {
    label: 'os',
    divider: true,
  },

  {
    label: 'auditLog:device.os.name',
    render: (device: IAudiLogDevice) => device?.os?.name,
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'auditLog:device.os.platform',
    render: (device: IAudiLogDevice) => device?.os?.platform,
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'auditLog:device.os.version',
    render: (device: IAudiLogDevice) => device?.os?.version,
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'device',
    divider: true,
  },
  {
    label: 'auditLog:device.device.model',
    render: (device: IAudiLogDevice) => device?.device?.model,
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'auditLog:device.device.type',
    render: (device: IAudiLogDevice) => device?.device?.type && renderDeviceTypeView(device?.device?.type),
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'auditLog:device.device.brand',
    render: (device: IAudiLogDevice) => device?.device?.brand,
    hideEmpty: true,
    translate: true,
  },
];
