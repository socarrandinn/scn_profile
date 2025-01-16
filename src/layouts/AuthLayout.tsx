import { memo } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { AuthOptions } from 'modules/authentication/components/AuthOptions';
import { Stack } from '@mui/material';
import { FormCard } from '@dfl/mui-form-layout';

const AuthLayout = ({ children, className }: ChildrenProps & { className?: string }) => {
  return (
    <Stack alignItems={'center'} justifyContent={'center'} sx={{ minHeight: '100vh' }} className={className}>
      <FormCard rounded sx={{ maxWidth: 600 }}>
        <div>{children}</div>
      </FormCard>
      <AuthOptions />
    </Stack>
  );
};

export default memo(AuthLayout);
