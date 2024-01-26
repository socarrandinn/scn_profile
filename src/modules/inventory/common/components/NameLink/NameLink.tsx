import { FlexBox } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
import { Typography } from '@mui/material';
import { isEmpty } from 'lodash';
import { memo } from 'react';

type NameLinkProps = {
  name: string;
  noLink?: boolean;
  route?: string;
};

const NameLink = ({ noLink = false, name, route }: NameLinkProps) => {
  if (isEmpty(name)) return <></>;
  if (noLink) return <>{name}</>;

  return (
    <ReactLink to={route || '/'} underline={'hover'}>
      <FlexBox gap={1}>
        <Typography>{name}</Typography>
      </FlexBox>
    </ReactLink>
  );
};

export default memo(NameLink);

export const renderNameLink = ({ name, noLink, route }: NameLinkProps) => {
  return <NameLink name={name} noLink={noLink} route={route} />;
};
