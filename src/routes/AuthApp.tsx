import { memo } from 'react';
import { AuthenticationModule } from '../modules';
import AuthAppLayout from './layout/AuthAppLayout';

const MainApp = () => {
  return (
    <AuthAppLayout>
      <AuthenticationModule />
    </AuthAppLayout>
  );
};

export default memo(MainApp);
