import { Skeleton } from '@mui/material';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { useFindOneUsers } from 'modules/security/users/hooks/useFindOneUsers';
import { memo } from 'react';

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
    <AvatarNameCell
      link={link || `/security/users/user/${data?._id as string}/general`}
      name={data?.fullName as string}
      image={data?.avatar}
      hideLink={hiddenLink}
      permissions={['ADMIN']}
    />
  );
};

export default memo(OwnerIdCell);
