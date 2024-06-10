import { memo } from 'react';
import { UserList } from 'modules/security/users/pages';
import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';

const UserStore = () => {
  const { t } = useTranslation('users');
  return (
    <PagePaperLayout mt={0} title={t('userList')}>
      <UserList />
    </PagePaperLayout>
  );
};

export default memo(UserStore);
