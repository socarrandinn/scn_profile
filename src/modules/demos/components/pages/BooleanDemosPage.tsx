import { memo } from 'react';
import { H1, H4 } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { Container } from 'components/styled';
import BooleanDemosContainer from '../container/BooleanDemosContainer';

const BooleanDemosPage = () => {
  const { t } = useTranslation('demos');

  return (
    <Container className={'mx-auto my-8'}>
      <H1 textAlign={'center'} mb={1}>
        {t('boolean.title')}
      </H1>
      <H4 textAlign={'center'} mb={4}>
        {t('boolean.subtitle')}
      </H4>
      <BooleanDemosContainer />
    </Container>
  );
};

export default memo(BooleanDemosPage);
