import { memo } from 'react';
import { useFindOneUsers } from 'modules/security/users/hooks/useFindOneUsers';
import { ReactLink } from '@dfl/react-security';
import { FlexBox } from '@dfl/mui-react-common';
import { Skeleton, Stack, Typography } from '@mui/material';

type StoreProveedorCellProps = {
  userid: string;
};

const StoreProveedorCell = ({ userid }: StoreProveedorCellProps) => {
  const { data, isLoading } = useFindOneUsers(userid);
  if (isLoading) {
    return <Skeleton variant='text' sx={{ fontSize: '1rem' }} />;
  }
  return (
    <ReactLink to={`/security/providers-users/user/${data?._id as string}/general`} underline={'hover'}>
      <FlexBox alignItems={'center'} gap={1}>
        <Stack>
          <Typography>{data?.fullName}</Typography>
        </Stack>
      </FlexBox>
    </ReactLink>
  );
};

export default memo(StoreProveedorCell);
