import { memo } from 'react';
import { H1, H4 } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { Container } from 'modules/demos/buttons/components/styled';
import { AuthLayoutDemo } from 'modules/demos/layouts/pages';

const AuthLayoutPage = () => {
  const { t } = useTranslation('demos');

  return (
    <Container className={'mx-auto my-8'}>
      <H1 textAlign={'center'} mb={1}>
        {t('containers.flexBox.title')}
      </H1>
      <H4
          dangerouslySetInnerHTML={{ __html: t('containers.flexBox.description') }}
      />
      <AuthLayoutDemo />
    </Container>
  );
};

export default memo(AuthLayoutPage);
