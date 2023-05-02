import { memo } from 'react';
import { H1, H4 } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { Container } from 'components/styled';
import CheckDemosContainer from '../container/CheckDemosContainer';

const CheckDemosPage = () => {
  const { t } = useTranslation('demos');

  return (
    <Container className={'mx-auto my-8'}>
      <H1 textAlign={'center'} mb={1}>
        {t('check.title')}
      </H1>
      <H4 textAlign={'center'} mb={4}>
        {t('check.subtitle')}
      </H4>
      <CheckDemosContainer />
    </Container>
  );
};

export default memo(CheckDemosPage);
