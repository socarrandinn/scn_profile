import { LongText } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
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
      <LongText lineClamp={1} text={name} />
    </ReactLink>
  );
};

export default memo(NameLink);

export const renderNameLink = ({ name, noLink, route }: NameLinkProps) => {
  return <NameLink name={name} noLink={noLink} route={route} />;
};
