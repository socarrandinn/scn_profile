import { memo } from 'react';
import { AuthenticationModule } from '../modules';
import AuthAppLayout from './layout/AuthAppLayout';

const AuthApp = () => {
  return (
    <AuthAppLayout>
      <AuthenticationModule />
    </AuthAppLayout>
  );
};

export default memo(AuthApp);
