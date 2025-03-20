import { LongText } from '@dfl/mui-react-common';
import { ReactLink, useSecurity } from '@dfl/react-security';
import { SxProps } from '@mui/material';
import { isEmpty } from 'lodash';
import { memo } from 'react';

type NameLinkProps = {
  name: string;
  noLink?: boolean;
  route?: string;
  sx?: SxProps;
  permissions: string | string[];
};

const NameLink = ({ noLink = false, name, route, sx, permissions }: NameLinkProps) => {
  const { hasPermission } = useSecurity();

  if (isEmpty(name)) return <></>;
  if (noLink || !hasPermission(permissions)) return <>{name}</>;

  return (
    <ReactLink to={route || '/'} underline={'hover'}>
      <LongText lineClamp={1} text={name} sx={sx} />
    </ReactLink>
  );
};

export default memo(NameLink);

export const renderNameLink = ({ name, noLink, route, sx, permissions }: NameLinkProps) => {
  return <NameLink name={name} noLink={noLink} route={route} sx={sx} permissions={permissions} />;
};
