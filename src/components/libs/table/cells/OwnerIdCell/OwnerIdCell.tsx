import { Skeleton } from '@mui/material';
import { useFindOneUsers } from 'modules/security/users/hooks/useFindOneUsers';
import { memo } from 'react';
import { ClientCell } from '../ClientCell';

type OwnerIdCellProps = {
  owner: string;
  hiddenLink?: boolean;
  link?: string;
};

const OwnerIdCell = ({ owner, hiddenLink = false, link = '' }: OwnerIdCellProps) => {
  const { data, isLoading, error } = useFindOneUsers(owner);
  if (isLoading) return <Skeleton variant='rounded' sx={{ maxWidth: 200, width: '100%' }} />;
  if (error) return <></>;

  return (
    <ClientCell
      link={link || `/security/users/${data?._id as string}/general`}
      name={data?.fullName as string}
      image={data?.avatar}
      showAvatar
      hiddenLink={hiddenLink}
    />
  );
};

export default memo(OwnerIdCell);
