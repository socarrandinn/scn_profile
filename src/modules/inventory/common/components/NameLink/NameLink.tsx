import { LongText } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
import { SxProps } from '@mui/material';
import { isEmpty } from 'lodash';
import { memo } from 'react';

type NameLinkProps = {
  name: string;
  noLink?: boolean;
  route?: string;
  sx?: SxProps;
};

const NameLink = ({ noLink = false, name, route, sx }: NameLinkProps) => {
  if (isEmpty(name)) return <></>;
  if (noLink) return <>{name}</>;

  return (
    <ReactLink to={route || '/'} underline={'hover'}>
      <LongText lineClamp={1} text={name} sx={sx} />
    </ReactLink>
  );
};

export default memo(NameLink);

export const renderNameLink = ({ name, noLink, route, sx }: NameLinkProps) => {
  return <NameLink name={name} noLink={noLink} route={route} sx={sx} />;
};
